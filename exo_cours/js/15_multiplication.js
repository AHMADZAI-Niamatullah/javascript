// var taille = window.prompt("Saisir taille de la table");


// document.write("<table>");

// for(var i = 1 ; i < taille ; i++){
//   document.write("<tr>")

// for(var y = 1 ; y < taille ; y++){
// ligne 11 à  14: Pour isoler des cellules ( 1*1, 2*2 ou 3*3 etc ...) du tableau.
//   if(i == y){
//     document.write("<td" + y * i + "</td>")
//   }else{
//     document.write("<td>" + y * i + "</td>")
//   }
// }

//   document.write("</tr>");

// }

// document.write("</table>");



// CORRECTION 
// Boucle pour faire une table

// var choix = window.prompt("Entrez un nombre à multiplier par 10...");

// for(var i = 1; i <= 10; i++) {
//     var multiplication = i * choix;
//     document.write(choix + " X " + i + " = " + multiplication + "<br>");
// }


//  BOUCLE + CONDITION

// var choix = window.prompt("Entrez un nombre à multiplier par 10... ENTRE 2 et 9");

// while((choix < 2) || (choix > 9)) {
//     choix = prompt("Entrez UNIQUEMENT un nombre à multiplier entre 2 et 9");
//     } if((choix >= 2) && (choix <= 9)){
//         for(var i = 1; i <= 10; i++) {
//         var multiplication = i * choix;
//         document.write(choix + " X " + i + " = " + multiplication + "<br>");
//      } 
//   } else {
//       document.write("Entre 2 et 9 inclu")

//   } 



//   CORRECTION 


var choix = window.prompt("Entrez un nombre à multiplier par 10... ENTRE 2 et 9");

while((choix > 1) || (choix < 10)) {
    
    if((choix >= 2) && (choix <= 9)){
        for(var i = 1; i <= 10; i++) {
        var multiplication = i * choix;
        document.write(choix + " X " + i + " = " + multiplication + "<br>");
     } 
     break;
  } else {
      choix = Number(prompt("Entre 2 et 9 inclu"));
    }
  } 

