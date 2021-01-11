document.write("<h2>Conditions</h2>");
//Déclaration de 3 variable a, b et c, et dans un premier temps je vais demander si a est SUPERIEUR a b
var a = 99,
    b = 43,
    c = 22;
// IF = si
if (a > b) {
    //Instruction!!
    document.write("Oui a est superieur à b");
}
//verifier 2 condition
// SI a est SUP à b ET si b est SUP a C
//&& est
if (a > b && b > c) {
    document.write("VRAIS");
}
/*
if( a > b && b < c){
    document.write("vrais");
}
Instruction pas bonne pour ca soit accepter et verfier faut que la comparaison soient bonne*/
// || ou
if (a > b || b < c) {
    document.write("VRAI");

} else {
    document.write('FAUX');
}


if (a > b && b > c) {
    document.write("VRAI");
}


var maVariable = 1,
    maVariable2 = "2";

if (maVariable == maVariable2) {
    document.write('VARI');
}

if (maVariable == maVariable2) {
    document.write('VRAI');

} else {
    document.write('FAUX');
}


// condition ternaire
var voiture = "BMW";
document.write((voiture == 'BMW') ? 'oui' : 'non');



//NaN = Not a Number

var nombre = "toto";

document.write("<br>");

resultat = parseInt(nombre) + age;
document.write(resultat + "<br>");

if (isNaN(nombre)) {
    document.write('VRAI');
} else {
    document.write('FAUX');
}



//Déclarer une variable age ensuite verifier si l'age saisi
// de l'utilisateur (vous) est majour ou mineur
// déclarer et afficher une constante
//déclarer une variable de type string et afficher son type dans la conso log 
//ecrire une condition ternaire qui virifie si 2 est plus petit que 4
// déclarer une variable nombre qui à pour valeur 10
//et verifier que nombre est bien un "number" 2 sulotions posible
//calculer le prix TTC de ma PS5 à 499.99€ et affichier le
//resultat ( la TVA  est à 19.6%) (le prix est 597.98 TTC)

// VAR
var age = 18;
var age = window.prompt("vous avez quelle age ?");

if (age < 18) {
    document.write("l'utilisateur est majour");
} else {
    document.write("l'utilisateur est mineur");
}



//CONST
const AGE = 25;
document.write(AGE);

//string

var monNom = "AHMADZAI";
document.write("<br>");


/*if(monNom = AHMADZAI){
     console.log("VARI");

 }else{
     console.log("FAUX")
 }
*/
//string
var voiture = "audi";
console.log(typeof voiture);

// condition ternaire 
document.write((2 < 4) ? 'oui' : 'non');


// variable nombre

var nombre = 10;
document.write(typeof nombre);

document.write("<br>");

if (typeof nombre == "nombre") {
    document.write('nomre est de type number');
}


// 2éme
if (isNaN(nombre)) {
    document.write('VRAI' + '<br>');

} else {
    document.write('FAUX' + '<br>');
}


// TVA

/*var prix = 499.98;
var tva = 19.6;


console.log("prix + tva");// 499.98 + 19.6
*/


// calculer le prix TTc de ma PS5 à 499.99 et afficher le resultat (la TVA est à 19.6%) (le prix est 567.98 TTC)
var prix = 499.99;
tva = 19.6;
ttc = prix * tva / 100;
ttc = prix + tva;
document.write("Le prix ttc de " + prix + " est de : " + ttc);
// condition switch
var couleur = "jaune";
switch (couleur) {
    case 'bleu':
        document.write('vous aimez le bleu');
        break;
    case 'rouge':
        document.write('vous aimez le rouge');
        break;
    case 'rose':
        document.write('vous aimez le rose');
        break;
    case 'jaune':
        document.write('vous aimez le jaune');
        break;
    default:
        document.write('vous aimez aucune couleur');
        break;
}
// si le nombre saisir est bien un number
//verifier si l'utilisateur est majeur ou mineur
var age = parseInt(prompt("Veuillez saisir un age :"));
if (!isNaN(age)) {
    if (age >= 18) {
        document.write("Majeur");
    } else {
        document.write("Mineur");
    }
}