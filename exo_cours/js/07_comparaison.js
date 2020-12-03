// var numero1 = window.prompt("Veuillez rentrer un nombre");
// var numero2 = window.prompt("Veuillez saisir un deuxième nombre");

// if(numero1 == numero2){
//     document.write("Les nombres " + numero1 + " et " + numero2 + " sont bel et bien égaux");
// } else if(numero1 > numero2){
//     document.write("Le nombre " + numero1 + " " + "est supérieur au " + numero2 + ".");
// } else {
//     document.write("<hr>Le nombre  " + numero2 + "est inférieur au " + numero1 + "</hr>.");
// }



// CORRECTION 

var nb1 = parseInt(prompt("Entrez votre premier nombre"));
var nb2 = parseInt(prompt("Entrez votre deuxième nombre"));

if( (!isNaN(nb1)) && (!isNaN(nb2)) ) {
    if(nb1 < nb2){
        document.write("Votre 1er nombre : " + nb1 + " est plus petit que votre 2eme");
    } else if(nb1 > nb2){
        document.write("Votre 1er nombre : " + nb1 + " est plus grand que votre 2eme");
    } else {
        document.write("Votre 1er nombre : " + nb1 + " est égal à votre 2eme" + nb2);
    }
} else {
    alert("Vous n\'avez pas saisi de chiffre(s)");
}