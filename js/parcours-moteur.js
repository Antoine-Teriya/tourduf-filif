// parcours-moteur.js
// Moteur de calcul de la fonctionnalite 6 (parcours de l'etape), v1.0.
// Fonctions pures, sans acces au DOM. Depend de VoilesData (table des voiles)
// et recoit les donnees de courant en parametre.
// Methode validee en session du 25/07/2026 :
//  - bornes de regime DERIVEES de la table des voiles, recalculees par force de vent
//    (angle de meilleure VMG au pres et au grand largue, projection sur l'axe du vent) ;
//  - route directe possible (TWA direct entre les deux bornes) : cap maximisant la
//    projection du vecteur vitesse sur le cap vers la marque, en vent seul puis
//    vent + courant ;
//  - route directe impossible : bords de pres ou de grand largue au TWA cible,
//    amure preferee determinee courant compose ;
//  - courant du segment : echantillonnage au mille, plus proche point SHOM,
//    moyenne vectorielle, minimum et maximum conserves.
(function (global) {
  'use strict';

  var R_MN = 3440.065;
  function rad(d) { return d * Math.PI / 180; }
  function deg(r) { return r * 180 / Math.PI; }
  function norm360(a) { return ((a % 360) + 360) % 360; }
  function norm180(a) { var x = norm360(a); return x > 180 ? x - 360 : x; }

  // Projection equirectangulaire locale, en milles nautiques.
  function plan(p, ref) {
    return {
      x: rad(p.lon - ref.lon) * Math.cos(rad(ref.lat)) * R_MN,
      y: rad(p.lat - ref.lat) * R_MN
    };
  }

  function capEtDistance(a, b) {
    var v = plan(b, a);
    return { cap: norm360(deg(Math.atan2(v.x, v.y))), distance: Math.hypot(v.x, v.y) };
  }

  // Coordonnees d'un point a distance et cap donnes (bouee de degagement).
  function destination(a, cap, distanceMN) {
    var dy = distanceMN * Math.cos(rad(cap)), dx = distanceMN * Math.sin(rad(cap));
    var lat = a.lat + deg(dy / R_MN);
    return { lat: lat, lon: a.lon + deg(dx / (R_MN * Math.cos(rad(a.lat)))) };
  }

  // TWA signe : positif = vent de tribord = amure tribord.
  function twaDe(cap, twd) { return norm180(cap - twd); }
  function amureDe(cap, twd) { return twaDe(cap, twd) >= 0 ? 'tribord' : 'babord'; }

  // Courant moyen sur le segment : un echantillon par mille, plus proche point SHOM,
  // moyenne vectorielle. Retourne aussi le minimum, le maximum et sa position.
  function courantSegment(points, a, b, indexCreneau, facteurVE) {
    if (!points || !points.length) { return { disponible: false }; }
    var d = capEtDistance(a, b).distance;
    var n = Math.max(2, Math.round(d));
    var sx = 0, sy = 0, retenus = {}, mini = null, maxi = null;
    for (var i = 0; i <= n; i++) {
      var e = { lat: a.lat + (b.lat - a.lat) * i / n, lon: a.lon + (b.lon - a.lon) * i / n };
      var best = null, bd = Infinity, bi = -1;
      for (var k = 0; k < points.length; k++) {
        var v = plan(points[k], e), dd = v.x * v.x + v.y * v.y;
        if (dd < bd) { bd = dd; best = points[k]; bi = k; }
      }
      retenus[bi] = true;
      var ve = best.ve[indexCreneau], me = best.me[indexCreneau];
      var sp = me.speed + facteurVE * (ve.speed - me.speed);
      sx += sp * Math.sin(rad(ve.bearing));
      sy += sp * Math.cos(rad(ve.bearing));
      var ech = { vitesse: sp, cap: ve.bearing, distance: d * i / n };
      if (!mini || sp < mini.vitesse) { mini = ech; }
      if (!maxi || sp > maxi.vitesse) { maxi = ech; }
    }
    sx /= (n + 1); sy /= (n + 1);
    return {
      disponible: true, x: sx, y: sy,
      vitesse: Math.hypot(sx, sy), cap: norm360(deg(Math.atan2(sx, sy))),
      minimum: mini, maximum: maxi,
      echantillons: n + 1, pointsSHOM: Object.keys(retenus).length
    };
  }

  // Bornes de regime, derivees de la table des voiles pour la force de vent donnee.
  // Angle de meilleure VMG sur l'axe du vent, au pres puis au grand largue.
  function anglesCibles(tws) {
    var V = global.VoilesData, pres = null, largue = null;
    for (var a = V.TWA[0]; a <= 180; a += 0.5) {
      var v = V.vitesse(a, tws);
      if (v === null) { continue; }
      var vp = v * Math.cos(rad(a)), vl = v * Math.cos(rad(180 - a));
      if (!pres || vp > pres.vmg) { pres = { twa: a, vitesse: v, vmg: vp }; }
      if (!largue || vl > largue.vmg) { largue = { twa: a, vitesse: v, vmg: vl }; }
    }
    return { pres: pres, largue: largue };
  }

  // Vecteur vitesse fond pour un cap donne, courant compose si disponible.
  function etatSurCap(cap, twd, tws, courant) {
    var twa = Math.abs(twaDe(cap, twd));
    var v = global.VoilesData.vitesse(twa, tws);
    if (v === null) { return null; }
    var bx = v * Math.sin(rad(cap)), by = v * Math.cos(rad(cap));
    var cx = (courant && courant.disponible) ? courant.x : 0;
    var cy = (courant && courant.disponible) ? courant.y : 0;
    var fx = bx + cx, fy = by + cy;
    return {
      cap: norm360(cap), twa: twa, amure: amureDe(cap, twd), vitesse: v,
      vitesseFond: Math.hypot(fx, fy), capFond: norm360(deg(Math.atan2(fx, fy))),
      fx: fx, fy: fy
    };
  }

  function vmgVersMarque(etat, capDirect) {
    return etat.vitesseFond * Math.cos(rad(etat.capFond - capDirect));
  }
  function vmgAxeVent(etat, twd) {
    var angleFond = Math.abs(norm180(etat.capFond - twd));
    return etat.twa <= 90 ? etat.vitesseFond * Math.cos(rad(angleFond))
                          : etat.vitesseFond * Math.cos(rad(180 - angleFond));
  }

  // Analyse complete d'un segment. courant = null ou objet courantSegment().
  function analyser(a, b, twd, tws, courant) {
    var seg = capEtDistance(a, b);
    var bornes = anglesCibles(tws);
    var twaDirect = twaDe(seg.cap, twd);
    var abs = Math.abs(twaDirect);
    var regime = abs < bornes.pres.twa ? 'pres'
               : (abs > bornes.largue.twa ? 'largue' : 'direct');

    function resoudre(cour) {
      if (regime === 'direct') {
        var best = null;
        for (var c = 0; c < 360; c += 0.25) {
          var t = Math.abs(twaDe(c, twd));
          if (t < bornes.pres.twa || t > bornes.largue.twa) { continue; }
          var e = etatSurCap(c, twd, tws, cour);
          if (!e) { continue; }
          e.vmg = vmgVersMarque(e, seg.cap);
          if (!best || e.vmg > best.vmg) { best = e; }
        }
        return best;
      }
      var cible = regime === 'pres' ? bornes.pres.twa : bornes.largue.twa;
      var options = [norm360(twd + cible), norm360(twd - cible)].map(function (c) {
        var e = etatSurCap(c, twd, tws, cour);
        e.vmg = vmgAxeVent(e, twd);
        e.progression = vmgVersMarque(e, seg.cap);
        return e;
      });
      var choisi = options[0].progression >= options[1].progression ? options[0] : options[1];
      choisi.autreAmure = choisi === options[0] ? options[1] : options[0];
      return choisi;
    }

    var ventSeul = resoudre(null);
    var ventCourant = (courant && courant.disponible) ? resoudre(courant) : null;
    var conf = global.VoilesData.configuration(ventSeul.twa, tws);
    return {
      capDirect: seg.cap, distance: seg.distance, twaDirect: twaDirect,
      amureDirecte: amureDe(seg.cap, twd), regime: regime, bornes: bornes,
      ventSeul: ventSeul, ventCourant: ventCourant, courant: courant,
      configuration: conf,
      referenceVMG: regime === 'direct' ? 'cap vers la marque' : 'axe du vent'
    };
  }

  global.ParcoursMoteur = {
    capEtDistance: capEtDistance, destination: destination,
    twaDe: twaDe, amureDe: amureDe, courantSegment: courantSegment,
    anglesCibles: anglesCibles, etatSurCap: etatSurCap, analyser: analyser
  };

})(window);
