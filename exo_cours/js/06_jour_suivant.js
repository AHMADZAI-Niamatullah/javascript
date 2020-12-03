// var l = lundi;
// var m = mardi;
// var mer = mercredi;
// var j = jeudi;
// var v = vendredi;
// var s = samedi;
// var d = dimanche;

// var utilisateur = window.prompt("Quel jour sommes-nous ?");



// if(utilisateur = l){
//     alert("Demain, nous serons Mardi");
// } else {
//     alert("Mauvais jour, veuillez recommencer");
// }



// Condition avec IF -----------------------------------------------------------------


// var jour = "jeudi";
// var suivant = "vendredi";
// var utilisateur = window.prompt('Quel jour somme-nous ? : ');

//  if (utilisateur === jour ){
//     alert("Demain nous serons le : " + suivant);
// }else{
//     alert("Mauvaise réponse");
// }


// ---------------------------------------------------------------


// Correction avec IF

var jour = prompt("Quel jour sommes-nous ?");

// if(jour === "lundi"){
//     document.write("Nous serons Mardi");
// } else if (jour === "mardi") {
//     document.write("Nous serons Mercredi");
// } else if (jour === "mercredi") {
//     document.write("Nous serons Jeudi");
// } else if (jour === "jeudi") {
//     document.write("Nous serons Vendredi");
// } else if (jour === "vendredi") {
//     document.write("Bon Week end");
// } else if (jour === "samedi") {
//     document.write("Nous serons Dimanche");
// } else if (jour === "dimanche") {
//     document.write("Bon courage");
// } else {
//     document.write("Jour inconnu... veuillez entrer un jour de la semaine en minuscule");
// }


// SWITCH



// var jour1 = "lundi";
// var jour = ["mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
// var utilisateur = window.prompt("Quel jour sommes-nous ?");


// if(utilisateur == jour1){
//     document.write("Demain nous serons le Mardi")
// } 

// else {
//     switch(jour){
//       case mardi :
//       document.write("Demain nous serons le Mercredi");
//       break;

//       case mercredi :
//       document.write("Demain nous serons le Jeudi");
//       break;

//       case jeudi :
//       document.write("Demain nous serons le Vendredi");
//       break;

//       case vendredi :
//       document.write("Demain nous serons le Samedi");
//       break;

//       case samedi :
//       document.write("Demain nous serons le Dimanche");
//       break;

//       case dimanche :
//       document.write("Demain nous serons le Lundi");
//       break;

//       default:
//          alert("Le jour choisi n'existe pas");
//       break;

//     }
// }


//  Switch correction 

switch (jour){
    case "lundi" :
    document.write("Demain nous serons Mardi");
    break;

    case "mardi" :
    document.write("Demain nous serons Mercredi");
    break;

    case "mercredi" :
    document.write("Demain nous serons Mercredi");
    break;

    case "jeudi" :
    document.write("Demain nous serons Vendredi");
    break;

    case "vendredi" :
    document.write("Demain nous serons Samedi");
    break;

    case "samedi" :
    document.write("Demain nous serons Dimanche");
    break;

    case "dimanche" :
    document.write("Demain nous serons Lundi");
    break;

    default: 
        document.write("Désolé, vérifiez l'ortogrphe des jours")

}