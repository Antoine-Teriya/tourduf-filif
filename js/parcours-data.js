// parcours-data.js
// Waypoints des parcours de chaque etape, toutes variantes.
// Source unique : Annexe Parcours des Instructions de Course 2026 (pages 12 a 21),
// extraite en degres decimaux (fichiers waypoints_ic.json / parcours_par_etape.json).
// Genere automatiquement (v1.0) : aucune coordonnee saisie manuellement.
// Regle de lecture : le premier point est le depart, le dernier l'arrivee. L'IC numerote
// la ligne de depart de facon incoherente selon les variantes, la position fait foi.
// "distanceIC" est la distance annoncee par l'IC, conservee comme libelle ; les distances
// de segment sont recalculees par l'application.
// Etape 5 (Douarnenez) : parcours construit, bouees posees le jour meme, aucun waypoint
// publie dans l'IC. Seule la saisie d'un parcours personnalise est possible.
(function (global) {
  'use strict';

  var PARCOURS = {
    "1": {variantes: [
      {nom:"Parcours unique",distanceIC:35,points:[
        {ordre:"D",nom:"Roscoff",action:null,cote:null,type:"",consigne:"Voir IC 12.1",lat:48.72663,lon:-3.94477},
        {ordre:1,nom:"N°2 Roscoff",action:"Contourner",cote:"babord",type:"",consigne:"Contourner bâbord",lat:48.73842,lon:-3.9375},
        {ordre:2,nom:"Basse Astan",action:"Contourner",cote:"babord",type:"",consigne:"Contourner bâbord",lat:48.7485,lon:-3.96167},
        {ordre:3,nom:"Le Taureau",action:"Laisser",cote:"babord",type:"",consigne:"Laisser bâbord",lat:48.75958,lon:-3.98917},
        {ordre:4,nom:"Grande Basse",action:"Laisser",cote:"babord",type:"",consigne:"Laisser bâbord",lat:48.76725,lon:-4.02742},
        {ordre:5,nom:"Basse Toullcoz",action:"Contourner",cote:"tribord",type:"",consigne:"Contourner tribord",lat:48.69017,lon:-4.32083},
        {ordre:6,nom:"Lizen Ven",action:"Laisser",cote:"babord",type:"",consigne:"Laisser bâbord",lat:48.67692,lon:-4.55775},
        {ordre:7,nom:"Libenter",action:"Contourner",cote:"babord",type:"",consigne:"Contourner bâbord",lat:48.624,lon:-4.64167},
        {ordre:8,nom:"Petit Pot de Beurre",action:"Laisser",cote:"babord",type:"",consigne:"Laisser bâbord",lat:48.61883,lon:-4.60392},
        {ordre:"A",nom:"Aber Wrac'h",action:null,cote:null,type:"",consigne:"Voir IC 14.1",lat:48.60017,lon:-4.56442}
      ]}
    ]},
    "2": {variantes: [
      {nom:"Parcours N°1",distanceIC:25,points:[
        {ordre:"D",nom:"Aber Wrac'h",action:null,cote:null,type:"",consigne:"Voir IC 12.1",lat:48.61483,lon:-4.59017},
        {ordre:1,nom:"Petit Pot de Beurre",action:"Laisser",cote:"tribord",type:"Card Est",consigne:"Laisser tribord",lat:48.61883,lon:-4.60392},
        {ordre:2,nom:"Libenter",action:"Laisser",cote:"tribord",type:"Card Ouest",consigne:"Laisser tribord",lat:48.624,lon:-4.64167},
        {ordre:3,nom:"Petite Fourche",action:"Laisser",cote:"babord",type:"Card Ouest",consigne:"Laisser bâbord",lat:48.61575,lon:-4.64683},
        {ordre:4,nom:"Basse Paupian",action:"Laisser",cote:"babord",type:"Card Ouest",consigne:"Laisser bâbord",lat:48.588,lon:-4.77125},
        {ordre:5,nom:"Le Four",action:"Laisser",cote:"babord",type:"Phare",consigne:"Laisser bâbord",lat:48.52292,lon:-4.80567},
        {ordre:6,nom:"Les Liniou",action:"Laisser",cote:"babord",type:"Roches",consigne:"Laisser bâbord",lat:48.48683,lon:-4.81042},
        {ordre:7,nom:"La Valbelle",action:"Contourner",cote:"tribord",type:"Lat R",consigne:"Contourner tribord",lat:48.436,lon:-4.83367},
        {ordre:8,nom:"Plâtresses SE",action:"Laisser",cote:"tribord",type:"Lat G",consigne:"Laisser tribord",lat:48.42808,lon:-4.842},
        {ordre:9,nom:"La Luronne",action:"Contourner",cote:"tribord",type:"Card Ouest",consigne:"Contourner tribord",lat:48.43883,lon:-4.89617},
        {ordre:10,nom:"Plâtresses Nord",action:"Laisser",cote:"tribord",type:"Lat G",consigne:"Laisser tribord",lat:48.43658,lon:-4.84525},
        {ordre:11,nom:"Pierre de l'Aber",action:"Laisser",cote:"tribord",type:"Lat G",consigne:"Laisser tribord",lat:48.46617,lon:-4.78733},
        {ordre:"A",nom:"Lanildut",action:null,cote:null,type:"",consigne:"Voir IC 14.1",lat:48.46933,lon:-4.77742}
      ]},
      {nom:"Parcours N°2",distanceIC:25,points:[
        {ordre:"D",nom:"Aber Wrac'h",action:null,cote:null,type:"",consigne:"Voir IC 12.1",lat:48.61483,lon:-4.59017},
        {ordre:1,nom:"Petit Pot de Beurre",action:"Laisser",cote:"tribord",type:"Card Est",consigne:"Laisser tribord",lat:48.61883,lon:-4.60392},
        {ordre:2,nom:"Libenter",action:"Laisser",cote:"tribord",type:"Card Ouest",consigne:"Laisser tribord",lat:48.624,lon:-4.64167},
        {ordre:3,nom:"Petite Fourche",action:"Laisser",cote:"babord",type:"Card Ouest",consigne:"Laisser bâbord",lat:48.61575,lon:-4.64683},
        {ordre:4,nom:"Basse Paupian",action:"Laisser",cote:"babord",type:"Card Ouest",consigne:"Laisser bâbord",lat:48.588,lon:-4.77125},
        {ordre:5,nom:"Le Four",action:"Laisser",cote:"babord",type:"Phare",consigne:"Laisser bâbord",lat:48.52292,lon:-4.80567},
        {ordre:6,nom:"Les Liniou",action:"Laisser",cote:"babord",type:"Roches",consigne:"Laisser bâbord",lat:48.48683,lon:-4.81042},
        {ordre:7,nom:"La Luronne",action:"Contourner",cote:"babord",type:"Card Ouest",consigne:"Contourner bâbord",lat:48.43883,lon:-4.89617},
        {ordre:8,nom:"Basse Saint Paul",action:"Contourner",cote:"babord",type:"Lat R",consigne:"Contourner bâbord",lat:48.41358,lon:-4.8195},
        {ordre:9,nom:"La Valbelle",action:"Laisser",cote:"babord",type:"Lat R",consigne:"Laisser bâbord",lat:48.436,lon:-4.83367},
        {ordre:10,nom:"Plateau des Fourches",action:"Laisser",cote:"tribord",type:"Roches",consigne:"Laisser tribord",lat:48.45025,lon:-4.8105},
        {ordre:11,nom:"Pierre de l'Aber",action:"Contourner",cote:"tribord",type:"Lat G",consigne:"Contourner tribord",lat:48.46617,lon:-4.78733},
        {ordre:"A",nom:"Lanildut",action:null,cote:null,type:"",consigne:"Voir IC 14.1",lat:48.46933,lon:-4.77742}
      ]},
      {nom:"Parcours N°3",distanceIC:31,points:[
        {ordre:"D",nom:"Aber Wrac'h Contourner",action:null,cote:null,type:"",consigne:"Voir IC 12.1",lat:48.61483,lon:-4.59017},
        {ordre:2,nom:"Petit Pot de Beurre",action:"Laisser",cote:"tribord",type:"Card Est",consigne:"Laisser tribord",lat:48.61883,lon:-4.60392},
        {ordre:3,nom:"Libenter",action:"Laisser",cote:"tribord",type:"Card Ouest",consigne:"Laisser tribord",lat:48.624,lon:-4.64167},
        {ordre:4,nom:"Petite Fourche",action:"Laisser",cote:"babord",type:"Card Ouest",consigne:"Laisser bâbord",lat:48.61575,lon:-4.64683},
        {ordre:5,nom:"Basse Paupian",action:"Laisser",cote:"babord",type:"Card Ouest",consigne:"Laisser bâbord",lat:48.588,lon:-4.77125},
        {ordre:6,nom:"Le Four",action:"Laisser",cote:"babord",type:"Phare",consigne:"Laisser bâbord",lat:48.52292,lon:-4.80567},
        {ordre:7,nom:"Les Liniou",action:"Laisser",cote:"babord",type:"Roches",consigne:"Laisser bâbord",lat:48.49115,lon:-4.81277},
        {ordre:8,nom:"Saint Pierre",action:"Contourner",cote:"tribord",type:"Lat G",consigne:"Contourner tribord",lat:48.3845,lon:-4.81798},
        {ordre:9,nom:"Plâtresses SE",action:"Laisser",cote:"babord",type:"Lat G",consigne:"Laisser bâbord",lat:48.43292,lon:-4.84195},
        {ordre:10,nom:"La Valbelle",action:"Contourner",cote:"babord",type:"Lat R",consigne:"Contourner bâbord",lat:48.44047,lon:-4.83382},
        {ordre:11,nom:"Plâtresses Nord",action:"Laisser",cote:"babord",type:"Lat G",consigne:"Laisser bâbord",lat:48.44118,lon:-4.84542},
        {ordre:12,nom:"La Luronne",action:"Contourner",cote:"tribord",type:"Card Ouest",consigne:"Contourner tribord",lat:48.44367,lon:-4.89633},
        {ordre:13,nom:"Pierre de l'Aber",action:"Laisser",cote:"tribord",type:"Lat G",consigne:"Laisser tribord",lat:48.46617,lon:-4.78733},
        {ordre:"A",nom:"Lanildut",action:null,cote:null,type:"",consigne:"Voir IC 14.1",lat:48.46933,lon:-4.77742}
      ]}
    ]},
    "3": {variantes: [
      {nom:"Parcours N°1",distanceIC:26,points:[
        {ordre:"D",nom:"Lanildut",action:null,cote:null,type:"",consigne:"Voir IC 12.1",lat:48.47,lon:-4.78117},
        {ordre:1,nom:"Pierre de l'Aber",action:"Laisser",cote:"babord",type:"Lat G",consigne:"Laisser bâbord",lat:48.46617,lon:-4.78733},
        {ordre:2,nom:"Plateau des Fourches",action:"Laisser",cote:"babord",type:"Roches",consigne:"Laisser bâbord",lat:48.45025,lon:-4.8105},
        {ordre:3,nom:"La Valbelle",action:"Contourner",cote:"babord",type:"Lat R",consigne:"Contourner bâbord",lat:48.4405,lon:-4.83383},
        {ordre:4,nom:"Plâtresses SE",action:"Laisser",cote:"tribord",type:"Lat G",consigne:"Laisser tribord",lat:48.43292,lon:-4.842},
        {ordre:5,nom:"Basse Saint Paul",action:"Contourner",cote:"tribord",type:"Lat R",consigne:"Contourner tribord",lat:48.41358,lon:-4.8195},
        {ordre:6,nom:"Saint Pierre",action:"Contourner",cote:"babord",type:"Lat G",consigne:"Contourner bâbord",lat:48.3845,lon:-4.818},
        {ordre:7,nom:"Grand Courleau",action:"Laisser",cote:"tribord",type:"Card Nord",consigne:"Laisser tribord",lat:48.36833,lon:-4.84125},
        {ordre:8,nom:"Grande Vinotière",action:"Laisser",cote:"babord",type:"Lat R",consigne:"Laisser bâbord",lat:48.36075,lon:-4.80667},
        {ordre:9,nom:"Vieux Moines",action:"Laisser",cote:"babord",type:"Lat R",consigne:"Laisser bâbord",lat:48.32217,lon:-4.77733},
        {ordre:10,nom:"Basse du Chenal",action:"Laisser",cote:"tribord",type:"Lat G",consigne:"Laisser tribord",lat:48.31683,lon:-4.8005},
        {ordre:11,nom:"Vandrée",action:"Contourner",cote:"babord",type:"Card Ouest",consigne:"Contourner bâbord",lat:48.25375,lon:-4.8035},
        {ordre:12,nom:"Basse du Lis",action:"Contourner",cote:"babord",type:"Card Sud",consigne:"Contourner bâbord",lat:48.2165,lon:-4.74208},
        {ordre:13,nom:"Pelen",action:"Laisser",cote:"tribord",type:"Card Sud",consigne:"Laisser tribord",lat:48.26092,lon:-4.65967},
        {ordre:14,nom:"Mendufa",action:"Laisser",cote:"tribord",type:"Card Nord",consigne:"Laisser tribord",lat:48.2675,lon:-4.65708},
        {ordre:15,nom:"Petit Leac'h",action:"Laisser",cote:"babord",type:"Card Sud",consigne:"Laisser bâbord",lat:48.271,lon:-4.66325},
        {ordre:16,nom:"La Louve",action:"Laisser",cote:"tribord",type:"Card Ouest",consigne:"Laisser tribord",lat:48.27975,lon:-4.63388},
        {ordre:17,nom:"Pointe du Grand Grouin",action:"Laisser",cote:"tribord",type:"Roches",consigne:"Laisser tribord",lat:48.28875,lon:-4.60083},
        {ordre:"A",nom:"Camaret",action:null,cote:null,type:"",consigne:"Voir IC 14.1",lat:48.28217,lon:-4.58667}
      ]},
      {nom:"Parcours N°2",distanceIC:20,points:[
        {ordre:"D",nom:"Lanildut",action:null,cote:null,type:"",consigne:"Voir IC 12.1",lat:48.47,lon:-4.78117},
        {ordre:1,nom:"Pierre de l'Aber",action:"Laisser",cote:"babord",type:"Lat G",consigne:"Laisser bâbord",lat:48.46617,lon:-4.78733},
        {ordre:2,nom:"Plateau des Fourches",action:"Laisser",cote:"babord",type:"Roches",consigne:"Laisser bâbord",lat:48.45025,lon:-4.8105},
        {ordre:3,nom:"Grand Courleau",action:"Laisser",cote:"tribord",type:"Card Nord",consigne:"Laisser tribord",lat:48.36833,lon:-4.84125},
        {ordre:4,nom:"Grande Vinotière",action:"Laisser",cote:"babord",type:"Lat R",consigne:"Laisser bâbord",lat:48.36075,lon:-4.80667},
        {ordre:5,nom:"Vieux Moines",action:"Laisser",cote:"babord",type:"Lat R",consigne:"Laisser bâbord",lat:48.32217,lon:-4.77733},
        {ordre:6,nom:"Basse du Chenal",action:"Laisser",cote:"tribord",type:"Lat G",consigne:"Laisser tribord",lat:48.31683,lon:-4.8005},
        {ordre:7,nom:"Le Coq",action:"Laisser",cote:"babord",type:"Lat R",consigne:"Laisser bâbord",lat:48.31792,lon:-4.73315},
        {ordre:8,nom:"Charles Martel",action:"Contourner",cote:"tribord",type:"Lat R",consigne:"Contourner tribord",lat:48.31592,lon:-4.69842},
        {ordre:9,nom:"Le Trépied",action:"Contourner",cote:"babord",type:"Lat G",consigne:"Contourner bâbord",lat:48.27917,lon:-4.69167},
        {ordre:10,nom:"Pointe du Grand Grouin",action:"Laisser",cote:"tribord",type:"Roches",consigne:"Laisser tribord",lat:48.28875,lon:-4.60083},
        {ordre:"A",nom:"Camaret",action:null,cote:null,type:"",consigne:"Voir IC 14.1",lat:48.28217,lon:-4.58667}
      ]},
      {nom:"Parcours N°3",distanceIC:28,points:[
        {ordre:"D",nom:"Lanildut",action:null,cote:null,type:"",consigne:"Voir IC 12.1",lat:48.47,lon:-4.78117},
        {ordre:2,nom:"Pierre de l'Aber",action:"Laisser",cote:"babord",type:"Lat G",consigne:"Laisser bâbord",lat:48.46617,lon:-4.78733},
        {ordre:3,nom:"Plateau des Fourches",action:"Laisser",cote:"babord",type:"Roches",consigne:"Laisser bâbord",lat:48.45025,lon:-4.8105},
        {ordre:4,nom:"La Valbelle",action:"Contourner",cote:"babord",type:"Lat R",consigne:"Contourner bâbord",lat:48.4405,lon:-4.83383},
        {ordre:5,nom:"Grande Vinotière",action:"Laisser",cote:"babord",type:"Lat R",consigne:"Laisser bâbord",lat:48.36075,lon:-4.80667},
        {ordre:6,nom:"Vieux Moines",action:"Laisser",cote:"babord",type:"Lat R",consigne:"Laisser bâbord",lat:48.32217,lon:-4.77733},
        {ordre:7,nom:"Basse du Chenal",action:"Contourner",cote:"babord",type:"Lat G",consigne:"Contourner bâbord",lat:48.31683,lon:-4.8005},
        {ordre:8,nom:"Basse du Lis",action:"Contourner",cote:"babord",type:"Card Sud",consigne:"Contourner bâbord",lat:48.2165,lon:-4.74208},
        {ordre:9,nom:"La Parquette",action:"Contourner",cote:"tribord",type:"Tourelle",consigne:"Contourner tribord",lat:48.26542,lon:-4.73842},
        {ordre:10,nom:"Charles Martel",action:"Contourner",cote:"tribord",type:"Lat R",consigne:"Contourner tribord",lat:48.31592,lon:-4.69842},
        {ordre:11,nom:"Pointe du Grand Grouin",action:"Laisser",cote:"tribord",type:"Roches",consigne:"Laisser tribord",lat:48.28875,lon:-4.60083},
        {ordre:"A",nom:"Camaret",action:null,cote:null,type:"",consigne:"Voir IC 14.1",lat:48.28217,lon:-4.58667}
      ]}
    ]},
    "4": {variantes: [
      {nom:"Parcours N°1",distanceIC:33,points:[
        {ordre:"D",nom:"Camaret",action:null,cote:null,type:"",consigne:"Voir IC 12.1",lat:48.29108,lon:-4.58133},
        {ordre:1,nom:"Pointe du Grand Grouin",action:"Laisser",cote:"babord",type:"Roches",consigne:"Laisser bâbord",lat:48.28875,lon:-4.60083},
        {ordre:2,nom:"Le Trépied",action:"Laisser",cote:"babord",type:"Lat G",consigne:"Laisser bâbord",lat:48.27917,lon:-4.69167},
        {ordre:3,nom:"La Parquette",action:"Contourner",cote:"babord",type:"Tourelle",consigne:"Contourner bâbord",lat:48.26542,lon:-4.73842},
        {ordre:4,nom:"Basse du Lis",action:"Contourner",cote:"babord",type:"Card Sud",consigne:"Contourner bâbord",lat:48.2165,lon:-4.74208},
        {ordre:5,nom:"Basse Jaune",action:"Contourner",cote:"babord",type:"Danger Isolé",consigne:"Contourner bâbord",lat:48.0785,lon:-4.70733},
        {ordre:"A",nom:"Douarnenez",action:null,cote:null,type:"",consigne:"Voir IC 14.1",lat:48.106,lon:-4.34292}
      ]},
      {nom:"Parcours N°2",distanceIC:30,points:[
        {ordre:"D",nom:"Camaret",action:null,cote:null,type:"",consigne:"Voir IC 12.1",lat:48.29108,lon:-4.58133},
        {ordre:1,nom:"Pointe du Grand Grouin",action:"Laisser",cote:"babord",type:"Roches",consigne:"Laisser bâbord",lat:48.28875,lon:-4.60083},
        {ordre:2,nom:"Petit Leac'h",action:"Laisser",cote:"tribord",type:"Card Sud",consigne:"Laisser tribord",lat:48.27103,lon:-4.66325},
        {ordre:3,nom:"Mendufa",action:"Laisser",cote:"babord",type:"Card Nord",consigne:"Laisser bâbord",lat:48.2675,lon:-4.65708},
        {ordre:4,nom:"Pelen",action:"Laisser",cote:"babord",type:"Card Sud",consigne:"Laisser bâbord",lat:48.26092,lon:-4.65967},
        {ordre:5,nom:"Basse du Lis",action:"Contourner",cote:"babord",type:"Card Sud",consigne:"Contourner bâbord",lat:48.2165,lon:-4.74208},
        {ordre:6,nom:"Basse Vieille",action:"Contourner",cote:"babord",type:"Danger Isolé",consigne:"Contourner bâbord",lat:48.13725,lon:-4.59583},
        {ordre:7,nom:"La Pierre Profonde",action:"Contourner",cote:"tribord",type:"Roches",consigne:"Contourner tribord",lat:48.20595,lon:-4.45372},
        {ordre:"A",nom:"Douarnenez",action:null,cote:null,type:"",consigne:"Voir IC 14.1",lat:48.106,lon:-4.34292}
      ]},
      {nom:"Parcours N°3",distanceIC:26,points:[
        {ordre:"D",nom:"Camaret",action:null,cote:null,type:"",consigne:"Voir IC 12.1",lat:48.29105,lon:-4.58137},
        {ordre:1,nom:"Pointe du Grand Grouin",action:"Laisser",cote:"babord",type:"Roches",consigne:"Laisser bâbord",lat:48.28872,lon:-4.60082},
        {ordre:2,nom:"La Louve",action:"Contourner",cote:"babord",type:"Card Ouest",consigne:"Contourner bâbord",lat:48.27973,lon:-4.63378},
        {ordre:3,nom:"Pelen",action:"Laisser",cote:"tribord",type:"Card Sud",consigne:"Laisser tribord",lat:48.26092,lon:-4.65963},
        {ordre:4,nom:"Basse du Lis",action:"Contourner",cote:"tribord",type:"Card Sud",consigne:"Contourner tribord",lat:48.2165,lon:-4.74208},
        {ordre:5,nom:"Basse Vieille",action:"Contourner",cote:"tribord",type:"Danger Isolé",consigne:"Contourner tribord",lat:48.13722,lon:-4.59578},
        {ordre:"A",nom:"Douarnenez",action:null,cote:null,type:"",consigne:"Voir IC 14.1",lat:48.106,lon:-4.34292}
      ]}
    ]},
    "5": {parcoursConstruit: true, variantes: []},
    "6": {variantes: [
      {nom:"Parcours N°1",distanceIC:82,points:[
        {ordre:"D",nom:"Douarnenez",action:null,cote:null,type:"",consigne:"Voir IC 12.1",lat:48.11883,lon:-4.33883},
        {ordre:1,nom:"La Plate",action:"Contourner",cote:"babord",type:"Card Ouest",consigne:"Contourner bâbord",lat:48.03958,lon:-4.75975},
        {ordre:2,nom:"Cap Caval",action:"Laisser",cote:"babord",type:"Card Ouest",consigne:"Laisser bâbord",lat:47.77475,lon:-4.3795},
        {ordre:3,nom:"Spineg",action:"Laisser",cote:"babord",type:"Card Sud",consigne:"Laisser bâbord",lat:47.75383,lon:-4.31508},
        {ordre:4,nom:"Basse Perennès",action:"Contourner",cote:"tribord",type:"Card Ouest",consigne:"Contourner tribord",lat:47.68383,lon:-4.10358},
        {ordre:5,nom:"Jument de Glénan",action:"Contourner",cote:"babord",type:"Card Sud",consigne:"Contourner bâbord",lat:47.64683,lon:-4.02292},
        {ordre:6,nom:"Basse an Ero",action:"Laisser",cote:"babord",type:"Card Sud",consigne:"Laisser bâbord",lat:47.67317,lon:-3.92417},
        {ordre:7,nom:"Jaune de Glénan",action:"Contourner",cote:"babord",type:"Card Est",consigne:"Contourner bâbord",lat:47.70983,lon:-3.83025},
        {ordre:8,nom:"La Voleuse",action:"Contourner",cote:"tribord",type:"",consigne:"Contourner tribord",lat:47.812,lon:-4.04167},
        {ordre:9,nom:"Linuen",action:"Contourner",cote:"babord",type:"",consigne:"Contourner bâbord",lat:47.84583,lon:-3.95475},
        {ordre:"A",nom:"Port la Forêt",action:null,cote:null,type:"",consigne:"Voir IC 14.1",lat:47.87533,lon:-3.96692}
      ]},
      {nom:"Parcours N°2",distanceIC:67,points:[
        {ordre:"D",nom:"Douarnenez",action:null,cote:null,type:"",consigne:"Voir IC 12.1",lat:48.11883,lon:-4.33883},
        {ordre:1,nom:"La Plate",action:"Contourner",cote:"babord",type:"Card Ouest",consigne:"Contourner bâbord",lat:48.03957,lon:-4.75972},
        {ordre:2,nom:"Cap Caval",action:"Laisser",cote:"babord",type:"Card Ouest",consigne:"Laisser bâbord",lat:47.77475,lon:-4.3795},
        {ordre:3,nom:"Spineg",action:"Laisser",cote:"babord",type:"Card Sud",consigne:"Laisser bâbord",lat:47.75383,lon:-4.31508},
        {ordre:4,nom:"Basse Perennès",action:"Contourner",cote:"babord",type:"Card Ouest",consigne:"Contourner bâbord",lat:47.68383,lon:-4.10358},
        {ordre:5,nom:"Les Bluiniers",action:"Laisser",cote:"tribord",type:"Card Ouest",consigne:"Laisser tribord",lat:47.723,lon:-4.06383},
        {ordre:6,nom:"Rouge de Glénan",action:"Laisser",cote:"babord",type:"Card Ouest",consigne:"Laisser bâbord",lat:47.75792,lon:-4.06633},
        {ordre:7,nom:"Pourceaux",action:"Laisser",cote:"tribord",type:"Card Nord",consigne:"Laisser tribord",lat:47.76725,lon:-4.01342},
        {ordre:8,nom:"Ile aux Moutons",action:"Contourner",cote:"babord",type:"Roches",consigne:"Contourner bâbord",lat:47.77458,lon:-4.02767},
        {ordre:9,nom:"La Voleuse",action:"Contourner",cote:"tribord",type:"Card Sud",consigne:"Contourner tribord",lat:47.812,lon:-4.04167},
        {ordre:10,nom:"Linuen",action:"Contourner",cote:"babord",type:"Card Est",consigne:"Contourner bâbord",lat:47.84583,lon:-3.95483},
        {ordre:"A",nom:"Port la Forêt",action:null,cote:null,type:"",consigne:"Voir IC 14.1",lat:47.87533,lon:-3.96692}
      ]},
      {nom:"Parcours N°3",distanceIC:62,points:[
        {ordre:"D",nom:"Douarnenez",action:null,cote:null,type:"",consigne:"Voir IC 12.1",lat:48.11883,lon:-4.33883},
        {ordre:2,nom:"La Plate",action:"Contourner",cote:"babord",type:"",consigne:"Contourner bâbord",lat:48.03958,lon:-4.75975},
        {ordre:3,nom:"Cap Caval",action:"Laisser",cote:"babord",type:"",consigne:"Laisser bâbord",lat:47.77475,lon:-4.3795},
        {ordre:4,nom:"Spineg",action:"Laisser",cote:"babord",type:"",consigne:"Laisser bâbord",lat:47.75383,lon:-4.31508},
        {ordre:5,nom:"Ar Guisty",action:"Laisser",cote:"babord",type:"",consigne:"Laisser bâbord",lat:47.76067,lon:-4.25967},
        {ordre:6,nom:"Rouge de Glénan",action:"Contourner",cote:"babord",type:"",consigne:"Contourner bâbord",lat:47.75792,lon:-4.06633},
        {ordre:7,nom:"Pourceaux",action:"Laisser",cote:"tribord",type:"",consigne:"Laisser tribord",lat:47.76725,lon:-4.01342},
        {ordre:8,nom:"Ile aux Moutons",action:"Laisser",cote:"babord",type:"",consigne:"Laisser bâbord",lat:47.77458,lon:-4.02767},
        {ordre:9,nom:"Linuen",action:"Contourner",cote:"babord",type:"",consigne:"Contourner bâbord",lat:47.84583,lon:-3.95483},
        {ordre:"A",nom:"Port la Forêt",action:null,cote:null,type:"",consigne:"Voir IC 14.1",lat:47.87533,lon:-3.96692}
      ]}
    ]}
  };

  function variantes(numeroEtape) {
    var e = PARCOURS[String(numeroEtape)];
    return e ? e.variantes : [];
  }

  global.ParcoursData = {
    PARCOURS: PARCOURS,
    variantes: variantes
  };

})(window);
