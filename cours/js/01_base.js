// syntaxe de base 

// comentaire sur une ligne

/*
ici comentaire sur plusieurs lignes
ici comentaire sur plusieurs lignes
*/


// Déclarer une variable js

var prenom; // on peut remplacer par let 


// Affecter une valeur 
prenom = "Niamatullah";


// Déclarer et affecter 
var prenom = "Niamatullah";

// on essaie de finir toutes instructions par un ";"



// Plusieurs variables déclarer à la suite 
inst_1;
inst_2; inst_3;


// Afficher une boite de dialoge :
alert("Bienvenu sur mon site");
window.alert("Hello world");
// Fonctionne aussi avec prompt()


// Afficher dans la console 
console.log(prenom);
// On ouvre la console avec la touche F12


// Afficher dans la page web
document.write(" Bientôt la pause repas ");

//demander une valeur à l'utilisateur 
prompt("Veillez entrez votre âge .");
window.prompt("pareil");


// pour manipuler la valeur reçu d'un prompt
var age = prompt ("Quel age avez-vous ");
console.log(age);

// /!\ Attention le js est sensible à la casse ( ' sensitive case ')
// mavariable != maVariable (camelCase) != ma_variable (snake_case)

// une variable on peut pas commencer par un chiffre, ne doit pas contenir de caractères alphanuméruques, et ne peut pas être un mot réservé ( var, for ...)

//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_r%C3%A9serv%C3%A9s

/*
    Les types de variable
    */

// Les chaînes de caractère (string)
var vacances = "2025";
var destination = "Australie";

// Les nombres entiers (integer ou int )
var annee = 2025;


// Les nombres décimaux (float )
var nombre_a_virgule = -5.35;

// Les booléens (boolean ou vrai / faux ou true / false )
var aBoolean = false; // ou  à l'inverse true

// Les CONSTANTES
/*
    La déclaration de constante permet de rendre la variable accessible uniquement en lecture.
    variable != constante
    Contrairement à une variable après affectation ( de valeur ) on ne pourra plus la modifier 
    */

// Par convention les constantes sont en majuscules
const PAYS = "France";
const AN = '2020';
const BIRTH =  2020;


//  Connaître le type d'une vaiable 
console.log(vacances);
console.log(typeof vacances);
console.log(annee);
console.log(typeof annee);


// En js les variables sont auto-typées 
// On peut convertir une variable de type NUMBER en STRING et aussi STRING en NUMBER 
// on utilisera les fonctions natives de JS parseInt(), parseFloat et toString()

var unCHiffre = "12";
console.log(unCHiffre);
console.log(typeof unCHiffre);

// STRING -> NUMBER
unCHiffre = parseInt(unCHiffre);
console.log(typeof unCHiffre);


unCHiffre = "12.22";


// STRING -> FLOAT 
unCHiffre = parseFloat (unCHiffre);
console.log ( typeof unCHiffre);

// NUMBER ->  STRING
var nb_en_letters =258;
nb_en_letters = nb_en_letters.toString();
console.log(typeof nb_en_letters);



