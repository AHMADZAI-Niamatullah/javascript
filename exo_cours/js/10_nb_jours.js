//alert("hello");


var mois = window.prompt("Veuillez choisir un mois avec un chiffre svp (1 pour Janvier, 2 pour Février, etc...");
if(mois == 13){
    document.write("Il n'y a pas plus de 12 mois !");
} else if(mois == 1){
    document.write("Le mois de Janvier (" + mois + ") comporte 31 jours"); 
} else if(mois == 2){
    document.write("Le mois de Février (" + mois + ") comporte 28 jours"); 
} else if(mois == 3){
    document.write("Le mois de Mars (" + mois + ") comporte 31 jours"); 
} else if(mois == 4){
    document.write("Le mois d'Avril (" + mois + ") comporte 30 jours"); 
} else if(mois == 5){
    document.write("Le mois de Mai (" + mois + ") comporte 31 jours"); 
} else if(mois == 6){
    document.write("Le mois de Juin (" + mois + ") comporte 30 jours"); 
} else if(mois == 7){
    document.write("Le mois de Juillet (" + mois + ") comporte 31 jours"); 
} else if(mois == 8){
    document.write("Le mois d'Aout (" + mois + ") comporte 31 jours"); 
} else if(mois == 9){
    document.write("Le mois de Septembre (" + mois + ") comporte 30 jours"); 
} else if(mois == 10){
    document.write("Le mois d'Octobre (" + mois + ")comporte 31 jours"); 
} else if(mois == 11){
    document.write("Le mois de Novembre (" + mois + ") comporte 30 jours"); 
} else if(mois == 12){
    document.write("Le mois de Décembre (" + mois + ") comporte 31 jours"); 
} else {
    document.write("Erreur de saisi, recommencez");
}   



//------------------------Teacher-----------------------------

/*var mois = parseInt(prompt("Quel mois choisissez-vous", "<saisir un chiffre entre 1 et 12>"));
if (mois === 2) { // si on a choisi février => chiffre 2
    document.write("Le mois numéro " + mois + " fait 28 jours.");
} else if ((mois === 4) || (mois === 6) || (mois === 9) || (mois === 11)){ // si on a choisi un mois qui fait 30 jours
    document.write("Le mois numéro " + mois + " fait 30 jours.");
} else if ((mois === 1) || (mois === 3) || (mois === 5) || (mois === 7) || (mois === 8) || (mois === 10) || (mois === 12)) { // si on a choisi un mois qui fait 31 jours
    document.write("Le mois numéro " + mois + " fait 31 jours.");
} else {
    document.write("Votre choix " + mois + " n'est pas dans le calendrier.");
}
*/