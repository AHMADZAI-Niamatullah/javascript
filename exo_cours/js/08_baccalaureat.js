// var moyenne = window.prompt("Veuillez saisir votre moyenne");

// if(moyenne < 10){
//     document.write("Désolé, mais votre note est insuffisante, vous êtes donc recalé");
// } else if(moyenne <= 12){
//     document.write("Vous êtes reçu, félicitations");
// } else {
//     document.write("Reçu avec mention ! Félicitation ! ");
// }





// CORRECTION 

var moyenne = parseFloat(prompt("Quelleest votre moyenne"));

if(moyenne < 10){
    document.write("Recalé");
} else if ((moyenne >= 10) && (moyenne < 12)){
    document.write("Tu passes");
} else if ((moyenne >= 12) && (moyenne <= 20)){
    document.write("Bravo pour la mention");
} else {
    document.write("Veuillez retaper votre moyenne svp")
}