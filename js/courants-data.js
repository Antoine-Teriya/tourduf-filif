// courants-data.js
// Données de courant réelles, extraites du produit SHOM "Courants de marée 2D"
// (licence Etalab v2.0), fichiers IROISE_560, OUESSANT_560, RADE_BREST_560,
// BRETAGNE_NORD_563, BRETAGNE_SUD_558, GLENAN_558. Traitement Claude (24/07/2026) :
// parsing du format ASCII SHOM (position WGS84 + vive-eau/morte-eau, -6h à +6h par
// rapport à la PM/BM du port de référence), vitesse et direction calculées à partir
// des composantes est/nord, sans interpolation. Voir _lisezmoi de chaque zone (archive
// C2D fournie par Antoine) pour le détail du format source.
// Structure : clé = numéro d'étape (1 à 6). Pour chaque étape : nom, port de
// référence affiché, note d'approximation éventuelle, liste de points
// {lat, lon, source (fichier d'origine), ve: [13 x {speed (nd), bearing (deg)}],
// me: [13 x {...}]}. Index 0 à 12 correspond à -6h à +6h par pas d'1h autour de la
// PM/BM du port de référence.
(function (global) {
  'use strict';
  global.COURANTS_DATA = {
  "1": {
    "nom": "Roscoff -> Aber Wrac'h",
    "port_reference": "Roscoff",
    "note": "Port de reference unique Roscoff (decision Antoine, 24/07). Tronçon proche d'Aber Wrac'h issu du fichier IROISE_560 (reference native Brest) : approximation assumee, a signaler dans l'UI.",
    "nb_points_bruts_disponibles": 78,
    "points": [
      {
        "lat": 48.7946,
        "lon": -4.3021,
        "source": "BRETAGNE_NORD_563",
        "ve": [
          {
            "speed": 1.84,
            "bearing": 257
          },
          {
            "speed": 0.82,
            "bearing": 256
          },
          {
            "speed": 0.51,
            "bearing": 79
          },
          {
            "speed": 1.53,
            "bearing": 79
          },
          {
            "speed": 2.16,
            "bearing": 77
          },
          {
            "speed": 2.26,
            "bearing": 77
          },
          {
            "speed": 1.94,
            "bearing": 78
          },
          {
            "speed": 1.14,
            "bearing": 75
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 1.12,
            "bearing": 260
          },
          {
            "speed": 1.84,
            "bearing": 257
          },
          {
            "speed": 2.16,
            "bearing": 257
          },
          {
            "speed": 1.96,
            "bearing": 255
          }
        ],
        "me": [
          {
            "speed": 0.73,
            "bearing": 254
          },
          {
            "speed": 0.32,
            "bearing": 252
          },
          {
            "speed": 0.22,
            "bearing": 63
          },
          {
            "speed": 0.73,
            "bearing": 74
          },
          {
            "speed": 1.04,
            "bearing": 73
          },
          {
            "speed": 1.04,
            "bearing": 73
          },
          {
            "speed": 0.92,
            "bearing": 77
          },
          {
            "speed": 0.51,
            "bearing": 79
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.51,
            "bearing": 259
          },
          {
            "speed": 0.92,
            "bearing": 257
          },
          {
            "speed": 1.02,
            "bearing": 259
          },
          {
            "speed": 1.02,
            "bearing": 259
          }
        ]
      },
      {
        "lat": 48.7946,
        "lon": -4.0279,
        "source": "BRETAGNE_NORD_563",
        "ve": [
          {
            "speed": 2.1,
            "bearing": 270
          },
          {
            "speed": 1.0,
            "bearing": 276
          },
          {
            "speed": 0.63,
            "bearing": 72
          },
          {
            "speed": 2.04,
            "bearing": 79
          },
          {
            "speed": 2.72,
            "bearing": 84
          },
          {
            "speed": 2.75,
            "bearing": 80
          },
          {
            "speed": 2.28,
            "bearing": 75
          },
          {
            "speed": 1.34,
            "bearing": 63
          },
          {
            "speed": 0.54,
            "bearing": 338
          },
          {
            "speed": 1.81,
            "bearing": 276
          },
          {
            "speed": 2.61,
            "bearing": 266
          },
          {
            "speed": 2.7,
            "bearing": 268
          },
          {
            "speed": 2.4,
            "bearing": 268
          }
        ],
        "me": [
          {
            "speed": 1.0,
            "bearing": 264
          },
          {
            "speed": 0.4,
            "bearing": 270
          },
          {
            "speed": 0.22,
            "bearing": 63
          },
          {
            "speed": 0.81,
            "bearing": 83
          },
          {
            "speed": 1.3,
            "bearing": 86
          },
          {
            "speed": 1.32,
            "bearing": 81
          },
          {
            "speed": 1.12,
            "bearing": 80
          },
          {
            "speed": 0.73,
            "bearing": 74
          },
          {
            "speed": 0.14,
            "bearing": 45
          },
          {
            "speed": 0.6,
            "bearing": 270
          },
          {
            "speed": 1.1,
            "bearing": 265
          },
          {
            "speed": 1.3,
            "bearing": 266
          },
          {
            "speed": 1.2,
            "bearing": 265
          }
        ]
      },
      {
        "lat": 48.7679,
        "lon": -4.165,
        "source": "BRETAGNE_NORD_563",
        "ve": [
          {
            "speed": 1.79,
            "bearing": 243
          },
          {
            "speed": 0.92,
            "bearing": 229
          },
          {
            "speed": 0.58,
            "bearing": 121
          },
          {
            "speed": 1.41,
            "bearing": 82
          },
          {
            "speed": 1.96,
            "bearing": 75
          },
          {
            "speed": 2.09,
            "bearing": 73
          },
          {
            "speed": 1.77,
            "bearing": 74
          },
          {
            "speed": 1.04,
            "bearing": 73
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 1.12,
            "bearing": 260
          },
          {
            "speed": 1.75,
            "bearing": 257
          },
          {
            "speed": 2.09,
            "bearing": 253
          },
          {
            "speed": 1.97,
            "bearing": 246
          }
        ],
        "me": [
          {
            "speed": 0.76,
            "bearing": 247
          },
          {
            "speed": 0.36,
            "bearing": 236
          },
          {
            "speed": 0.2,
            "bearing": 90
          },
          {
            "speed": 0.71,
            "bearing": 82
          },
          {
            "speed": 0.92,
            "bearing": 77
          },
          {
            "speed": 1.04,
            "bearing": 73
          },
          {
            "speed": 0.82,
            "bearing": 76
          },
          {
            "speed": 0.54,
            "bearing": 68
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.41,
            "bearing": 256
          },
          {
            "speed": 0.82,
            "bearing": 256
          },
          {
            "speed": 0.95,
            "bearing": 252
          },
          {
            "speed": 0.95,
            "bearing": 252
          }
        ]
      },
      {
        "lat": 48.7469,
        "lon": -4.4223,
        "source": "IROISE_560",
        "ve": [
          {
            "speed": 2.28,
            "bearing": 255
          },
          {
            "speed": 1.68,
            "bearing": 253
          },
          {
            "speed": 0.85,
            "bearing": 225
          },
          {
            "speed": 0.81,
            "bearing": 83
          },
          {
            "speed": 1.92,
            "bearing": 81
          },
          {
            "speed": 2.33,
            "bearing": 80
          },
          {
            "speed": 2.32,
            "bearing": 83
          },
          {
            "speed": 1.6,
            "bearing": 90
          },
          {
            "speed": 0.9,
            "bearing": 90
          },
          {
            "speed": 0.45,
            "bearing": 243
          },
          {
            "speed": 1.52,
            "bearing": 247
          },
          {
            "speed": 2.24,
            "bearing": 260
          },
          {
            "speed": 2.34,
            "bearing": 250
          }
        ],
        "me": [
          {
            "speed": 1.43,
            "bearing": 258
          },
          {
            "speed": 0.92,
            "bearing": 257
          },
          {
            "speed": 0.42,
            "bearing": 225
          },
          {
            "speed": 0.41,
            "bearing": 76
          },
          {
            "speed": 1.0,
            "bearing": 84
          },
          {
            "speed": 1.12,
            "bearing": 80
          },
          {
            "speed": 1.1,
            "bearing": 85
          },
          {
            "speed": 0.8,
            "bearing": 90
          },
          {
            "speed": 0.41,
            "bearing": 104
          },
          {
            "speed": 0.22,
            "bearing": 243
          },
          {
            "speed": 0.76,
            "bearing": 247
          },
          {
            "speed": 1.12,
            "bearing": 260
          },
          {
            "speed": 1.17,
            "bearing": 250
          }
        ]
      },
      {
        "lat": 48.7412,
        "lon": -4.1846,
        "source": "BRETAGNE_NORD_563",
        "ve": [
          {
            "speed": 1.43,
            "bearing": 245
          },
          {
            "speed": 0.58,
            "bearing": 211
          },
          {
            "speed": 0.81,
            "bearing": 97
          },
          {
            "speed": 1.53,
            "bearing": 79
          },
          {
            "speed": 1.96,
            "bearing": 75
          },
          {
            "speed": 1.96,
            "bearing": 75
          },
          {
            "speed": 1.55,
            "bearing": 75
          },
          {
            "speed": 0.73,
            "bearing": 74
          },
          {
            "speed": 0.4,
            "bearing": 270
          },
          {
            "speed": 1.32,
            "bearing": 261
          },
          {
            "speed": 1.92,
            "bearing": 261
          },
          {
            "speed": 1.96,
            "bearing": 255
          },
          {
            "speed": 1.62,
            "bearing": 248
          }
        ],
        "me": [
          {
            "speed": 0.73,
            "bearing": 254
          },
          {
            "speed": 0.22,
            "bearing": 243
          },
          {
            "speed": 0.32,
            "bearing": 72
          },
          {
            "speed": 0.73,
            "bearing": 74
          },
          {
            "speed": 1.02,
            "bearing": 79
          },
          {
            "speed": 1.02,
            "bearing": 79
          },
          {
            "speed": 0.82,
            "bearing": 76
          },
          {
            "speed": 0.41,
            "bearing": 76
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.51,
            "bearing": 259
          },
          {
            "speed": 0.92,
            "bearing": 257
          },
          {
            "speed": 1.02,
            "bearing": 259
          },
          {
            "speed": 0.92,
            "bearing": 257
          }
        ]
      },
      {
        "lat": 48.7232,
        "lon": -4.3324,
        "source": "IROISE_560",
        "ve": [
          {
            "speed": 2.33,
            "bearing": 260
          },
          {
            "speed": 1.73,
            "bearing": 260
          },
          {
            "speed": 0.92,
            "bearing": 229
          },
          {
            "speed": 0.81,
            "bearing": 83
          },
          {
            "speed": 2.0,
            "bearing": 87
          },
          {
            "speed": 2.3,
            "bearing": 88
          },
          {
            "speed": 2.3,
            "bearing": 90
          },
          {
            "speed": 1.61,
            "bearing": 97
          },
          {
            "speed": 0.91,
            "bearing": 96
          },
          {
            "speed": 0.45,
            "bearing": 243
          },
          {
            "speed": 1.55,
            "bearing": 255
          },
          {
            "speed": 2.32,
            "bearing": 263
          },
          {
            "speed": 2.45,
            "bearing": 258
          }
        ],
        "me": [
          {
            "speed": 1.12,
            "bearing": 260
          },
          {
            "speed": 0.91,
            "bearing": 264
          },
          {
            "speed": 0.42,
            "bearing": 225
          },
          {
            "speed": 0.4,
            "bearing": 90
          },
          {
            "speed": 1.0,
            "bearing": 84
          },
          {
            "speed": 1.2,
            "bearing": 90
          },
          {
            "speed": 1.1,
            "bearing": 90
          },
          {
            "speed": 0.81,
            "bearing": 97
          },
          {
            "speed": 0.41,
            "bearing": 104
          },
          {
            "speed": 0.41,
            "bearing": 104
          },
          {
            "speed": 0.73,
            "bearing": 254
          },
          {
            "speed": 1.2,
            "bearing": 265
          },
          {
            "speed": 1.24,
            "bearing": 256
          }
        ]
      },
      {
        "lat": 48.7146,
        "lon": -4.2042,
        "source": "BRETAGNE_NORD_563",
        "ve": [
          {
            "speed": 0.95,
            "bearing": 252
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.81,
            "bearing": 83
          },
          {
            "speed": 1.43,
            "bearing": 78
          },
          {
            "speed": 1.73,
            "bearing": 80
          },
          {
            "speed": 1.53,
            "bearing": 79
          },
          {
            "speed": 1.12,
            "bearing": 80
          },
          {
            "speed": 0.4,
            "bearing": 90
          },
          {
            "speed": 0.63,
            "bearing": 252
          },
          {
            "speed": 1.36,
            "bearing": 253
          },
          {
            "speed": 1.55,
            "bearing": 255
          },
          {
            "speed": 1.46,
            "bearing": 254
          },
          {
            "speed": 1.14,
            "bearing": 255
          }
        ],
        "me": [
          {
            "speed": 0.54,
            "bearing": 248
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.41,
            "bearing": 76
          },
          {
            "speed": 0.82,
            "bearing": 76
          },
          {
            "speed": 0.92,
            "bearing": 77
          },
          {
            "speed": 0.82,
            "bearing": 76
          },
          {
            "speed": 0.61,
            "bearing": 81
          },
          {
            "speed": 0.3,
            "bearing": 90
          },
          {
            "speed": 0.22,
            "bearing": 243
          },
          {
            "speed": 0.63,
            "bearing": 252
          },
          {
            "speed": 0.85,
            "bearing": 249
          },
          {
            "speed": 0.85,
            "bearing": 249
          },
          {
            "speed": 0.73,
            "bearing": 254
          }
        ]
      },
      {
        "lat": 48.6995,
        "lon": -4.6021,
        "source": "IROISE_560",
        "ve": [
          {
            "speed": 2.42,
            "bearing": 246
          },
          {
            "speed": 1.71,
            "bearing": 249
          },
          {
            "speed": 0.81,
            "bearing": 240
          },
          {
            "speed": 1.17,
            "bearing": 70
          },
          {
            "speed": 2.4,
            "bearing": 73
          },
          {
            "speed": 2.6,
            "bearing": 74
          },
          {
            "speed": 2.35,
            "bearing": 78
          },
          {
            "speed": 1.6,
            "bearing": 90
          },
          {
            "speed": 0.72,
            "bearing": 56
          },
          {
            "speed": 0.78,
            "bearing": 230
          },
          {
            "speed": 1.92,
            "bearing": 242
          },
          {
            "speed": 2.69,
            "bearing": 248
          },
          {
            "speed": 2.64,
            "bearing": 241
          }
        ],
        "me": [
          {
            "speed": 1.21,
            "bearing": 246
          },
          {
            "speed": 0.76,
            "bearing": 247
          },
          {
            "speed": 0.36,
            "bearing": 236
          },
          {
            "speed": 0.63,
            "bearing": 72
          },
          {
            "speed": 1.24,
            "bearing": 76
          },
          {
            "speed": 1.26,
            "bearing": 72
          },
          {
            "speed": 1.24,
            "bearing": 76
          },
          {
            "speed": 0.8,
            "bearing": 90
          },
          {
            "speed": 0.36,
            "bearing": 56
          },
          {
            "speed": 0.42,
            "bearing": 225
          },
          {
            "speed": 0.89,
            "bearing": 243
          },
          {
            "speed": 1.3,
            "bearing": 247
          },
          {
            "speed": 1.25,
            "bearing": 241
          }
        ]
      },
      {
        "lat": 48.6758,
        "lon": -4.6201,
        "source": "IROISE_560",
        "ve": [
          {
            "speed": 2.33,
            "bearing": 245
          },
          {
            "speed": 1.66,
            "bearing": 245
          },
          {
            "speed": 0.72,
            "bearing": 236
          },
          {
            "speed": 1.08,
            "bearing": 68
          },
          {
            "speed": 2.21,
            "bearing": 72
          },
          {
            "speed": 2.44,
            "bearing": 71
          },
          {
            "speed": 2.31,
            "bearing": 72
          },
          {
            "speed": 1.51,
            "bearing": 82
          },
          {
            "speed": 0.67,
            "bearing": 63
          },
          {
            "speed": 0.64,
            "bearing": 231
          },
          {
            "speed": 1.75,
            "bearing": 239
          },
          {
            "speed": 2.51,
            "bearing": 247
          },
          {
            "speed": 2.42,
            "bearing": 240
          }
        ],
        "me": [
          {
            "speed": 1.12,
            "bearing": 243
          },
          {
            "speed": 0.76,
            "bearing": 247
          },
          {
            "speed": 0.36,
            "bearing": 236
          },
          {
            "speed": 0.54,
            "bearing": 68
          },
          {
            "speed": 1.04,
            "bearing": 73
          },
          {
            "speed": 1.26,
            "bearing": 72
          },
          {
            "speed": 1.14,
            "bearing": 75
          },
          {
            "speed": 0.81,
            "bearing": 83
          },
          {
            "speed": 0.36,
            "bearing": 56
          },
          {
            "speed": 0.28,
            "bearing": 225
          },
          {
            "speed": 0.81,
            "bearing": 240
          },
          {
            "speed": 1.21,
            "bearing": 246
          },
          {
            "speed": 1.25,
            "bearing": 241
          }
        ]
      },
      {
        "lat": 48.6612,
        "lon": -4.2433,
        "source": "BRETAGNE_NORD_563",
        "ve": [
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 90
          },
          {
            "speed": 2.01,
            "bearing": 174
          },
          {
            "speed": 0.63,
            "bearing": 162
          },
          {
            "speed": 0.32,
            "bearing": 162
          },
          {
            "speed": 0.2,
            "bearing": 180
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.32,
            "bearing": 252
          },
          {
            "speed": 0.32,
            "bearing": 288
          },
          {
            "speed": 0.42,
            "bearing": 315
          },
          {
            "speed": 0.9,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          }
        ],
        "me": [
          {
            "speed": 0.2,
            "bearing": 180
          },
          {
            "speed": 0.4,
            "bearing": 180
          },
          {
            "speed": 0.3,
            "bearing": 180
          },
          {
            "speed": 0.22,
            "bearing": 153
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.22,
            "bearing": 333
          },
          {
            "speed": 0.22,
            "bearing": 333
          },
          {
            "speed": 0.0,
            "bearing": 0
          }
        ]
      }
    ]
  },
  "2": {
    "nom": "Aber Wrac'h -> Lanildut",
    "port_reference": "Brest",
    "note": null,
    "nb_points_bruts_disponibles": 41,
    "points": [
      {
        "lat": 48.652,
        "lon": -4.9257,
        "source": "IROISE_560",
        "ve": [
          {
            "speed": 2.28,
            "bearing": 241
          },
          {
            "speed": 1.49,
            "bearing": 250
          },
          {
            "speed": 0.54,
            "bearing": 292
          },
          {
            "speed": 1.12,
            "bearing": 27
          },
          {
            "speed": 2.05,
            "bearing": 43
          },
          {
            "speed": 2.34,
            "bearing": 50
          },
          {
            "speed": 2.11,
            "bearing": 59
          },
          {
            "speed": 1.39,
            "bearing": 69
          },
          {
            "speed": 0.63,
            "bearing": 108
          },
          {
            "speed": 0.98,
            "bearing": 204
          },
          {
            "speed": 1.84,
            "bearing": 225
          },
          {
            "speed": 2.5,
            "bearing": 233
          },
          {
            "speed": 2.39,
            "bearing": 237
          }
        ],
        "me": [
          {
            "speed": 1.03,
            "bearing": 241
          },
          {
            "speed": 0.63,
            "bearing": 252
          },
          {
            "speed": 0.22,
            "bearing": 333
          },
          {
            "speed": 0.5,
            "bearing": 37
          },
          {
            "speed": 0.85,
            "bearing": 45
          },
          {
            "speed": 1.06,
            "bearing": 49
          },
          {
            "speed": 0.94,
            "bearing": 58
          },
          {
            "speed": 0.63,
            "bearing": 72
          },
          {
            "speed": 0.32,
            "bearing": 108
          },
          {
            "speed": 0.45,
            "bearing": 207
          },
          {
            "speed": 0.85,
            "bearing": 225
          },
          {
            "speed": 1.14,
            "bearing": 232
          },
          {
            "speed": 1.17,
            "bearing": 239
          }
        ]
      },
      {
        "lat": 48.652,
        "lon": -4.746,
        "source": "IROISE_560",
        "ve": [
          {
            "speed": 2.16,
            "bearing": 236
          },
          {
            "speed": 1.48,
            "bearing": 242
          },
          {
            "speed": 0.41,
            "bearing": 256
          },
          {
            "speed": 0.92,
            "bearing": 41
          },
          {
            "speed": 1.91,
            "bearing": 47
          },
          {
            "speed": 2.36,
            "bearing": 54
          },
          {
            "speed": 2.22,
            "bearing": 54
          },
          {
            "speed": 1.58,
            "bearing": 55
          },
          {
            "speed": 0.67,
            "bearing": 63
          },
          {
            "speed": 0.5,
            "bearing": 233
          },
          {
            "speed": 1.58,
            "bearing": 235
          },
          {
            "speed": 2.3,
            "bearing": 236
          },
          {
            "speed": 2.3,
            "bearing": 236
          }
        ],
        "me": [
          {
            "speed": 1.12,
            "bearing": 243
          },
          {
            "speed": 0.67,
            "bearing": 243
          },
          {
            "speed": 0.2,
            "bearing": 270
          },
          {
            "speed": 0.42,
            "bearing": 45
          },
          {
            "speed": 0.86,
            "bearing": 54
          },
          {
            "speed": 1.08,
            "bearing": 56
          },
          {
            "speed": 1.08,
            "bearing": 56
          },
          {
            "speed": 0.89,
            "bearing": 63
          },
          {
            "speed": 0.45,
            "bearing": 63
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.72,
            "bearing": 236
          },
          {
            "speed": 1.03,
            "bearing": 241
          },
          {
            "speed": 1.17,
            "bearing": 239
          }
        ]
      },
      {
        "lat": 48.652,
        "lon": -4.5662,
        "source": "IROISE_560",
        "ve": [
          {
            "speed": 1.17,
            "bearing": 250
          },
          {
            "speed": 0.54,
            "bearing": 248
          },
          {
            "speed": 0.3,
            "bearing": 90
          },
          {
            "speed": 1.39,
            "bearing": 69
          },
          {
            "speed": 1.93,
            "bearing": 69
          },
          {
            "speed": 2.02,
            "bearing": 70
          },
          {
            "speed": 1.68,
            "bearing": 73
          },
          {
            "speed": 1.04,
            "bearing": 73
          },
          {
            "speed": 0.32,
            "bearing": 72
          },
          {
            "speed": 0.76,
            "bearing": 247
          },
          {
            "speed": 1.52,
            "bearing": 247
          },
          {
            "speed": 1.71,
            "bearing": 249
          },
          {
            "speed": 1.39,
            "bearing": 249
          }
        ],
        "me": [
          {
            "speed": 0.85,
            "bearing": 249
          },
          {
            "speed": 0.45,
            "bearing": 243
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.63,
            "bearing": 72
          },
          {
            "speed": 0.95,
            "bearing": 72
          },
          {
            "speed": 1.04,
            "bearing": 73
          },
          {
            "speed": 1.04,
            "bearing": 73
          },
          {
            "speed": 0.73,
            "bearing": 74
          },
          {
            "speed": 0.32,
            "bearing": 72
          },
          {
            "speed": 0.22,
            "bearing": 243
          },
          {
            "speed": 0.73,
            "bearing": 254
          },
          {
            "speed": 1.04,
            "bearing": 253
          },
          {
            "speed": 0.95,
            "bearing": 252
          }
        ]
      },
      {
        "lat": 48.6282,
        "lon": -4.7999,
        "source": "IROISE_560",
        "ve": [
          {
            "speed": 2.08,
            "bearing": 235
          },
          {
            "speed": 1.25,
            "bearing": 241
          },
          {
            "speed": 0.32,
            "bearing": 288
          },
          {
            "speed": 1.0,
            "bearing": 37
          },
          {
            "speed": 2.19,
            "bearing": 43
          },
          {
            "speed": 2.55,
            "bearing": 45
          },
          {
            "speed": 1.98,
            "bearing": 41
          },
          {
            "speed": 1.14,
            "bearing": 52
          },
          {
            "speed": 0.22,
            "bearing": 63
          },
          {
            "speed": 0.72,
            "bearing": 236
          },
          {
            "speed": 1.8,
            "bearing": 236
          },
          {
            "speed": 2.36,
            "bearing": 234
          },
          {
            "speed": 2.16,
            "bearing": 236
          }
        ],
        "me": [
          {
            "speed": 1.08,
            "bearing": 236
          },
          {
            "speed": 0.67,
            "bearing": 243
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.5,
            "bearing": 37
          },
          {
            "speed": 0.99,
            "bearing": 45
          },
          {
            "speed": 1.2,
            "bearing": 48
          },
          {
            "speed": 0.99,
            "bearing": 45
          },
          {
            "speed": 0.64,
            "bearing": 51
          },
          {
            "speed": 0.22,
            "bearing": 63
          },
          {
            "speed": 0.36,
            "bearing": 236
          },
          {
            "speed": 0.81,
            "bearing": 240
          },
          {
            "speed": 1.08,
            "bearing": 236
          },
          {
            "speed": 1.08,
            "bearing": 236
          }
        ]
      },
      {
        "lat": 48.6282,
        "lon": -4.6201,
        "source": "IROISE_560",
        "ve": [
          {
            "speed": 1.12,
            "bearing": 243
          },
          {
            "speed": 0.32,
            "bearing": 252
          },
          {
            "speed": 0.72,
            "bearing": 56
          },
          {
            "speed": 1.58,
            "bearing": 55
          },
          {
            "speed": 2.0,
            "bearing": 53
          },
          {
            "speed": 1.89,
            "bearing": 58
          },
          {
            "speed": 1.39,
            "bearing": 60
          },
          {
            "speed": 0.63,
            "bearing": 72
          },
          {
            "speed": 0.36,
            "bearing": 214
          },
          {
            "speed": 1.36,
            "bearing": 234
          },
          {
            "speed": 1.75,
            "bearing": 239
          },
          {
            "speed": 1.79,
            "bearing": 243
          },
          {
            "speed": 1.34,
            "bearing": 243
          }
        ],
        "me": [
          {
            "speed": 0.67,
            "bearing": 243
          },
          {
            "speed": 0.22,
            "bearing": 243
          },
          {
            "speed": 0.28,
            "bearing": 45
          },
          {
            "speed": 0.86,
            "bearing": 54
          },
          {
            "speed": 1.08,
            "bearing": 56
          },
          {
            "speed": 1.03,
            "bearing": 61
          },
          {
            "speed": 0.81,
            "bearing": 60
          },
          {
            "speed": 0.45,
            "bearing": 63
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.58,
            "bearing": 239
          },
          {
            "speed": 0.89,
            "bearing": 243
          },
          {
            "speed": 1.03,
            "bearing": 241
          },
          {
            "speed": 0.89,
            "bearing": 243
          }
        ]
      },
      {
        "lat": 48.6045,
        "lon": -4.7819,
        "source": "IROISE_560",
        "ve": [
          {
            "speed": 2.06,
            "bearing": 241
          },
          {
            "speed": 0.81,
            "bearing": 263
          },
          {
            "speed": 0.67,
            "bearing": 27
          },
          {
            "speed": 2.62,
            "bearing": 40
          },
          {
            "speed": 3.18,
            "bearing": 44
          },
          {
            "speed": 2.97,
            "bearing": 42
          },
          {
            "speed": 2.27,
            "bearing": 41
          },
          {
            "speed": 1.2,
            "bearing": 42
          },
          {
            "speed": 0.28,
            "bearing": 45
          },
          {
            "speed": 1.42,
            "bearing": 231
          },
          {
            "speed": 2.56,
            "bearing": 239
          },
          {
            "speed": 2.92,
            "bearing": 239
          },
          {
            "speed": 2.51,
            "bearing": 241
          }
        ],
        "me": [
          {
            "speed": 1.03,
            "bearing": 241
          },
          {
            "speed": 0.41,
            "bearing": 256
          },
          {
            "speed": 0.36,
            "bearing": 34
          },
          {
            "speed": 1.2,
            "bearing": 42
          },
          {
            "speed": 1.49,
            "bearing": 48
          },
          {
            "speed": 1.49,
            "bearing": 48
          },
          {
            "speed": 1.13,
            "bearing": 45
          },
          {
            "speed": 0.64,
            "bearing": 51
          },
          {
            "speed": 0.22,
            "bearing": 63
          },
          {
            "speed": 0.64,
            "bearing": 231
          },
          {
            "speed": 1.17,
            "bearing": 239
          },
          {
            "speed": 1.39,
            "bearing": 240
          },
          {
            "speed": 1.25,
            "bearing": 241
          }
        ]
      },
      {
        "lat": 48.5807,
        "lon": -4.9078,
        "source": "IROISE_560",
        "ve": [
          {
            "speed": 1.63,
            "bearing": 227
          },
          {
            "speed": 0.78,
            "bearing": 230
          },
          {
            "speed": 0.42,
            "bearing": 45
          },
          {
            "speed": 1.35,
            "bearing": 42
          },
          {
            "speed": 2.13,
            "bearing": 41
          },
          {
            "speed": 1.98,
            "bearing": 45
          },
          {
            "speed": 1.24,
            "bearing": 76
          },
          {
            "speed": 0.73,
            "bearing": 106
          },
          {
            "speed": 0.5,
            "bearing": 180
          },
          {
            "speed": 1.0,
            "bearing": 217
          },
          {
            "speed": 1.56,
            "bearing": 230
          },
          {
            "speed": 1.84,
            "bearing": 229
          },
          {
            "speed": 1.7,
            "bearing": 230
          }
        ],
        "me": [
          {
            "speed": 0.78,
            "bearing": 230
          },
          {
            "speed": 0.36,
            "bearing": 236
          },
          {
            "speed": 0.22,
            "bearing": 27
          },
          {
            "speed": 0.64,
            "bearing": 39
          },
          {
            "speed": 0.99,
            "bearing": 45
          },
          {
            "speed": 0.99,
            "bearing": 45
          },
          {
            "speed": 0.63,
            "bearing": 72
          },
          {
            "speed": 0.41,
            "bearing": 104
          },
          {
            "speed": 0.22,
            "bearing": 153
          },
          {
            "speed": 0.5,
            "bearing": 217
          },
          {
            "speed": 0.78,
            "bearing": 230
          },
          {
            "speed": 1.0,
            "bearing": 233
          },
          {
            "speed": 0.86,
            "bearing": 234
          }
        ]
      },
      {
        "lat": 48.5807,
        "lon": -4.728,
        "source": "IROISE_560",
        "ve": [
          {
            "speed": 0.9,
            "bearing": 270
          },
          {
            "speed": 0.51,
            "bearing": 11
          },
          {
            "speed": 1.27,
            "bearing": 45
          },
          {
            "speed": 1.98,
            "bearing": 45
          },
          {
            "speed": 2.19,
            "bearing": 43
          },
          {
            "speed": 2.05,
            "bearing": 43
          },
          {
            "speed": 1.35,
            "bearing": 42
          },
          {
            "speed": 0.45,
            "bearing": 27
          },
          {
            "speed": 0.67,
            "bearing": 243
          },
          {
            "speed": 1.66,
            "bearing": 237
          },
          {
            "speed": 2.06,
            "bearing": 247
          },
          {
            "speed": 1.87,
            "bearing": 254
          },
          {
            "speed": 1.22,
            "bearing": 261
          }
        ],
        "me": [
          {
            "speed": 0.6,
            "bearing": 270
          },
          {
            "speed": 0.3,
            "bearing": 0
          },
          {
            "speed": 0.86,
            "bearing": 54
          },
          {
            "speed": 1.2,
            "bearing": 48
          },
          {
            "speed": 1.28,
            "bearing": 51
          },
          {
            "speed": 1.06,
            "bearing": 49
          },
          {
            "speed": 0.78,
            "bearing": 50
          },
          {
            "speed": 0.28,
            "bearing": 45
          },
          {
            "speed": 0.32,
            "bearing": 252
          },
          {
            "speed": 0.94,
            "bearing": 238
          },
          {
            "speed": 1.3,
            "bearing": 247
          },
          {
            "speed": 1.17,
            "bearing": 250
          },
          {
            "speed": 0.92,
            "bearing": 257
          }
        ]
      }
    ]
  },
  "3": {
    "nom": "Lanildut -> Camaret-sur-Mer",
    "port_reference": "Brest",
    "note": null,
    "nb_points_bruts_disponibles": 290,
    "points": [
      {
        "lat": 48.5424,
        "lon": -4.9346,
        "source": "OUESSANT_560",
        "ve": [
          {
            "speed": 1.5,
            "bearing": 233
          },
          {
            "speed": 0.67,
            "bearing": 243
          },
          {
            "speed": 0.58,
            "bearing": 31
          },
          {
            "speed": 1.5,
            "bearing": 37
          },
          {
            "speed": 1.98,
            "bearing": 41
          },
          {
            "speed": 1.77,
            "bearing": 47
          },
          {
            "speed": 1.22,
            "bearing": 81
          },
          {
            "speed": 0.86,
            "bearing": 126
          },
          {
            "speed": 0.81,
            "bearing": 187
          },
          {
            "speed": 1.28,
            "bearing": 219
          },
          {
            "speed": 1.7,
            "bearing": 230
          },
          {
            "speed": 2.0,
            "bearing": 233
          },
          {
            "speed": 1.72,
            "bearing": 234
          }
        ],
        "me": [
          {
            "speed": 0.72,
            "bearing": 236
          },
          {
            "speed": 0.3,
            "bearing": 270
          },
          {
            "speed": 0.32,
            "bearing": 18
          },
          {
            "speed": 0.72,
            "bearing": 34
          },
          {
            "speed": 0.99,
            "bearing": 45
          },
          {
            "speed": 0.92,
            "bearing": 49
          },
          {
            "speed": 0.73,
            "bearing": 74
          },
          {
            "speed": 0.41,
            "bearing": 104
          },
          {
            "speed": 0.3,
            "bearing": 180
          },
          {
            "speed": 0.64,
            "bearing": 219
          },
          {
            "speed": 0.92,
            "bearing": 229
          },
          {
            "speed": 1.08,
            "bearing": 236
          },
          {
            "speed": 0.94,
            "bearing": 238
          }
        ]
      },
      {
        "lat": 48.518,
        "lon": -4.7908,
        "source": "OUESSANT_560",
        "ve": [
          {
            "speed": 0.4,
            "bearing": 0
          },
          {
            "speed": 0.81,
            "bearing": 7
          },
          {
            "speed": 1.12,
            "bearing": 10
          },
          {
            "speed": 1.33,
            "bearing": 13
          },
          {
            "speed": 1.53,
            "bearing": 11
          },
          {
            "speed": 1.43,
            "bearing": 12
          },
          {
            "speed": 1.02,
            "bearing": 11
          },
          {
            "speed": 0.32,
            "bearing": 18
          },
          {
            "speed": 0.51,
            "bearing": 191
          },
          {
            "speed": 0.92,
            "bearing": 193
          },
          {
            "speed": 0.85,
            "bearing": 201
          },
          {
            "speed": 0.36,
            "bearing": 214
          },
          {
            "speed": 0.22,
            "bearing": 333
          }
        ],
        "me": [
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.51,
            "bearing": 11
          },
          {
            "speed": 0.71,
            "bearing": 8
          },
          {
            "speed": 0.73,
            "bearing": 16
          },
          {
            "speed": 0.73,
            "bearing": 16
          },
          {
            "speed": 0.63,
            "bearing": 18
          },
          {
            "speed": 0.41,
            "bearing": 14
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.32,
            "bearing": 198
          },
          {
            "speed": 0.63,
            "bearing": 198
          },
          {
            "speed": 0.63,
            "bearing": 198
          },
          {
            "speed": 0.45,
            "bearing": 207
          },
          {
            "speed": 0.14,
            "bearing": 225
          }
        ]
      },
      {
        "lat": 48.4823,
        "lon": -4.7818,
        "source": "OUESSANT_560",
        "ve": [
          {
            "speed": 0.3,
            "bearing": 0
          },
          {
            "speed": 0.41,
            "bearing": 14
          },
          {
            "speed": 0.51,
            "bearing": 11
          },
          {
            "speed": 0.51,
            "bearing": 11
          },
          {
            "speed": 0.7,
            "bearing": 0
          },
          {
            "speed": 0.6,
            "bearing": 0
          },
          {
            "speed": 0.22,
            "bearing": 27
          },
          {
            "speed": 0.32,
            "bearing": 162
          },
          {
            "speed": 0.5,
            "bearing": 180
          },
          {
            "speed": 0.3,
            "bearing": 180
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.32,
            "bearing": 342
          }
        ],
        "me": [
          {
            "speed": 0.2,
            "bearing": 0
          },
          {
            "speed": 0.3,
            "bearing": 0
          },
          {
            "speed": 0.3,
            "bearing": 0
          },
          {
            "speed": 0.3,
            "bearing": 0
          },
          {
            "speed": 0.3,
            "bearing": 0
          },
          {
            "speed": 0.2,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.3,
            "bearing": 180
          },
          {
            "speed": 0.3,
            "bearing": 180
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.22,
            "bearing": 333
          }
        ]
      },
      {
        "lat": 48.4465,
        "lon": -4.7908,
        "source": "OUESSANT_560",
        "ve": [
          {
            "speed": 0.3,
            "bearing": 0
          },
          {
            "speed": 0.45,
            "bearing": 27
          },
          {
            "speed": 0.54,
            "bearing": 22
          },
          {
            "speed": 0.54,
            "bearing": 22
          },
          {
            "speed": 0.54,
            "bearing": 22
          },
          {
            "speed": 0.14,
            "bearing": 45
          },
          {
            "speed": 0.5,
            "bearing": 180
          },
          {
            "speed": 1.12,
            "bearing": 190
          },
          {
            "speed": 1.24,
            "bearing": 194
          },
          {
            "speed": 0.95,
            "bearing": 198
          },
          {
            "speed": 0.54,
            "bearing": 202
          },
          {
            "speed": 0.22,
            "bearing": 207
          },
          {
            "speed": 0.1,
            "bearing": 0
          }
        ],
        "me": [
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.41,
            "bearing": 14
          },
          {
            "speed": 0.45,
            "bearing": 27
          },
          {
            "speed": 0.45,
            "bearing": 27
          },
          {
            "speed": 0.32,
            "bearing": 18
          },
          {
            "speed": 0.22,
            "bearing": 27
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.41,
            "bearing": 194
          },
          {
            "speed": 0.63,
            "bearing": 198
          },
          {
            "speed": 0.54,
            "bearing": 202
          },
          {
            "speed": 0.45,
            "bearing": 207
          },
          {
            "speed": 0.32,
            "bearing": 198
          },
          {
            "speed": 0.14,
            "bearing": 225
          }
        ]
      },
      {
        "lat": 48.3988,
        "lon": -4.8986,
        "source": "OUESSANT_560",
        "ve": [
          {
            "speed": 0.22,
            "bearing": 297
          },
          {
            "speed": 0.22,
            "bearing": 63
          },
          {
            "speed": 0.41,
            "bearing": 76
          },
          {
            "speed": 0.32,
            "bearing": 72
          },
          {
            "speed": 0.22,
            "bearing": 63
          },
          {
            "speed": 0.14,
            "bearing": 135
          },
          {
            "speed": 0.41,
            "bearing": 194
          },
          {
            "speed": 0.78,
            "bearing": 220
          },
          {
            "speed": 0.85,
            "bearing": 225
          },
          {
            "speed": 0.72,
            "bearing": 236
          },
          {
            "speed": 0.54,
            "bearing": 248
          },
          {
            "speed": 0.4,
            "bearing": 270
          },
          {
            "speed": 0.22,
            "bearing": 297
          }
        ],
        "me": [
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.14,
            "bearing": 45
          },
          {
            "speed": 0.32,
            "bearing": 72
          },
          {
            "speed": 0.41,
            "bearing": 76
          },
          {
            "speed": 0.3,
            "bearing": 90
          },
          {
            "speed": 0.22,
            "bearing": 117
          },
          {
            "speed": 0.2,
            "bearing": 180
          },
          {
            "speed": 0.36,
            "bearing": 214
          },
          {
            "speed": 0.42,
            "bearing": 225
          },
          {
            "speed": 0.45,
            "bearing": 243
          },
          {
            "speed": 0.41,
            "bearing": 256
          },
          {
            "speed": 0.3,
            "bearing": 270
          },
          {
            "speed": 0.22,
            "bearing": 297
          }
        ]
      },
      {
        "lat": 48.363,
        "lon": -4.8716,
        "source": "OUESSANT_560",
        "ve": [
          {
            "speed": 1.03,
            "bearing": 29
          },
          {
            "speed": 2.06,
            "bearing": 29
          },
          {
            "speed": 2.56,
            "bearing": 31
          },
          {
            "speed": 2.61,
            "bearing": 32
          },
          {
            "speed": 2.16,
            "bearing": 34
          },
          {
            "speed": 1.06,
            "bearing": 41
          },
          {
            "speed": 0.71,
            "bearing": 188
          },
          {
            "speed": 2.47,
            "bearing": 201
          },
          {
            "speed": 3.14,
            "bearing": 202
          },
          {
            "speed": 3.36,
            "bearing": 203
          },
          {
            "speed": 2.79,
            "bearing": 201
          },
          {
            "speed": 1.71,
            "bearing": 201
          },
          {
            "speed": 0.22,
            "bearing": 27
          }
        ],
        "me": [
          {
            "speed": 0.58,
            "bearing": 31
          },
          {
            "speed": 1.5,
            "bearing": 37
          },
          {
            "speed": 1.7,
            "bearing": 40
          },
          {
            "speed": 1.7,
            "bearing": 40
          },
          {
            "speed": 1.35,
            "bearing": 42
          },
          {
            "speed": 0.78,
            "bearing": 50
          },
          {
            "speed": 0.22,
            "bearing": 153
          },
          {
            "speed": 1.17,
            "bearing": 211
          },
          {
            "speed": 1.84,
            "bearing": 209
          },
          {
            "speed": 1.97,
            "bearing": 210
          },
          {
            "speed": 1.7,
            "bearing": 208
          },
          {
            "speed": 1.03,
            "bearing": 209
          },
          {
            "speed": 0.14,
            "bearing": 225
          }
        ]
      },
      {
        "lat": 48.3271,
        "lon": -4.8807,
        "source": "OUESSANT_560",
        "ve": [
          {
            "speed": 0.61,
            "bearing": 9
          },
          {
            "speed": 0.86,
            "bearing": 36
          },
          {
            "speed": 1.14,
            "bearing": 38
          },
          {
            "speed": 1.22,
            "bearing": 35
          },
          {
            "speed": 1.08,
            "bearing": 34
          },
          {
            "speed": 0.64,
            "bearing": 51
          },
          {
            "speed": 0.63,
            "bearing": 162
          },
          {
            "speed": 1.24,
            "bearing": 194
          },
          {
            "speed": 1.22,
            "bearing": 215
          },
          {
            "speed": 1.08,
            "bearing": 214
          },
          {
            "speed": 0.78,
            "bearing": 220
          },
          {
            "speed": 0.32,
            "bearing": 252
          },
          {
            "speed": 0.5,
            "bearing": 0
          }
        ],
        "me": [
          {
            "speed": 0.51,
            "bearing": 11
          },
          {
            "speed": 0.72,
            "bearing": 34
          },
          {
            "speed": 0.78,
            "bearing": 40
          },
          {
            "speed": 0.78,
            "bearing": 40
          },
          {
            "speed": 0.57,
            "bearing": 45
          },
          {
            "speed": 0.32,
            "bearing": 72
          },
          {
            "speed": 0.36,
            "bearing": 146
          },
          {
            "speed": 0.71,
            "bearing": 188
          },
          {
            "speed": 0.76,
            "bearing": 203
          },
          {
            "speed": 0.64,
            "bearing": 219
          },
          {
            "speed": 0.45,
            "bearing": 243
          },
          {
            "speed": 0.3,
            "bearing": 270
          },
          {
            "speed": 0.32,
            "bearing": 342
          }
        ]
      },
      {
        "lat": 48.3032,
        "lon": -4.9166,
        "source": "OUESSANT_560",
        "ve": [
          {
            "speed": 0.36,
            "bearing": 326
          },
          {
            "speed": 0.4,
            "bearing": 0
          },
          {
            "speed": 0.45,
            "bearing": 27
          },
          {
            "speed": 0.5,
            "bearing": 37
          },
          {
            "speed": 0.45,
            "bearing": 27
          },
          {
            "speed": 0.22,
            "bearing": 27
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.41,
            "bearing": 194
          },
          {
            "speed": 0.5,
            "bearing": 233
          },
          {
            "speed": 0.51,
            "bearing": 259
          },
          {
            "speed": 0.5,
            "bearing": 270
          },
          {
            "speed": 0.45,
            "bearing": 297
          },
          {
            "speed": 0.42,
            "bearing": 315
          }
        ],
        "me": [
          {
            "speed": 0.22,
            "bearing": 333
          },
          {
            "speed": 0.2,
            "bearing": 0
          },
          {
            "speed": 0.22,
            "bearing": 27
          },
          {
            "speed": 0.2,
            "bearing": 0
          },
          {
            "speed": 0.2,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.22,
            "bearing": 207
          },
          {
            "speed": 0.22,
            "bearing": 207
          },
          {
            "speed": 0.28,
            "bearing": 225
          },
          {
            "speed": 0.22,
            "bearing": 243
          },
          {
            "speed": 0.22,
            "bearing": 297
          },
          {
            "speed": 0.22,
            "bearing": 297
          }
        ]
      },
      {
        "lat": 48.2923,
        "lon": -4.7638,
        "source": "OUESSANT_560",
        "ve": [
          {
            "speed": 0.22,
            "bearing": 333
          },
          {
            "speed": 0.54,
            "bearing": 22
          },
          {
            "speed": 0.86,
            "bearing": 36
          },
          {
            "speed": 0.94,
            "bearing": 32
          },
          {
            "speed": 0.81,
            "bearing": 30
          },
          {
            "speed": 0.5,
            "bearing": 37
          },
          {
            "speed": 0.2,
            "bearing": 90
          },
          {
            "speed": 0.3,
            "bearing": 180
          },
          {
            "speed": 0.67,
            "bearing": 207
          },
          {
            "speed": 0.67,
            "bearing": 207
          },
          {
            "speed": 0.57,
            "bearing": 225
          },
          {
            "speed": 0.36,
            "bearing": 236
          },
          {
            "speed": 0.14,
            "bearing": 315
          }
        ],
        "me": [
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.32,
            "bearing": 18
          },
          {
            "speed": 0.36,
            "bearing": 34
          },
          {
            "speed": 0.36,
            "bearing": 34
          },
          {
            "speed": 0.36,
            "bearing": 34
          },
          {
            "speed": 0.22,
            "bearing": 27
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.32,
            "bearing": 198
          },
          {
            "speed": 0.32,
            "bearing": 198
          },
          {
            "speed": 0.32,
            "bearing": 198
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.0,
            "bearing": 0
          }
        ]
      },
      {
        "lat": 48.2698,
        "lon": -4.6919,
        "source": "OUESSANT_560",
        "ve": [
          {
            "speed": 0.2,
            "bearing": 270
          },
          {
            "speed": 0.54,
            "bearing": 22
          },
          {
            "speed": 0.94,
            "bearing": 32
          },
          {
            "speed": 1.03,
            "bearing": 29
          },
          {
            "speed": 0.94,
            "bearing": 32
          },
          {
            "speed": 0.67,
            "bearing": 27
          },
          {
            "speed": 0.22,
            "bearing": 27
          },
          {
            "speed": 0.41,
            "bearing": 194
          },
          {
            "speed": 0.98,
            "bearing": 204
          },
          {
            "speed": 1.03,
            "bearing": 209
          },
          {
            "speed": 0.94,
            "bearing": 212
          },
          {
            "speed": 0.64,
            "bearing": 219
          },
          {
            "speed": 0.28,
            "bearing": 225
          }
        ],
        "me": [
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.32,
            "bearing": 18
          },
          {
            "speed": 0.45,
            "bearing": 27
          },
          {
            "speed": 0.45,
            "bearing": 27
          },
          {
            "speed": 0.36,
            "bearing": 34
          },
          {
            "speed": 0.22,
            "bearing": 27
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.22,
            "bearing": 207
          },
          {
            "speed": 0.45,
            "bearing": 207
          },
          {
            "speed": 0.45,
            "bearing": 207
          },
          {
            "speed": 0.36,
            "bearing": 214
          },
          {
            "speed": 0.28,
            "bearing": 225
          },
          {
            "speed": 0.14,
            "bearing": 225
          }
        ]
      }
    ]
  },
  "4": {
    "nom": "Camaret-sur-Mer -> Douarnenez",
    "port_reference": "Brest",
    "note": null,
    "nb_points_bruts_disponibles": 464,
    "points": [
      {
        "lat": 48.3493,
        "lon": -4.5666,
        "source": "RADE_BREST_560",
        "ve": [
          {
            "speed": 0.36,
            "bearing": 236
          },
          {
            "speed": 1.64,
            "bearing": 52
          },
          {
            "speed": 2.66,
            "bearing": 56
          },
          {
            "speed": 2.83,
            "bearing": 58
          },
          {
            "speed": 2.47,
            "bearing": 58
          },
          {
            "speed": 1.53,
            "bearing": 58
          },
          {
            "speed": 0.42,
            "bearing": 225
          },
          {
            "speed": 2.13,
            "bearing": 229
          },
          {
            "speed": 2.69,
            "bearing": 228
          },
          {
            "speed": 2.69,
            "bearing": 228
          },
          {
            "speed": 2.48,
            "bearing": 227
          },
          {
            "speed": 1.91,
            "bearing": 227
          },
          {
            "speed": 1.06,
            "bearing": 229
          }
        ],
        "me": [
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.86,
            "bearing": 54
          },
          {
            "speed": 1.39,
            "bearing": 60
          },
          {
            "speed": 1.39,
            "bearing": 60
          },
          {
            "speed": 1.03,
            "bearing": 61
          },
          {
            "speed": 0.58,
            "bearing": 59
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.72,
            "bearing": 236
          },
          {
            "speed": 1.14,
            "bearing": 232
          },
          {
            "speed": 1.22,
            "bearing": 235
          },
          {
            "speed": 1.22,
            "bearing": 235
          },
          {
            "speed": 1.0,
            "bearing": 233
          },
          {
            "speed": 0.58,
            "bearing": 239
          }
        ]
      },
      {
        "lat": 48.3385,
        "lon": -4.3563,
        "source": "RADE_BREST_560",
        "ve": [
          {
            "speed": 0.22,
            "bearing": 207
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.45,
            "bearing": 27
          },
          {
            "speed": 0.45,
            "bearing": 27
          },
          {
            "speed": 0.32,
            "bearing": 18
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.22,
            "bearing": 207
          },
          {
            "speed": 0.22,
            "bearing": 207
          },
          {
            "speed": 0.22,
            "bearing": 207
          },
          {
            "speed": 0.28,
            "bearing": 225
          },
          {
            "speed": 0.28,
            "bearing": 225
          }
        ],
        "me": [
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.14,
            "bearing": 45
          },
          {
            "speed": 0.14,
            "bearing": 45
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.1,
            "bearing": 180
          }
        ]
      },
      {
        "lat": 48.3278,
        "lon": -4.3401,
        "source": "RADE_BREST_560",
        "ve": [
          {
            "speed": 0.63,
            "bearing": 198
          },
          {
            "speed": 0.2,
            "bearing": 0
          },
          {
            "speed": 1.04,
            "bearing": 17
          },
          {
            "speed": 1.12,
            "bearing": 27
          },
          {
            "speed": 0.81,
            "bearing": 30
          },
          {
            "speed": 0.45,
            "bearing": 27
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.28,
            "bearing": 225
          },
          {
            "speed": 0.5,
            "bearing": 217
          },
          {
            "speed": 0.64,
            "bearing": 219
          },
          {
            "speed": 0.72,
            "bearing": 214
          },
          {
            "speed": 0.67,
            "bearing": 207
          },
          {
            "speed": 0.73,
            "bearing": 196
          }
        ],
        "me": [
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.28,
            "bearing": 45
          },
          {
            "speed": 0.5,
            "bearing": 37
          },
          {
            "speed": 0.5,
            "bearing": 37
          },
          {
            "speed": 0.36,
            "bearing": 34
          },
          {
            "speed": 0.22,
            "bearing": 27
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.28,
            "bearing": 225
          },
          {
            "speed": 0.28,
            "bearing": 225
          },
          {
            "speed": 0.36,
            "bearing": 214
          },
          {
            "speed": 0.36,
            "bearing": 214
          },
          {
            "speed": 0.28,
            "bearing": 225
          }
        ]
      },
      {
        "lat": 48.317,
        "lon": -4.4534,
        "source": "RADE_BREST_560",
        "ve": [
          {
            "speed": 0.4,
            "bearing": 270
          },
          {
            "speed": 0.6,
            "bearing": 90
          },
          {
            "speed": 1.3,
            "bearing": 86
          },
          {
            "speed": 1.1,
            "bearing": 95
          },
          {
            "speed": 0.63,
            "bearing": 108
          },
          {
            "speed": 0.32,
            "bearing": 162
          },
          {
            "speed": 0.63,
            "bearing": 252
          },
          {
            "speed": 1.1,
            "bearing": 275
          },
          {
            "speed": 1.02,
            "bearing": 281
          },
          {
            "speed": 1.0,
            "bearing": 276
          },
          {
            "speed": 1.0,
            "bearing": 276
          },
          {
            "speed": 0.91,
            "bearing": 276
          },
          {
            "speed": 0.6,
            "bearing": 270
          }
        ],
        "me": [
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.4,
            "bearing": 90
          },
          {
            "speed": 0.7,
            "bearing": 90
          },
          {
            "speed": 0.6,
            "bearing": 90
          },
          {
            "speed": 0.4,
            "bearing": 90
          },
          {
            "speed": 0.2,
            "bearing": 90
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.4,
            "bearing": 270
          },
          {
            "speed": 0.6,
            "bearing": 270
          },
          {
            "speed": 0.6,
            "bearing": 270
          },
          {
            "speed": 0.6,
            "bearing": 270
          },
          {
            "speed": 0.5,
            "bearing": 270
          },
          {
            "speed": 0.4,
            "bearing": 270
          }
        ]
      },
      {
        "lat": 48.3062,
        "lon": -4.6071,
        "source": "RADE_BREST_560",
        "ve": [
          {
            "speed": 0.14,
            "bearing": 45
          },
          {
            "speed": 0.71,
            "bearing": 45
          },
          {
            "speed": 1.06,
            "bearing": 49
          },
          {
            "speed": 1.2,
            "bearing": 48
          },
          {
            "speed": 1.13,
            "bearing": 45
          },
          {
            "speed": 0.92,
            "bearing": 49
          },
          {
            "speed": 0.42,
            "bearing": 45
          },
          {
            "speed": 0.45,
            "bearing": 207
          },
          {
            "speed": 1.08,
            "bearing": 214
          },
          {
            "speed": 1.12,
            "bearing": 207
          },
          {
            "speed": 0.81,
            "bearing": 210
          },
          {
            "speed": 0.45,
            "bearing": 207
          },
          {
            "speed": 0.1,
            "bearing": 180
          }
        ],
        "me": [
          {
            "speed": 0.1,
            "bearing": 90
          },
          {
            "speed": 0.36,
            "bearing": 56
          },
          {
            "speed": 0.5,
            "bearing": 53
          },
          {
            "speed": 0.58,
            "bearing": 59
          },
          {
            "speed": 0.5,
            "bearing": 53
          },
          {
            "speed": 0.28,
            "bearing": 45
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.28,
            "bearing": 225
          },
          {
            "speed": 0.5,
            "bearing": 217
          },
          {
            "speed": 0.5,
            "bearing": 217
          },
          {
            "speed": 0.36,
            "bearing": 214
          },
          {
            "speed": 0.32,
            "bearing": 198
          },
          {
            "speed": 0.1,
            "bearing": 180
          }
        ]
      },
      {
        "lat": 48.3009,
        "lon": -4.4331,
        "source": "RADE_BREST_560",
        "ve": [
          {
            "speed": 0.32,
            "bearing": 288
          },
          {
            "speed": 0.61,
            "bearing": 99
          },
          {
            "speed": 1.3,
            "bearing": 94
          },
          {
            "speed": 1.5,
            "bearing": 94
          },
          {
            "speed": 1.5,
            "bearing": 90
          },
          {
            "speed": 1.2,
            "bearing": 85
          },
          {
            "speed": 0.41,
            "bearing": 76
          },
          {
            "speed": 0.61,
            "bearing": 279
          },
          {
            "speed": 1.0,
            "bearing": 276
          },
          {
            "speed": 0.92,
            "bearing": 283
          },
          {
            "speed": 0.92,
            "bearing": 283
          },
          {
            "speed": 0.82,
            "bearing": 284
          },
          {
            "speed": 0.61,
            "bearing": 279
          }
        ],
        "me": [
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.4,
            "bearing": 90
          },
          {
            "speed": 0.71,
            "bearing": 98
          },
          {
            "speed": 0.71,
            "bearing": 98
          },
          {
            "speed": 0.6,
            "bearing": 90
          },
          {
            "speed": 0.4,
            "bearing": 90
          },
          {
            "speed": 0.1,
            "bearing": 90
          },
          {
            "speed": 0.3,
            "bearing": 270
          },
          {
            "speed": 0.51,
            "bearing": 281
          },
          {
            "speed": 0.51,
            "bearing": 281
          },
          {
            "speed": 0.51,
            "bearing": 281
          },
          {
            "speed": 0.41,
            "bearing": 284
          },
          {
            "speed": 0.32,
            "bearing": 288
          }
        ]
      },
      {
        "lat": 48.2955,
        "lon": -4.2592,
        "source": "RADE_BREST_560",
        "ve": [
          {
            "speed": 0.2,
            "bearing": 0
          },
          {
            "speed": 0.22,
            "bearing": 153
          },
          {
            "speed": 0.63,
            "bearing": 162
          },
          {
            "speed": 0.63,
            "bearing": 162
          },
          {
            "speed": 0.51,
            "bearing": 169
          },
          {
            "speed": 0.32,
            "bearing": 162
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.32,
            "bearing": 342
          },
          {
            "speed": 0.41,
            "bearing": 346
          },
          {
            "speed": 0.41,
            "bearing": 346
          },
          {
            "speed": 0.41,
            "bearing": 346
          },
          {
            "speed": 0.41,
            "bearing": 346
          },
          {
            "speed": 0.3,
            "bearing": 0
          }
        ],
        "me": [
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.22,
            "bearing": 153
          },
          {
            "speed": 0.32,
            "bearing": 162
          },
          {
            "speed": 0.32,
            "bearing": 162
          },
          {
            "speed": 0.22,
            "bearing": 153
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.22,
            "bearing": 333
          },
          {
            "speed": 0.22,
            "bearing": 333
          },
          {
            "speed": 0.22,
            "bearing": 333
          },
          {
            "speed": 0.22,
            "bearing": 333
          },
          {
            "speed": 0.1,
            "bearing": 0
          }
        ]
      },
      {
        "lat": 48.2739,
        "lon": -4.6394,
        "source": "RADE_BREST_560",
        "ve": [
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 1.1,
            "bearing": 0
          },
          {
            "speed": 1.6,
            "bearing": 4
          },
          {
            "speed": 1.6,
            "bearing": 4
          },
          {
            "speed": 1.5,
            "bearing": 4
          },
          {
            "speed": 1.2,
            "bearing": 5
          },
          {
            "speed": 0.4,
            "bearing": 0
          },
          {
            "speed": 0.81,
            "bearing": 187
          },
          {
            "speed": 1.71,
            "bearing": 187
          },
          {
            "speed": 1.53,
            "bearing": 191
          },
          {
            "speed": 1.24,
            "bearing": 194
          },
          {
            "speed": 0.92,
            "bearing": 193
          },
          {
            "speed": 0.22,
            "bearing": 207
          }
        ],
        "me": [
          {
            "speed": 0.2,
            "bearing": 0
          },
          {
            "speed": 0.6,
            "bearing": 0
          },
          {
            "speed": 0.81,
            "bearing": 7
          },
          {
            "speed": 0.71,
            "bearing": 8
          },
          {
            "speed": 0.61,
            "bearing": 9
          },
          {
            "speed": 0.3,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.51,
            "bearing": 191
          },
          {
            "speed": 0.71,
            "bearing": 188
          },
          {
            "speed": 0.71,
            "bearing": 188
          },
          {
            "speed": 0.51,
            "bearing": 191
          },
          {
            "speed": 0.32,
            "bearing": 198
          },
          {
            "speed": 0.14,
            "bearing": 225
          }
        ]
      }
    ]
  },
  "5": {
    "nom": "Douarnenez (parcours construit)",
    "port_reference": "Brest",
    "note": null,
    "nb_points_bruts_disponibles": 6,
    "points": [
      {
        "lat": 48.1087,
        "lon": -4.3054,
        "source": "IROISE_560",
        "ve": [
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.14,
            "bearing": 135
          },
          {
            "speed": 0.22,
            "bearing": 153
          },
          {
            "speed": 0.22,
            "bearing": 153
          },
          {
            "speed": 0.14,
            "bearing": 135
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.22,
            "bearing": 333
          },
          {
            "speed": 0.22,
            "bearing": 333
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.0,
            "bearing": 0
          }
        ],
        "me": [
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.14,
            "bearing": 135
          },
          {
            "speed": 0.14,
            "bearing": 135
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          }
        ]
      },
      {
        "lat": 48.1027,
        "lon": -4.4403,
        "source": "IROISE_560",
        "ve": [
          {
            "speed": 0.2,
            "bearing": 90
          },
          {
            "speed": 0.3,
            "bearing": 90
          },
          {
            "speed": 0.4,
            "bearing": 90
          },
          {
            "speed": 0.4,
            "bearing": 90
          },
          {
            "speed": 0.2,
            "bearing": 90
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.3,
            "bearing": 270
          },
          {
            "speed": 0.32,
            "bearing": 252
          },
          {
            "speed": 0.32,
            "bearing": 252
          },
          {
            "speed": 0.2,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 90
          }
        ],
        "me": [
          {
            "speed": 0.1,
            "bearing": 90
          },
          {
            "speed": 0.2,
            "bearing": 90
          },
          {
            "speed": 0.2,
            "bearing": 90
          },
          {
            "speed": 0.2,
            "bearing": 90
          },
          {
            "speed": 0.1,
            "bearing": 90
          },
          {
            "speed": 0.1,
            "bearing": 90
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.2,
            "bearing": 270
          },
          {
            "speed": 0.2,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.0,
            "bearing": 0
          }
        ]
      },
      {
        "lat": 48.1267,
        "lon": -4.4223,
        "source": "IROISE_560",
        "ve": [
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.32,
            "bearing": 72
          },
          {
            "speed": 0.54,
            "bearing": 68
          },
          {
            "speed": 0.63,
            "bearing": 72
          },
          {
            "speed": 0.45,
            "bearing": 63
          },
          {
            "speed": 0.22,
            "bearing": 63
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.2,
            "bearing": 270
          },
          {
            "speed": 0.41,
            "bearing": 256
          },
          {
            "speed": 0.63,
            "bearing": 252
          },
          {
            "speed": 0.51,
            "bearing": 259
          },
          {
            "speed": 0.32,
            "bearing": 252
          },
          {
            "speed": 0.1,
            "bearing": 270
          }
        ],
        "me": [
          {
            "speed": 0.1,
            "bearing": 90
          },
          {
            "speed": 0.2,
            "bearing": 90
          },
          {
            "speed": 0.32,
            "bearing": 72
          },
          {
            "speed": 0.22,
            "bearing": 63
          },
          {
            "speed": 0.2,
            "bearing": 90
          },
          {
            "speed": 0.1,
            "bearing": 90
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.2,
            "bearing": 270
          },
          {
            "speed": 0.22,
            "bearing": 243
          },
          {
            "speed": 0.2,
            "bearing": 270
          },
          {
            "speed": 0.2,
            "bearing": 270
          },
          {
            "speed": 0.0,
            "bearing": 0
          }
        ]
      },
      {
        "lat": 48.1267,
        "lon": -4.3863,
        "source": "IROISE_560",
        "ve": [
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.32,
            "bearing": 72
          },
          {
            "speed": 0.41,
            "bearing": 76
          },
          {
            "speed": 0.51,
            "bearing": 79
          },
          {
            "speed": 0.41,
            "bearing": 76
          },
          {
            "speed": 0.2,
            "bearing": 90
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.2,
            "bearing": 270
          },
          {
            "speed": 0.32,
            "bearing": 252
          },
          {
            "speed": 0.51,
            "bearing": 259
          },
          {
            "speed": 0.41,
            "bearing": 256
          },
          {
            "speed": 0.3,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 270
          }
        ],
        "me": [
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.2,
            "bearing": 90
          },
          {
            "speed": 0.2,
            "bearing": 90
          },
          {
            "speed": 0.2,
            "bearing": 90
          },
          {
            "speed": 0.2,
            "bearing": 90
          },
          {
            "speed": 0.1,
            "bearing": 90
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.2,
            "bearing": 270
          },
          {
            "speed": 0.2,
            "bearing": 270
          },
          {
            "speed": 0.2,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 270
          }
        ]
      },
      {
        "lat": 48.1267,
        "lon": -4.3504,
        "source": "IROISE_560",
        "ve": [
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.2,
            "bearing": 90
          },
          {
            "speed": 0.41,
            "bearing": 104
          },
          {
            "speed": 0.41,
            "bearing": 104
          },
          {
            "speed": 0.3,
            "bearing": 90
          },
          {
            "speed": 0.2,
            "bearing": 90
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.3,
            "bearing": 270
          },
          {
            "speed": 0.41,
            "bearing": 284
          },
          {
            "speed": 0.41,
            "bearing": 284
          },
          {
            "speed": 0.2,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 270
          }
        ],
        "me": [
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 90
          },
          {
            "speed": 0.2,
            "bearing": 90
          },
          {
            "speed": 0.2,
            "bearing": 90
          },
          {
            "speed": 0.1,
            "bearing": 90
          },
          {
            "speed": 0.1,
            "bearing": 90
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.2,
            "bearing": 270
          },
          {
            "speed": 0.2,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.0,
            "bearing": 0
          }
        ]
      },
      {
        "lat": 48.1267,
        "lon": -4.3144,
        "source": "IROISE_560",
        "ve": [
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.14,
            "bearing": 135
          },
          {
            "speed": 0.22,
            "bearing": 117
          },
          {
            "speed": 0.22,
            "bearing": 117
          },
          {
            "speed": 0.22,
            "bearing": 117
          },
          {
            "speed": 0.1,
            "bearing": 90
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.22,
            "bearing": 297
          },
          {
            "speed": 0.22,
            "bearing": 297
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.0,
            "bearing": 0
          }
        ],
        "me": [
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 90
          },
          {
            "speed": 0.1,
            "bearing": 90
          },
          {
            "speed": 0.1,
            "bearing": 90
          },
          {
            "speed": 0.1,
            "bearing": 90
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.0,
            "bearing": 0
          }
        ]
      }
    ]
  },
  "6": {
    "nom": "Douarnenez -> Port la Foret",
    "port_reference": "Concarneau",
    "note": "Portion proche de Douarnenez issue d'IROISE_560 (reference native Brest), reste du corridor sur reference Concarneau. Meme principe d'approximation que l'etape 1.",
    "nb_points_bruts_disponibles": 18,
    "points": [
      {
        "lat": 48.1267,
        "lon": -4.3144,
        "source": "IROISE_560",
        "ve": [
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.14,
            "bearing": 135
          },
          {
            "speed": 0.22,
            "bearing": 117
          },
          {
            "speed": 0.22,
            "bearing": 117
          },
          {
            "speed": 0.22,
            "bearing": 117
          },
          {
            "speed": 0.1,
            "bearing": 90
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.22,
            "bearing": 297
          },
          {
            "speed": 0.22,
            "bearing": 297
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.0,
            "bearing": 0
          }
        ],
        "me": [
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 90
          },
          {
            "speed": 0.1,
            "bearing": 90
          },
          {
            "speed": 0.1,
            "bearing": 90
          },
          {
            "speed": 0.1,
            "bearing": 90
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.0,
            "bearing": 0
          }
        ]
      },
      {
        "lat": 48.1087,
        "lon": -4.3054,
        "source": "IROISE_560",
        "ve": [
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.14,
            "bearing": 135
          },
          {
            "speed": 0.22,
            "bearing": 153
          },
          {
            "speed": 0.22,
            "bearing": 153
          },
          {
            "speed": 0.14,
            "bearing": 135
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.22,
            "bearing": 333
          },
          {
            "speed": 0.22,
            "bearing": 333
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.0,
            "bearing": 0
          }
        ],
        "me": [
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.14,
            "bearing": 135
          },
          {
            "speed": 0.14,
            "bearing": 135
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          }
        ]
      },
      {
        "lat": 47.8762,
        "lon": -3.9678,
        "source": "GLENAN_558",
        "ve": [
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.2,
            "bearing": 180
          },
          {
            "speed": 0.2,
            "bearing": 180
          },
          {
            "speed": 0.32,
            "bearing": 162
          },
          {
            "speed": 0.2,
            "bearing": 180
          },
          {
            "speed": 0.0,
            "bearing": 0
          }
        ],
        "me": [
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.0,
            "bearing": 0
          }
        ]
      },
      {
        "lat": 47.8636,
        "lon": -3.9772,
        "source": "GLENAN_558",
        "ve": [
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.2,
            "bearing": 0
          },
          {
            "speed": 0.3,
            "bearing": 0
          },
          {
            "speed": 0.3,
            "bearing": 0
          },
          {
            "speed": 0.22,
            "bearing": 27
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.2,
            "bearing": 180
          },
          {
            "speed": 0.3,
            "bearing": 180
          },
          {
            "speed": 0.3,
            "bearing": 180
          },
          {
            "speed": 0.32,
            "bearing": 162
          },
          {
            "speed": 0.22,
            "bearing": 153
          },
          {
            "speed": 0.1,
            "bearing": 90
          }
        ],
        "me": [
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.2,
            "bearing": 0
          },
          {
            "speed": 0.2,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.2,
            "bearing": 180
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.1,
            "bearing": 180
          }
        ]
      },
      {
        "lat": 47.8636,
        "lon": -3.9396,
        "source": "GLENAN_558",
        "ve": [
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.2,
            "bearing": 0
          },
          {
            "speed": 0.3,
            "bearing": 0
          },
          {
            "speed": 0.32,
            "bearing": 342
          },
          {
            "speed": 0.3,
            "bearing": 0
          },
          {
            "speed": 0.2,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.2,
            "bearing": 180
          },
          {
            "speed": 0.3,
            "bearing": 180
          },
          {
            "speed": 0.3,
            "bearing": 180
          },
          {
            "speed": 0.22,
            "bearing": 207
          },
          {
            "speed": 0.1,
            "bearing": 270
          }
        ],
        "me": [
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.0,
            "bearing": 0
          }
        ]
      },
      {
        "lat": 47.8509,
        "lon": -3.9867,
        "source": "GLENAN_558",
        "ve": [
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.22,
            "bearing": 207
          },
          {
            "speed": 0.36,
            "bearing": 214
          },
          {
            "speed": 0.36,
            "bearing": 214
          },
          {
            "speed": 0.22,
            "bearing": 207
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.0,
            "bearing": 0
          }
        ],
        "me": [
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.1,
            "bearing": 270
          }
        ]
      },
      {
        "lat": 47.8509,
        "lon": -3.9678,
        "source": "GLENAN_558",
        "ve": [
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.2,
            "bearing": 0
          },
          {
            "speed": 0.3,
            "bearing": 0
          },
          {
            "speed": 0.22,
            "bearing": 27
          },
          {
            "speed": 0.22,
            "bearing": 27
          },
          {
            "speed": 0.14,
            "bearing": 45
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.22,
            "bearing": 207
          },
          {
            "speed": 0.32,
            "bearing": 198
          },
          {
            "speed": 0.41,
            "bearing": 194
          },
          {
            "speed": 0.41,
            "bearing": 194
          },
          {
            "speed": 0.22,
            "bearing": 207
          },
          {
            "speed": 0.0,
            "bearing": 0
          }
        ],
        "me": [
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.14,
            "bearing": 45
          },
          {
            "speed": 0.1,
            "bearing": 90
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.22,
            "bearing": 207
          },
          {
            "speed": 0.22,
            "bearing": 207
          },
          {
            "speed": 0.22,
            "bearing": 207
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.1,
            "bearing": 270
          }
        ]
      },
      {
        "lat": 47.8509,
        "lon": -3.9302,
        "source": "GLENAN_558",
        "ve": [
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.2,
            "bearing": 0
          },
          {
            "speed": 0.3,
            "bearing": 0
          },
          {
            "speed": 0.3,
            "bearing": 0
          },
          {
            "speed": 0.3,
            "bearing": 0
          },
          {
            "speed": 0.2,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.2,
            "bearing": 180
          },
          {
            "speed": 0.32,
            "bearing": 198
          },
          {
            "speed": 0.41,
            "bearing": 194
          },
          {
            "speed": 0.22,
            "bearing": 207
          },
          {
            "speed": 0.1,
            "bearing": 270
          }
        ],
        "me": [
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.1,
            "bearing": 270
          }
        ]
      },
      {
        "lat": 47.8509,
        "lon": -4.1185,
        "source": "GLENAN_558",
        "ve": [
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.28,
            "bearing": 315
          },
          {
            "speed": 0.28,
            "bearing": 315
          },
          {
            "speed": 0.28,
            "bearing": 315
          },
          {
            "speed": 0.22,
            "bearing": 297
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.2,
            "bearing": 180
          },
          {
            "speed": 0.2,
            "bearing": 180
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.1,
            "bearing": 270
          }
        ],
        "me": [
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.0,
            "bearing": 0
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.1,
            "bearing": 180
          },
          {
            "speed": 0.0,
            "bearing": 0
          }
        ]
      },
      {
        "lat": 47.8509,
        "lon": -4.0808,
        "source": "GLENAN_558",
        "ve": [
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.22,
            "bearing": 297
          },
          {
            "speed": 0.22,
            "bearing": 297
          },
          {
            "speed": 0.22,
            "bearing": 297
          },
          {
            "speed": 0.22,
            "bearing": 297
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.22,
            "bearing": 207
          },
          {
            "speed": 0.22,
            "bearing": 207
          },
          {
            "speed": 0.22,
            "bearing": 207
          },
          {
            "speed": 0.1,
            "bearing": 270
          }
        ],
        "me": [
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.14,
            "bearing": 315
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.1,
            "bearing": 270
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.14,
            "bearing": 225
          },
          {
            "speed": 0.1,
            "bearing": 270
          }
        ]
      }
    ]
  }
};
})(window);