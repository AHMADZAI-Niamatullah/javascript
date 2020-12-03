// utilisateur = window.prompt('Entrez un nombre entre 50 et 100');



// while((utilisateur >= 50) || (utilisateur < 100)) {
//     window.prompt("Entrez un nombre entre 50 et 100 " + utilisateur);
// }


// alert("Entrez un nombre entre 50 et 100");
// var utilisateur = window.prompt("Nombre entre 50 et 100");

// while((utilisateur >= 50) || (utilisateur < 100)) {
//      window.prompt("Nombre entre 50 et 100");
// } if((utilisateur < 50) || (utilisateur > 100)) {
//     utilisateur = false
// }


// var numero = 0;

// while((numero < 50) || (numero > 100)) {
//     numero = prompt("Entrez un nombre entre 50 et 100")
// }





// CORRECTION

// var nombre = 0;

// while((nombre < 50) || (nombre > 100)) {
//     nombre = prompt("Entrez un nombre entre 50 et 100")
// }

// SARA 



// var nombre = parseInt(prompt("Entrez un nombre entre 50 et 100 :"))

// while(nombre >= 50 && nombre <= 100) {
//     alert("Le nombre : " + nombre + " que vous avez saisi est compris entre 50 et 100");
//     nombre = prompt("Entrez un nombre entre 50 et 100");
// }

// Produit l'effet inverse demandé



// ********************************************

// while(nombre < 50 || nombre > 100) {
//     alert("Vous avez saisi " + nombre + " il n'est pas entre 50 et 100");
//     nombre = prompt("Entrez un nombre entre 50 et 100");
// }

// Répond à l'énnoncé et rajoute une alert


// ********************************************


// while(nombre != "quitter") {
//     if(nombre >= 50 && nombre <= 100) {
//         alert("Vous avez saisi " + nombre + " il est compris entre 50 et 100");
//         nombre = prompt("Entrez un nombre entre 50 et 100");
//     }
//     else if(nombre < 50 || nombre > 100) {
//         alert("Vous avez saisi " + nombre + " il n'est pas entre 50 et 100");
//         nombre = prompt("Entrez un nombre entre 50 et 100");
//     }
//     else {
//         alert("Erreur ! Entrez un nombre correct")
//     }
// }

// Ajouter le choix de quitter la boucle en écrivant "quitter", mais redemande un nombre même si on l'a bien répondu entre 50 et 100


var nombre = 0;

while((nombre < 50) || (nombre > 100)) {
    nombre = window.prompt("Veuillez saisir un nombre entre 50 et 100")
}

