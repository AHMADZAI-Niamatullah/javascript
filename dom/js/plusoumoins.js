// <li> demander au joueur 1 de saisir un nombre entre 1 et 100
// et le nombre d'essais </li>

//<li> demander au joueru 2 de trouver la solution </li>

//<li> si le nombre est trouvé, le jeu s'arrête.
//sinon le programme indique si le nombre magique est plus 
//petit ou plus grand que la saisie 
//si l'entrée n'est pas un nombre un message d'erreur s'affiche 
// l'utilisateur à 10 essais à chaque essais le nombre d'essais restant s'affich

//lorsque l'utilisateur n'a plus d'essais le jeu s'arrete et 
// affiche la solution.


/*  Activité : jeu de devinette
 */
// alert("Hello et bienvenue !");
// // Cette ligne génère aléatoirement un nombre entre 1 et 100
// var solution = Math.floor(Math.random() * 100) + 1;
// // TEST pour mieux vérifier le programme
// console.log("(La solution est " + solution + ")");
// for (var i = 1; i <= 6; i++) {
//     nbJoueur = parseInt(prompt("Le but du jeu est simple. Je pense à un nombre entre 0 et 100. A ton avis, quel est ce nombre ? Notes le dans la zone ci-dessous, tu as 6 essais."));
//     if (!isNaN(nbJoueur)) {
//         if (solution === nbJoueur) {
//             alert("Bravo vous avez trouvé !");
//             i = 6;
//         } else {
//             if (solution < nbJoueur) {
//                 alert("Le nombre est plus petit, essai " + i + " sur 6");
//             } else {
//                 alert("Le nombre est plus grand, essai " + i + " sur 6");
//             }
//         }
//     } else {
//         alert("Vous n'avez pas saisi un nombre !");
//     }
// } 




// alert("Hello et bienvenue !");

// function guessGame() {
//     //var randomNr = Math.random() * 20 + 1);
//     var randomNr = Math.floor(Math.random() * 21);
//     // var fixedNr = Math.floor(randomNr);
//     var guess;

//     do {
//         guess = prompt("Devien un nombre entre 1 et 20");
//         console.log(randomNr, guess);

//         if (randomNr > guess) {
//             alert("Trop petit");

//         } else if (randomNr < guess) {
//             alert("Trop grand");
//         }

//     } while (guess != randomNr);

// }

// guessGame();





// /* //////////////////////////////////////////////////////////////////////

// alert("Hello et bienvenue !");

// function guessGame() {
//     //var randomNr = Math.random() * 20 + 1);
//     var randomNr = Math.floor(Math.random() * 21);
//     // var fixedNr = Math.floor(randomNr);
//     var guess;

//     guess = prompt("Devien un nombre entre 1 et 20");

//     for (var i = 1; i <= 6; i++) {

//         if (randomNr === guess) {
//             alert("Bravo vous avez trouvé !");
//             i = 6;
//         } else if (randomNr > guess) {
//             alert("Trop petit");

//         } else if (randomNr < guess) {
//             alert("Trop grand");
//         }

//         while (guess != randomNr);

//     }
// }
// guessGame(); */






// var nbre = parseInt(prompt("Joueur 1 veuillez saisir un nombre entre 1 et 100"));
// var compteur = parseInt(prompt("Joueur 1 veuillir saisir le nombre d'essais"));
// while (true) {
//     var reponse = parseInt(prompt("Joueur 2 veuillez saisir votre réponse vous avez " + compteur + " essais"));
//     if (!isNaN(reponse)) {
//         if (reponse >= 1 && reponse <= 100) {
//             compteur--;
//             if (nbre === reponse) {
//                 alert("felicitation vous avez gagnez !");
//                 break;
//             } else {
//                 if (nbre < reponse) {
//                     alert("Moins il vous restes " + compteur + " essais.");
//                 } else {
//                     alert("Plus il vous restes " + compteur + " essais.");
//                 }
//                 if (compteur === 0) {
//                     alert("vous avez perdu ! la solution est : " + nbre);
//                     break;
//                 }
//             }
//         } else {
//             alert("Veuillez saisir un nombre compris entre 1 et 100 svp !");
//         }
//     } else {
//         alert("Veuillez saisir un nombre svp !");
//     }
// }




////////////////////////////////////////////////////////////////////////////




// var nbre;
// do{
//     nbre = parseInt(prompt("Joueur 1 veuillez saisir un nombre entre 1 et 100"))
//     if(nbre >= 1 && nbre <= 100) {
//         var compteur = parseInt(prompt("Joueur 1 veuillir saisir le nombre d'essais"));
//         alert("le nombre que vous avez choisi est : " + nbre);
//         break;
//     } else {
//         alert("Veuillez saisir un nombre compris entre 1 et 100 svp !");
//     }
// }while(true)
// while(true)
// {
//     var reponse = parseInt(prompt("Joueur 2 veuillez saisir votre réponse vous avez " + compteur + " essais"));
//     if(!isNaN(reponse)){
//         if(reponse >= 1 && reponse <= 100)
//         {
//             compteur--;
//             if(nbre === reponse){
//                 alert("felicitation vous avez gagnez !");
//                 break;
//             }  else {
//                 if(nbre < reponse)
//                 {
//                     alert("Moins il vous restes " + compteur + " essais." );
//                 } else {
//                     alert("Plus il vous restes " + compteur + " essais." );
//                 }
//                 if(compteur === 0)
//                 {
//                     alert("vous avez perdu ! la solution est : "  + nbre);
//                     break;
//                 }
//             }
//         } else {
//             alert("Veuillez saisir un nombre compris entre 1 et 100 svp !");
//         }
//     } else {
//         alert("Veuillez saisir un nombre svp !");
//     }
// }



document.write("<h2> Fonctions utilisateurs et predefinies </h2>");

var phrase = "BONSOIR";

document.write(phrase.toLowerCase() + "<br>");//bonsoir

// pour déclarer une fonction on utilise le mot function

function afficher(){
  return  document.write('Hello world');
}

afficher();

function d(arg){
    document.write(arg + "<br>");
}

d("Salut Niamatullah");
d("salut rachid");
d(2);
d("Salut amine");
d("Salut zakarya");
d("Salut zakarya" + "mohammet");


function toto(){
    var a = 1;

    return a;
}

var b = toto();// var 

document.write(b)//1


function plusieursParam(prenom, nom, age){

    document.write("Bonjor" + prenom + " " + nom + " tu as : " +  age + "ans <br>" )
}


plusieursParam("Niamatullah", "AHMADZAI", 25);
plusieursParam("Amine", "CHAAIR", 30);



// déclarer une function qui calcule le prix d'un article
// TVA = 19.6
//prixTTC(399) ------------> 477.92804
//afficher le prix arrond à 2 chiffres aprés la virgule. il existe une fonction 
//prédéfinie (à chercher sur googele)

function prixTTC(prix)
{
    var prixTTC = prix * 1.196;

    return Math.round(prixTTC, 2);
}

document.write(prixTTC(399) + "<br>");
document.write(prixTTC(14.99) + "<br>");