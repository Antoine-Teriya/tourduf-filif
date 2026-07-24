// app-commun.js
// Module partagé - Application aide à la régate Tour du Finistère 2026
// Chargé par les 7 pages (accueil + 6 fonctionnalités).
// Fournit : gestion du mode simulation (sessionStorage), getEffectiveNow(), getEffectivePosition(),
// getEtapeDuJour(). Cf. specs_app_regate_tourduf2026_v1.html, Section 9.
// AJOUT v0.3 (24/07/2026) : MAREES_REFERENCE, PORT_REFERENCE_PAR_ETAPE, getMareeReference()
// pour la fonctionnalité 5 (courants et marées). Reste du fichier inchangé.

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

  // Port de référence marée/courant retenu par étape (fonctionnalité 5). Décision Antoine du
  // 24/07/2026 : un seul port de référence par étape même quand le corridor traverse plusieurs
  // secteurs du produit SHOM "Courants de marée 2D" (cas de l'étape 1). Voir courants-data.js,
  // champ "note" par étape pour le détail des approximations assumées.
  var PORT_REFERENCE_PAR_ETAPE = {
    1: 'Roscoff',
    2: 'Brest',
    3: 'Brest',
    4: 'Brest',
    5: 'Brest',
    6: 'Concarneau'
  };

  // Table des horaires de marée réels (PM/BM, hauteur en m, coefficient), relevés sur
  // maree.shom.fr le 24/07/2026 (heure légale, référentiel standard). Couverture : 14 jours
  // pour Roscoff et Brest (20/07 au 02/08/2026), 7 jours pour Concarneau (27/07 au 02/08,
  // suffisant : l'étape 6 se déroule le 31/07-01/08). Au-delà du 02/08, le service SHOM ne
  // renvoie plus de prédiction (limite technique constatée, pas une lacune de relevé) :
  // getMareeReference() recale alors sur la dernière date disponible de la table.
  var MAREES_REFERENCE = {
  "Roscoff": {
    "2026-07-20": [
      {
        "type": "BM",
        "heure": "05:17",
        "hauteur": 2.05,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "11:11",
        "hauteur": 7.89,
        "coefficient": 69
      },
      {
        "type": "BM",
        "heure": "17:32",
        "hauteur": 2.44,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "23:24",
        "hauteur": 7.88,
        "coefficient": 63
      }
    ],
    "2026-07-21": [
      {
        "type": "BM",
        "heure": "05:55",
        "hauteur": 2.61,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "11:50",
        "hauteur": 7.48,
        "coefficient": 57
      },
      {
        "type": "BM",
        "heure": "18:13",
        "hauteur": 2.96,
        "coefficient": null
      }
    ],
    "2026-07-22": [
      {
        "type": "PM",
        "heure": "00:07",
        "hauteur": 7.38,
        "coefficient": 50
      },
      {
        "type": "BM",
        "heure": "06:37",
        "hauteur": 3.15,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "12:37",
        "hauteur": 7.1,
        "coefficient": 45
      },
      {
        "type": "BM",
        "heure": "19:01",
        "hauteur": 3.43,
        "coefficient": null
      }
    ],
    "2026-07-23": [
      {
        "type": "PM",
        "heure": "01:00",
        "hauteur": 6.93,
        "coefficient": 40
      },
      {
        "type": "BM",
        "heure": "07:30",
        "hauteur": 3.59,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "13:40",
        "hauteur": 6.81,
        "coefficient": 37
      },
      {
        "type": "BM",
        "heure": "20:07",
        "hauteur": 3.76,
        "coefficient": null
      }
    ],
    "2026-07-24": [
      {
        "type": "PM",
        "heure": "02:13",
        "hauteur": 6.64,
        "coefficient": 35
      },
      {
        "type": "BM",
        "heure": "08:43",
        "hauteur": 3.84,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "15:00",
        "hauteur": 6.74,
        "coefficient": 35
      },
      {
        "type": "BM",
        "heure": "21:28",
        "hauteur": 3.8,
        "coefficient": null
      }
    ],
    "2026-07-25": [
      {
        "type": "PM",
        "heure": "03:38",
        "hauteur": 6.63,
        "coefficient": 37
      },
      {
        "type": "BM",
        "heure": "10:03",
        "hauteur": 3.77,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "16:16",
        "hauteur": 6.94,
        "coefficient": 40
      },
      {
        "type": "BM",
        "heure": "22:40",
        "hauteur": 3.55,
        "coefficient": null
      }
    ],
    "2026-07-26": [
      {
        "type": "PM",
        "heure": "04:48",
        "hauteur": 6.88,
        "coefficient": 44
      },
      {
        "type": "BM",
        "heure": "11:08",
        "hauteur": 3.47,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "17:14",
        "hauteur": 7.29,
        "coefficient": 48
      },
      {
        "type": "BM",
        "heure": "23:37",
        "hauteur": 3.15,
        "coefficient": null
      }
    ],
    "2026-07-27": [
      {
        "type": "PM",
        "heure": "05:40",
        "hauteur": 7.22,
        "coefficient": 53
      },
      {
        "type": "BM",
        "heure": "11:59",
        "hauteur": 3.09,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "17:59",
        "hauteur": 7.65,
        "coefficient": 57
      }
    ],
    "2026-07-28": [
      {
        "type": "BM",
        "heure": "00:23",
        "hauteur": 2.73,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "06:23",
        "hauteur": 7.56,
        "coefficient": 61
      },
      {
        "type": "BM",
        "heure": "12:41",
        "hauteur": 2.73,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "18:37",
        "hauteur": 7.98,
        "coefficient": 65
      }
    ],
    "2026-07-29": [
      {
        "type": "BM",
        "heure": "01:02",
        "hauteur": 2.37,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "07:00",
        "hauteur": 7.84,
        "coefficient": 69
      },
      {
        "type": "BM",
        "heure": "13:19",
        "hauteur": 2.41,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "19:13",
        "hauteur": 8.24,
        "coefficient": 72
      }
    ],
    "2026-07-30": [
      {
        "type": "BM",
        "heure": "01:39",
        "hauteur": 2.07,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "07:34",
        "hauteur": 8.06,
        "coefficient": 75
      },
      {
        "type": "BM",
        "heure": "13:55",
        "hauteur": 2.15,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "19:47",
        "hauteur": 8.45,
        "coefficient": 78
      }
    ],
    "2026-07-31": [
      {
        "type": "BM",
        "heure": "02:14",
        "hauteur": 1.85,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "08:07",
        "hauteur": 8.23,
        "coefficient": 80
      },
      {
        "type": "BM",
        "heure": "14:29",
        "hauteur": 1.96,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "20:20",
        "hauteur": 8.58,
        "coefficient": 82
      }
    ],
    "2026-08-01": [
      {
        "type": "BM",
        "heure": "02:48",
        "hauteur": 1.7,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "08:40",
        "hauteur": 8.33,
        "coefficient": 83
      },
      {
        "type": "BM",
        "heure": "15:02",
        "hauteur": 1.86,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "20:54",
        "hauteur": 8.64,
        "coefficient": 83
      }
    ],
    "2026-08-02": [
      {
        "type": "BM",
        "heure": "03:22",
        "hauteur": 1.65,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "09:13",
        "hauteur": 8.35,
        "coefficient": 83
      },
      {
        "type": "BM",
        "heure": "15:36",
        "hauteur": 1.86,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "21:27",
        "hauteur": 8.59,
        "coefficient": 82
      }
    ]
  },
  "Brest": {
    "2026-07-20": [
      {
        "type": "BM",
        "heure": "04:10",
        "hauteur": 1.75,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "10:05",
        "hauteur": 6.11,
        "coefficient": 69
      },
      {
        "type": "BM",
        "heure": "16:26",
        "hauteur": 2.0,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "22:21",
        "hauteur": 6.1,
        "coefficient": 63
      }
    ],
    "2026-07-21": [
      {
        "type": "BM",
        "heure": "04:54",
        "hauteur": 2.17,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "10:49",
        "hauteur": 5.77,
        "coefficient": 57
      },
      {
        "type": "BM",
        "heure": "17:13",
        "hauteur": 2.39,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "23:08",
        "hauteur": 5.68,
        "coefficient": 50
      }
    ],
    "2026-07-22": [
      {
        "type": "BM",
        "heure": "05:43",
        "hauteur": 2.57,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "11:42",
        "hauteur": 5.47,
        "coefficient": 45
      },
      {
        "type": "BM",
        "heure": "18:07",
        "hauteur": 2.73,
        "coefficient": null
      }
    ],
    "2026-07-23": [
      {
        "type": "PM",
        "heure": "00:06",
        "hauteur": 5.33,
        "coefficient": 40
      },
      {
        "type": "BM",
        "heure": "06:41",
        "hauteur": 2.86,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "12:46",
        "hauteur": 5.27,
        "coefficient": 37
      },
      {
        "type": "BM",
        "heure": "19:13",
        "hauteur": 2.94,
        "coefficient": null
      }
    ],
    "2026-07-24": [
      {
        "type": "PM",
        "heure": "01:19",
        "hauteur": 5.13,
        "coefficient": 35
      },
      {
        "type": "BM",
        "heure": "07:50",
        "hauteur": 2.99,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "14:01",
        "hauteur": 5.25,
        "coefficient": 35
      },
      {
        "type": "BM",
        "heure": "20:28",
        "hauteur": 2.95,
        "coefficient": null
      }
    ],
    "2026-07-25": [
      {
        "type": "PM",
        "heure": "02:38",
        "hauteur": 5.16,
        "coefficient": 37
      },
      {
        "type": "BM",
        "heure": "09:03",
        "hauteur": 2.91,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "15:12",
        "hauteur": 5.43,
        "coefficient": 40
      },
      {
        "type": "BM",
        "heure": "21:37",
        "hauteur": 2.76,
        "coefficient": null
      }
    ],
    "2026-07-26": [
      {
        "type": "PM",
        "heure": "03:45",
        "hauteur": 5.36,
        "coefficient": 44
      },
      {
        "type": "BM",
        "heure": "10:03",
        "hauteur": 2.69,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "16:08",
        "hauteur": 5.7,
        "coefficient": 48
      },
      {
        "type": "BM",
        "heure": "22:31",
        "hauteur": 2.48,
        "coefficient": null
      }
    ],
    "2026-07-27": [
      {
        "type": "PM",
        "heure": "04:34",
        "hauteur": 5.63,
        "coefficient": 53
      },
      {
        "type": "BM",
        "heure": "10:50",
        "hauteur": 2.43,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "16:53",
        "hauteur": 5.99,
        "coefficient": 57
      },
      {
        "type": "BM",
        "heure": "23:14",
        "hauteur": 2.18,
        "coefficient": null
      }
    ],
    "2026-07-28": [
      {
        "type": "PM",
        "heure": "05:15",
        "hauteur": 5.89,
        "coefficient": 61
      },
      {
        "type": "BM",
        "heure": "11:30",
        "hauteur": 2.17,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "17:31",
        "hauteur": 6.25,
        "coefficient": 65
      },
      {
        "type": "BM",
        "heure": "23:52",
        "hauteur": 1.92,
        "coefficient": null
      }
    ],
    "2026-07-29": [
      {
        "type": "PM",
        "heure": "05:51",
        "hauteur": 6.12,
        "coefficient": 69
      },
      {
        "type": "BM",
        "heure": "12:07",
        "hauteur": 1.95,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "18:07",
        "hauteur": 6.48,
        "coefficient": 72
      }
    ],
    "2026-07-30": [
      {
        "type": "BM",
        "heure": "00:28",
        "hauteur": 1.69,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "06:25",
        "hauteur": 6.31,
        "coefficient": 75
      },
      {
        "type": "BM",
        "heure": "12:42",
        "hauteur": 1.76,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "18:42",
        "hauteur": 6.65,
        "coefficient": 78
      }
    ],
    "2026-07-31": [
      {
        "type": "BM",
        "heure": "01:02",
        "hauteur": 1.53,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "06:58",
        "hauteur": 6.44,
        "coefficient": 80
      },
      {
        "type": "BM",
        "heure": "13:16",
        "hauteur": 1.63,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "19:15",
        "hauteur": 6.76,
        "coefficient": 82
      }
    ],
    "2026-08-01": [
      {
        "type": "BM",
        "heure": "01:36",
        "hauteur": 1.43,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "07:31",
        "hauteur": 6.52,
        "coefficient": 83
      },
      {
        "type": "BM",
        "heure": "13:49",
        "hauteur": 1.57,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "19:48",
        "hauteur": 6.8,
        "coefficient": 83
      }
    ],
    "2026-08-02": [
      {
        "type": "BM",
        "heure": "02:09",
        "hauteur": 1.4,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "08:04",
        "hauteur": 6.53,
        "coefficient": 83
      },
      {
        "type": "BM",
        "heure": "14:23",
        "hauteur": 1.58,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "20:22",
        "hauteur": 6.75,
        "coefficient": 82
      }
    ]
  },
  "Concarneau": {
    "2026-07-27": [
      {
        "type": "PM",
        "heure": "04:21",
        "hauteur": 4.09,
        "coefficient": 53
      },
      {
        "type": "BM",
        "heure": "10:28",
        "hauteur": 1.81,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "16:35",
        "hauteur": 4.42,
        "coefficient": 57
      },
      {
        "type": "BM",
        "heure": "22:52",
        "hauteur": 1.66,
        "coefficient": null
      }
    ],
    "2026-07-28": [
      {
        "type": "PM",
        "heure": "05:00",
        "hauteur": 4.26,
        "coefficient": 61
      },
      {
        "type": "BM",
        "heure": "11:07",
        "hauteur": 1.62,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "17:11",
        "hauteur": 4.6,
        "coefficient": 65
      },
      {
        "type": "BM",
        "heure": "23:29",
        "hauteur": 1.47,
        "coefficient": null
      }
    ],
    "2026-07-29": [
      {
        "type": "PM",
        "heure": "05:35",
        "hauteur": 4.42,
        "coefficient": 69
      },
      {
        "type": "BM",
        "heure": "11:42",
        "hauteur": 1.46,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "17:46",
        "hauteur": 4.75,
        "coefficient": 72
      }
    ],
    "2026-07-30": [
      {
        "type": "BM",
        "heure": "00:04",
        "hauteur": 1.3,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "06:06",
        "hauteur": 4.54,
        "coefficient": 75
      },
      {
        "type": "BM",
        "heure": "12:16",
        "hauteur": 1.32,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "18:19",
        "hauteur": 4.86,
        "coefficient": 78
      }
    ],
    "2026-07-31": [
      {
        "type": "BM",
        "heure": "00:38",
        "hauteur": 1.18,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "06:37",
        "hauteur": 4.63,
        "coefficient": 80
      },
      {
        "type": "BM",
        "heure": "12:49",
        "hauteur": 1.23,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "18:51",
        "hauteur": 4.92,
        "coefficient": 82
      }
    ],
    "2026-08-01": [
      {
        "type": "BM",
        "heure": "01:11",
        "hauteur": 1.12,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "07:07",
        "hauteur": 4.68,
        "coefficient": 83
      },
      {
        "type": "BM",
        "heure": "13:22",
        "hauteur": 1.2,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "19:23",
        "hauteur": 4.94,
        "coefficient": 83
      }
    ],
    "2026-08-02": [
      {
        "type": "BM",
        "heure": "01:44",
        "hauteur": 1.11,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "07:38",
        "hauteur": 4.68,
        "coefficient": 83
      },
      {
        "type": "BM",
        "heure": "13:56",
        "hauteur": 1.22,
        "coefficient": null
      },
      {
        "type": "PM",
        "heure": "19:57",
        "hauteur": 4.89,
        "coefficient": 82
      }
    ]
  }
};
  // ---- getMareeReference ----
  // Retourne les événements PM/BM du jour pour un port de référence donné, à partir de
  // MAREES_REFERENCE. Si la date demandée est hors couverture (avant le 20/07 ou après la
  // dernière date disponible pour ce port), recale sur la borne la plus proche de la table
  // (même principe que le recalage des données de courant, cf. mode_test.cas_limite_hors_periode_course).
  function getMareeReference(portReference, dateISO) {
    var table = MAREES_REFERENCE[portReference];
    if (!table) { return null; }
    if (table[dateISO]) {
      return { date: dateISO, evenements: table[dateISO], recale: false };
    }
    var dates = Object.keys(table).sort();
    var dateRecalee = dateISO < dates[0] ? dates[0] : dates[dates.length - 1];
    return { date: dateRecalee, evenements: table[dateRecalee], recale: true, dateDemandee: dateISO };
  }

  // Retourne la prochaine Pleine Mer (ou la PM en cours) du port de référence, utilisée comme
  // ancrage du curseur -6h/+6h (mode Actuel). Choix Claude : ancrage sur la PM la plus proche
  // dans le temps (avant ou après), pas systématiquement la suivante.
  function getPleineMerProche(portReference, date) {
    var dateISO = date.toISOString().slice(0, 10);
    var ref = getMareeReference(portReference, dateISO);
    if (!ref) { return null; }
    var pms = ref.evenements.filter(function (e) { return e.type === 'PM'; });
    if (pms.length === 0) { return null; }
    var minutesCourantes = date.getHours() * 60 + date.getMinutes();
    var meilleure = pms[0];
    var meilleurEcart = Infinity;
    pms.forEach(function (pm) {
      var parties = pm.heure.split(':');
      var minutesPM = parseInt(parties[0], 10) * 60 + parseInt(parties[1], 10);
      var ecart = Math.abs(minutesPM - minutesCourantes);
      if (ecart < meilleurEcart) { meilleurEcart = ecart; meilleure = pm; }
    });
    return Object.assign({}, meilleure, { date: ref.date, recale: ref.recale });
  }

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
    PORT_REFERENCE_PAR_ETAPE: PORT_REFERENCE_PAR_ETAPE,
    MAREES_REFERENCE: MAREES_REFERENCE,
    lireModeSimulation: lireModeSimulation,
    activerModeSimulation: activerModeSimulation,
    desactiverModeSimulation: desactiverModeSimulation,
    estModeSimulationActif: estModeSimulationActif,
    getEffectiveNow: getEffectiveNow,
    getEffectivePosition: getEffectivePosition,
    getEtapeDuJour: getEtapeDuJour,
    getMareeReference: getMareeReference,
    getPleineMerProche: getPleineMerProche
  };

})(window);
