// voiles-data.js
// Table de configuration des voiles et vitesses cibles de Filifer (First 27.7 QR).
// Source unique : textes_valides_app_regate_v20.md, section 5.7 (table validee),
// elle-meme issue du fichier de polaires retenu en section 2.1.
// Genere automatiquement (v1.0) : aucune valeur saisie manuellement.
// Codes (section 5.6) : GV0/GV1/GV2 = GV pleine / 1er ris / 2e ris ;
// Gen0/Gen1/Gen2 = genois plein / reduit / davantage reduit (zone 32-70 uniquement) ;
// SpiAsym, SpiSym. Le champ "alt" porte l'alternative de voile d'avant au portant.
(function (global) {
  'use strict';

  var TWS = [6, 10, 14, 16, 20, 25, 35];
  var TWA = [32, 36, 40, 45, 52, 60, 70, 80, 90, 100, 110, 120, 135, 150, 160, 165, 170, 180];

  // TABLE[twa] = tableau de 7 cellules, dans l'ordre des colonnes TWS.
  var TABLE = {
    "32": [{gv:"GV0",voile:"Gen0",v:3.72,alt:null},{gv:"GV0",voile:"Gen0",v:5.16,alt:null},{gv:"GV0",voile:"Gen0",v:5.62,alt:null},{gv:"GV1",voile:"Gen1",v:5.71,alt:null},{gv:"GV2",voile:"Gen2",v:5.82,alt:null},{gv:"GV2",voile:"Gen2",v:5.84,alt:null},{gv:"GV2",voile:"Gen2",v:5.49,alt:null}],
    "36": [{gv:"GV0",voile:"Gen0",v:4.16,alt:null},{gv:"GV0",voile:"Gen0",v:5.55,alt:null},{gv:"GV0",voile:"Gen0",v:5.92,alt:null},{gv:"GV1",voile:"Gen1",v:6.03,alt:null},{gv:"GV2",voile:"Gen2",v:6.15,alt:null},{gv:"GV2",voile:"Gen2",v:6.21,alt:null},{gv:"GV2",voile:"Gen2",v:6.05,alt:null}],
    "40": [{gv:"GV0",voile:"Gen0",v:4.52,alt:null},{gv:"GV0",voile:"Gen0",v:5.82,alt:null},{gv:"GV0",voile:"Gen0",v:6.18,alt:null},{gv:"GV1",voile:"Gen1",v:6.28,alt:null},{gv:"GV2",voile:"Gen2",v:6.42,alt:null},{gv:"GV2",voile:"Gen2",v:6.49,alt:null},{gv:"GV2",voile:"Gen2",v:6.38,alt:null}],
    "45": [{gv:"GV0",voile:"Gen0",v:4.88,alt:null},{gv:"GV0",voile:"Gen0",v:6.09,alt:null},{gv:"GV0",voile:"Gen0",v:6.43,alt:null},{gv:"GV1",voile:"Gen1",v:6.53,alt:null},{gv:"GV2",voile:"Gen2",v:6.66,alt:null},{gv:"GV2",voile:"Gen2",v:6.75,alt:null},{gv:"GV2",voile:"Gen2",v:6.74,alt:null}],
    "52": [{gv:"GV0",voile:"Gen0",v:5.27,alt:null},{gv:"GV0",voile:"Gen0",v:6.39,alt:null},{gv:"GV0",voile:"Gen0",v:6.69,alt:null},{gv:"GV1",voile:"Gen1",v:6.8,alt:null},{gv:"GV2",voile:"Gen2",v:6.95,alt:null},{gv:"GV2",voile:"Gen2",v:7.07,alt:null},{gv:"GV2",voile:"Gen2",v:7.13,alt:null}],
    "60": [{gv:"GV0",voile:"Gen0",v:5.57,alt:null},{gv:"GV0",voile:"Gen0",v:6.63,alt:null},{gv:"GV0",voile:"Gen0",v:6.95,alt:null},{gv:"GV1",voile:"Gen1",v:7.06,alt:null},{gv:"GV2",voile:"Gen2",v:7.24,alt:null},{gv:"GV2",voile:"Gen2",v:7.4,alt:null},{gv:"GV2",voile:"Gen2",v:7.53,alt:null}],
    "70": [{gv:"GV0",voile:"Gen0",v:5.75,alt:null},{gv:"GV0",voile:"Gen0",v:6.87,alt:null},{gv:"GV0",voile:"Gen0",v:7.22,alt:null},{gv:"GV1",voile:"Gen1",v:7.36,alt:null},{gv:"GV2",voile:"Gen2",v:7.59,alt:null},{gv:"GV2",voile:"Gen2",v:7.78,alt:null},{gv:"GV2",voile:"Gen2",v:7.99,alt:null}],
    "80": [{gv:"GV0",voile:"SpiAsym",v:6.03,alt:{voile:"SpiSym",v:5.8}},{gv:"GV0",voile:"SpiAsym",v:6.99,alt:{voile:"SpiSym",v:6.99}},{gv:"GV0",voile:"SpiAsym",v:7.48,alt:{voile:"SpiSym",v:7.48}},{gv:"GV1",voile:"SpiAsym",v:7.64,alt:{voile:"SpiSym",v:7.64}},{gv:"GV2",voile:"SpiAsym",v:7.9,alt:{voile:"SpiSym",v:7.9}},{gv:"GV2",voile:"SpiAsym",v:8.17,alt:{voile:"SpiSym",v:8.17}},{gv:"GV2",voile:"SpiAsym",v:8.54,alt:{voile:"SpiSym",v:8.54}}],
    "90": [{gv:"GV0",voile:"SpiAsym",v:6.2,alt:{voile:"SpiSym",v:5.77}},{gv:"GV0",voile:"SpiAsym",v:7.1,alt:{voile:"SpiSym",v:7.0}},{gv:"GV0",voile:"SpiAsym",v:7.7,alt:{voile:"SpiSym",v:7.7}},{gv:"GV1",voile:"SpiAsym",v:7.89,alt:{voile:"SpiSym",v:7.89}},{gv:"GV2",voile:"SpiAsym",v:8.23,alt:{voile:"SpiSym",v:8.23}},{gv:"GV2",voile:"SpiAsym",v:8.63,alt:{voile:"SpiSym",v:8.63}},{gv:"GV2",voile:"SpiAsym",v:9.23,alt:{voile:"SpiSym",v:9.23}}],
    "100": [{gv:"GV0",voile:"SpiAsym",v:6.21,alt:{voile:"SpiSym",v:5.86}},{gv:"GV0",voile:"SpiAsym",v:7.28,alt:{voile:"SpiSym",v:6.99}},{gv:"GV0",voile:"SpiAsym",v:7.82,alt:{voile:"SpiSym",v:7.76}},{gv:"GV1",voile:"SpiAsym",v:8.09,alt:{voile:"SpiSym",v:8.09}},{gv:"GV2",voile:"SpiAsym",v:8.59,alt:{voile:"SpiSym",v:8.59}},{gv:"GV2",voile:"SpiAsym",v:9.13,alt:{voile:"SpiSym",v:9.13}},{gv:"GV2",voile:"SpiAsym",v:10.11,alt:{voile:"SpiSym",v:10.11}}],
    "110": [{gv:"GV0",voile:"SpiAsym",v:6.08,alt:{voile:"SpiSym",v:5.77}},{gv:"GV0",voile:"SpiAsym",v:7.37,alt:{voile:"SpiSym",v:7.09}},{gv:"GV0",voile:"SpiAsym",v:8.04,alt:{voile:"SpiSym",v:7.65}},{gv:"GV1",voile:"SpiAsym",v:8.33,alt:{voile:"SpiSym",v:8.02}},{gv:"GV2",voile:"SpiAsym",v:8.92,alt:{voile:"SpiSym",v:8.92}},{gv:"GV2",voile:"SpiAsym",v:9.74,alt:{voile:"SpiSym",v:9.74}},{gv:"GV2",voile:"SpiAsym",v:11.03,alt:{voile:"SpiSym",v:11.03}}],
    "120": [{gv:"GV0",voile:"SpiAsym",v:5.84,alt:{voile:"SpiSym",v:5.54}},{gv:"GV0",voile:"SpiAsym",v:7.25,alt:{voile:"SpiSym",v:7.04}},{gv:"GV0",voile:"SpiAsym",v:8.24,alt:{voile:"SpiSym",v:7.84}},{gv:"GV1",voile:"SpiAsym",v:8.62,alt:{voile:"SpiSym",v:8.12}},{gv:"GV2",voile:"SpiAsym",v:9.38,alt:{voile:"SpiSym",v:8.75}},{gv:"GV2",voile:"SpiAsym",v:10.38,alt:{voile:"SpiSym",v:10.27}},{gv:"GV2",voile:"SpiAsym",v:12.22,alt:{voile:"SpiSym",v:12.04}}],
    "135": [{gv:"GV0",voile:"SpiSym",v:4.9,alt:{voile:"SpiAsym",v:5.13}},{gv:"GV0",voile:"SpiSym",v:6.72,alt:{voile:"SpiAsym",v:6.84}},{gv:"GV0",voile:"SpiSym",v:7.79,alt:{voile:"SpiAsym",v:7.94}},{gv:"GV1",voile:"SpiSym",v:8.35,alt:{voile:"SpiAsym",v:8.59}},{gv:"GV2",voile:"SpiSym",v:9.55,alt:{voile:"SpiAsym",v:10.12}},{gv:"GV2",voile:"SpiSym",v:10.8,alt:{voile:"SpiAsym",v:11.53}},{gv:"GV2",voile:"SpiSym",v:13.24,alt:{voile:"SpiAsym",v:14.04}}],
    "150": [{gv:"GV0",voile:"SpiSym",v:4.09,alt:{voile:"SpiAsym",v:4.19}},{gv:"GV0",voile:"SpiSym",v:6.12,alt:{voile:"SpiAsym",v:6.22}},{gv:"GV0",voile:"SpiSym",v:7.24,alt:{voile:"SpiAsym",v:7.34}},{gv:"GV1",voile:"SpiSym",v:7.74,alt:{voile:"SpiAsym",v:7.86}},{gv:"GV2",voile:"SpiSym",v:8.98,alt:{voile:"SpiAsym",v:9.23}},{gv:"GV2",voile:"SpiSym",v:11.41,alt:{voile:"SpiAsym",v:11.87}},{gv:"GV2",voile:"SpiSym",v:15.15,alt:{voile:"SpiAsym",v:15.72}}],
    "160": [{gv:"GV0",voile:"SpiSym",v:3.55,alt:{voile:"SpiAsym",v:3.63}},{gv:"GV0",voile:"SpiSym",v:5.63,alt:{voile:"SpiAsym",v:5.71}},{gv:"GV0",voile:"SpiSym",v:6.89,alt:{voile:"SpiAsym",v:6.97}},{gv:"GV1",voile:"SpiSym",v:7.38,alt:{voile:"SpiAsym",v:7.48}},{gv:"GV2",voile:"SpiSym",v:8.45,alt:{voile:"SpiAsym",v:8.62}},{gv:"GV2",voile:"SpiSym",v:10.53,alt:{voile:"SpiAsym",v:10.83}},{gv:"GV2",voile:"SpiSym",v:15.92,alt:{voile:"SpiAsym",v:16.38}}],
    "165": [{gv:"GV0",voile:"SpiSym",v:3.38,alt:{voile:"SpiAsym",v:3.44}},{gv:"GV0",voile:"SpiSym",v:5.43,alt:{voile:"SpiAsym",v:5.51}},{gv:"GV0",voile:"SpiSym",v:6.76,alt:{voile:"SpiAsym",v:6.84}},{gv:"GV1",voile:"SpiSym",v:7.24,alt:{voile:"SpiAsym",v:7.34}},{gv:"GV2",voile:"SpiSym",v:8.25,alt:{voile:"SpiAsym",v:8.42}},{gv:"GV2",voile:"SpiSym",v:10.18,alt:{voile:"SpiAsym",v:10.5}},{gv:"GV2",voile:"SpiSym",v:15.57,alt:{voile:"SpiAsym",v:16.07}}],
    "170": [{gv:"GV0",voile:"SpiSym",v:3.25,alt:{voile:"SpiAsym",v:3.32}},{gv:"GV0",voile:"SpiSym",v:5.26,alt:{voile:"SpiAsym",v:5.36}},{gv:"GV0",voile:"SpiSym",v:6.64,alt:{voile:"SpiAsym",v:6.74}},{gv:"GV1",voile:"SpiSym",v:7.12,alt:{voile:"SpiAsym",v:7.23}},{gv:"GV2",voile:"SpiSym",v:8.08,alt:{voile:"SpiAsym",v:8.27}},{gv:"GV2",voile:"SpiSym",v:9.86,alt:{voile:"SpiAsym",v:10.24}},{gv:"GV2",voile:"SpiSym",v:15.07,alt:{voile:"SpiAsym",v:15.68}}],
    "180": [{gv:"GV0",voile:"SpiSym",v:3.05,alt:{voile:"SpiAsym",v:3.19}},{gv:"GV0",voile:"SpiSym",v:4.99,alt:{voile:"SpiAsym",v:5.18}},{gv:"GV0",voile:"SpiSym",v:6.42,alt:{voile:"SpiAsym",v:6.6}},{gv:"GV1",voile:"SpiSym",v:6.91,alt:{voile:"SpiAsym",v:7.09}},{gv:"GV2",voile:"SpiSym",v:7.81,alt:{voile:"SpiAsym",v:8.07}},{gv:"GV2",voile:"SpiSym",v:9.28,alt:{voile:"SpiAsym",v:9.86}},{gv:"GV2",voile:"SpiSym",v:15.07,alt:{voile:"SpiAsym",v:15.04}}]
  };

  function meilleureVitesse(cellule) {
    if (cellule.alt && cellule.alt.v > cellule.v) { return cellule.alt.v; }
    return cellule.v;
  }

  function encadrer(valeur, liste) {
    if (valeur <= liste[0]) { return [0, 0, 0]; }
    if (valeur >= liste[liste.length - 1]) { var d = liste.length - 1; return [d, d, 0]; }
    for (var i = 0; i < liste.length - 1; i++) {
      if (valeur <= liste[i + 1]) {
        return [i, i + 1, (valeur - liste[i]) / (liste[i + 1] - liste[i])];
      }
    }
    return [0, 0, 0];
  }

  // Vitesse cible interpolee (bilineaire TWA/TWS), en noeuds.
  // Retourne null sous 32 degres : hors table, zone non tenable.
  function vitesse(twa, tws) {
    var a = Math.abs(twa);
    if (a < TWA[0]) { return null; }
    if (a > 180) { a = 360 - a; }
    var ia = encadrer(a, TWA);
    var iv = encadrer(tws, TWS);
    var l1 = TABLE[TWA[ia[0]]], l2 = TABLE[TWA[ia[1]]];
    var v11 = meilleureVitesse(l1[iv[0]]), v12 = meilleureVitesse(l1[iv[1]]);
    var v21 = meilleureVitesse(l2[iv[0]]), v22 = meilleureVitesse(l2[iv[1]]);
    var bas = v11 + (v12 - v11) * iv[2];
    var haut = v21 + (v22 - v21) * iv[2];
    return bas + (haut - bas) * ia[2];
  }

  // Configuration recommandee : cellule de la table la plus proche (pas d'interpolation
  // possible sur une donnee non numerique).
  function configuration(twa, tws) {
    var a = Math.abs(twa);
    if (a > 180) { a = 360 - a; }
    if (a < TWA[0]) { return null; }
    var proche = function (valeur, liste) {
      var meilleur = 0;
      for (var i = 1; i < liste.length; i++) {
        if (Math.abs(liste[i] - valeur) < Math.abs(liste[meilleur] - valeur)) { meilleur = i; }
      }
      return liste[meilleur];
    };
    var ligne = TABLE[proche(a, TWA)];
    var iv = TWS.indexOf(proche(tws, TWS));
    return ligne[iv];
  }

  global.VoilesData = {
    TWS: TWS,
    TWA: TWA,
    TABLE: TABLE,
    vitesse: vitesse,
    configuration: configuration
  };

})(window);
