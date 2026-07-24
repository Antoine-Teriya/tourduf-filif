// app-commun.js
// Module partagé - Application aide à la régate Tour du Finistère 2026
// Chargé par les 7 pages (accueil + 6 fonctionnalités).
// Fournit : gestion du mode simulation (sessionStorage), getEffectiveNow(), getEffectivePosition(),
// getEtapeDuJour(). Cf. specs_app_regate_tourduf2026_v1.html, Section 9.

(function (global) {
  'use strict';

  var CLE_SESSION = 'tourduf_mode_simulation';

  var ESCALES = ['Roscoff', "Aber Wrac'h", 'Lanildut', 'Camaret-sur-Mer', 'Douarnenez', 'Port la Forêt'];

  // Coordonnées des 6 escales - source : IC_Tour_du_Finistère_2026.pdf, Annexe Parcours,
  // waypoints "Arrivée" de la dernière course menant à l'escale (identiques entre variantes de
  // parcours d'une même course) ; pour Roscoff, jamais une arrivée, waypoint "Départ" de la
  // Course 1. Degrés décimaux convertis par Claude à partir des degrés/minutes de la source
  // (conversion arithmétique directe, sans arrondi). Règle de sélection validée par Antoine
  // le 24/07/2026, avant codage de la fonctionnalité 4 (météo).
  var COORDONNEES_ESCALES = {
    'Roscoff': { lat: 48.726633, lon: -3.944767 },
    "Aber Wrac'h": { lat: 48.600167, lon: -4.564417 },
    'Lanildut': { lat: 48.469333, lon: -4.777417 },
    'Camaret-sur-Mer': { lat: 48.282167, lon: -4.586667 },
    'Douarnenez': { lat: 48.106000, lon: -4.342917 },
    'Port la Forêt': { lat: 47.875333, lon: -3.966917 }
  };

  var DATE_DEBUT_COURSE = '2026-07-27';
  var DATE_FIN_COURSE = '2026-08-01';

  // Calendrier des étapes - reconstruction Claude validée par Antoine (23/07/2026).
  // Ancrages sources : dates de course verrouillées (27/07 au 01/08/2026, textes_valides Section 1),
  // liste Course 1 à 6 avec ports (textes_valides Section 6.3), Course 3 = 29/07 et bascule
  // vendredi 17h00 entre Course 5 et Course 6 confirmées par la matrice de test (specs Section 9).
  var CALENDRIER_COURSES = [
    { date: '2026-07-27', heureLimite: null, numero: 1, portDepart: 'Roscoff', portArrivee: "Aber Wrac'h" },
    { date: '2026-07-28', heureLimite: null, numero: 2, portDepart: "Aber Wrac'h", portArrivee: 'Lanildut' },
    { date: '2026-07-29', heureLimite: null, numero: 3, portDepart: 'Lanildut', portArrivee: 'Camaret-sur-Mer' },
    { date: '2026-07-30', heureLimite: null, numero: 4, portDepart: 'Camaret-sur-Mer', portArrivee: 'Douarnenez' },
    { date: '2026-07-31', heureLimite: '17:00', numero: 5, portDepart: 'Douarnenez', portArrivee: 'Douarnenez' },
    { date: '2026-07-31', heureLimite: null, numero: 6, portDepart: 'Douarnenez', portArrivee: 'Port la Forêt' }
  ];

  // ---- Lecture/écriture du mode simulation (sessionStorage) ----

  function lireModeSimulation() {
    try {
      var brut = sessionStorage.getItem(CLE_SESSION);
      if (!brut) { return null; }
      var data = JSON.parse(brut);
      if (data && data.mode === 'simulation') { return data; }
      return null;
    } catch (e) {
      return null;
    }
  }

  function activerModeSimulation(jour, heure, position) {
    var data = { mode: 'simulation', jour: jour, heure: heure, position: position };
    sessionStorage.setItem(CLE_SESSION, JSON.stringify(data));
  }

  function desactiverModeSimulation() {
    sessionStorage.removeItem(CLE_SESSION);
  }

  function estModeSimulationActif() {
    return lireModeSimulation() !== null;
  }

  // ---- getEffectiveNow ----

  function getEffectiveNow() {
    var simulation = lireModeSimulation();
    if (!simulation) { return new Date(); }
    var parties = (simulation.heure || '00:00').split(':');
    var h = parseInt(parties[0], 10) || 0;
    var m = parseInt(parties[1], 10) || 0;
    var d = new Date(simulation.jour + 'T00:00:00');
    d.setHours(h, m, 0, 0);
    return d;
  }

  // ---- getEffectivePosition ----
  // Retourne une Promise résolue en {lat, lon, label, type} ou null (position indisponible).

  function getEffectivePosition() {
    var simulation = lireModeSimulation();
    if (simulation) {
      var pos = simulation.position;
      if (!pos || pos.type === 'indisponible') {
        return Promise.resolve(null);
      }
      if (pos.type === 'escale') {
        var coord = COORDONNEES_ESCALES[pos.valeur];
        if (!coord) { return Promise.resolve({ lat: null, lon: null, label: pos.valeur, type: 'escale' }); }
        return Promise.resolve({ lat: coord.lat, lon: coord.lon, label: pos.valeur, type: 'escale' });
      }
      if (pos.type === 'personnalise' && pos.valeur) {
        return Promise.resolve({ lat: pos.valeur.lat, lon: pos.valeur.lon, label: 'Personnalisé', type: 'personnalise' });
      }
      return Promise.resolve(null);
    }
    // Mode course : géolocalisation réelle du terminal.
    return new Promise(function (resolve) {
      if (!('geolocation' in navigator)) { resolve(null); return; }
      navigator.geolocation.getCurrentPosition(
        function (p) {
          resolve({ lat: p.coords.latitude, lon: p.coords.longitude, label: 'Ma position', type: 'reel' });
        },
        function () { resolve(null); },
        { enableHighAccuracy: true, timeout: 8000 }
      );
    });
  }

  // ---- getEtapeDuJour ----

  function formatDateISO(date) {
    var y = date.getFullYear();
    var m = String(date.getMonth() + 1).padStart(2, '0');
    var j = String(date.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + j;
  }

  function getEtapeDuJour(dateReference) {
    var date = dateReference || getEffectiveNow();
    var dateISO = formatDateISO(date);

    if (dateISO < DATE_DEBUT_COURSE) {
      return Object.assign({}, CALENDRIER_COURSES[0], { repli: 'avant-course' });
    }
    if (dateISO > DATE_FIN_COURSE) {
      var derniere = CALENDRIER_COURSES[CALENDRIER_COURSES.length - 1];
      return Object.assign({}, derniere, { repli: 'apres-course' });
    }

    var entrees = CALENDRIER_COURSES.filter(function (c) { return c.date === dateISO; });
    if (entrees.length === 1) {
      return Object.assign({}, entrees[0], { repli: null });
    }
    // Vendredi 31/07 : deux entrées ce jour-là, bascule sur l'heure (seuil 17h00).
    var heureCourante = date.getHours() * 60 + date.getMinutes();
    var seuil = 17 * 60;
    var choisie = heureCourante < seuil ? entrees[0] : entrees[1];
    return Object.assign({}, choisie, { repli: null });
  }

  global.AppCommun = {
    ESCALES: ESCALES,
    COORDONNEES_ESCALES: COORDONNEES_ESCALES,
    lireModeSimulation: lireModeSimulation,
    activerModeSimulation: activerModeSimulation,
    desactiverModeSimulation: desactiverModeSimulation,
    estModeSimulationActif: estModeSimulationActif,
    getEffectiveNow: getEffectiveNow,
    getEffectivePosition: getEffectivePosition,
    getEtapeDuJour: getEtapeDuJour
  };

})(window);
