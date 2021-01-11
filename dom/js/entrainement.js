// alert("hello");

// /*sur
// plusieure ligne
// */

// //les commentaire sur un ligne

// document.write("<h2> commentarie, Affichage, et concaténation </h2>");

// console.log('hello world pour débagging');


// //+
// document.write('Bonjour' + 'tout le monde');



// document.write("<h2> Variables constantes et des donnée </h2>");


// //Ou'est ce qu'une variable  ?

// //Une variable est un espace nommé appelé mémoire qui permet 
// //consever une valeur

// var age = 25;

// var monText = "hello world";

// var monTableau = [1, 2, 3];


// // OUI: monAge, mon_age, age, age1, 

// // NON: MONage, Monage, MonAge, 1age, mon-age, /age, mon.age

//  //var nom = "AHMADZAI", prenom = "Niamatullah", age = 25; 

//  //prenom = "jack";

// //prenom += "jack";


// document.write("prenom");//jack


// var fruits = "pomme";

// document.write("fruits");//pomme

// fruits += "fraise";

// document.write("fruits");//pomme fraise

// const MA_VARIABLE = 20;

// const MAX = 199;

// console.log(typeof age);
// console.log(typeof monText);
// console.log(typeof monTableau);

// document.write("<h2> Opérateurs </h2>");

// //Addition
// var resultat = 10 + 5;
// document.write(resultat); //15

// //soustraction
// var resultat = 10 - 5;
// document.write(resultat); //5

// //Multiplication
// var resultat = 10 * 5;
// document.write(resultat); //50

// //Division
// var resultat = 10 / 5;
// document.write(resultat); //2

// // var fruits += "fraise";

// var a = 5;
// a += 9;

// //a = a + 9;
// //5 = 5 + 9;

// document.write(a);//14

// //a *= 10;
// //a -= 10;
// //a /= 10;


// document.write("<h2> Opérateurs comparaison </h2>"); 

// // > stric. supérieur.
// // < stric. inféfireur.
// // >= sup. ou égla.
// // <= inf. ou égla.
// // = afféctation.
// // == comparaision de valeur
// // === comparaision de valeur et de type
// // != différent de.
// // && et 
// // || ou
// document.write("<h2>Conditions</h2>");
// //Déclaration de 3 variable a, b et c, et dans un premier temps je vais demander si a est SUPERIEUR a b
// var a = 99, b = 43, c = 22;
// // IF = si
// if(a > b){
//     //Instruction!!
//     document.write("Oui a est superieur à b");
// }
// //verifier 2 condition
// // SI a est SUP à b ET si b est SUP a C
// //&& est
// if(a > b && b > c){
//     document.write("VRAIS");
// }
// /*
// if( a > b && b < c){
//     document.write("vrais");
// }
// Instruction pas bonne pour ca soit accepter et verfier faut que la comparaison soient bonne*/
// // || ou
// if(a > b || b < c){
//     document.write("VRAI");

// }else {
//     document.write('FAUX');
// }


// if(a > b && b > c){
//     document.write("VRAI");
// }


// var maVariable = 1, maVariable2 = "2";

// if(maVariable == maVariable2){
//     document.write('VARI');
// }

// if(maVariable == maVariable2){
//     document.write('VRAI');

// }else{
//     document.write('FAUX');
// }


// // condition ternaire
// var voiture = "BMW";
// document.write((voiture == 'BMW') ? 'oui'  :  'non');



// //NaN = Not a Number

// var nombre = "toto";

// document.write("<br>");

// resultat = parseInt(nombre) + age;
// document.write(resultat + "<br>");

// if (isNaN(nombre)){
//     document.write('VRAI');
// }else{
//     document.write('FAUX');
// }



// //Déclarer une variable age ensuite verifier si l'age saisi
// // de l'utilisateur (vous) est majour ou mineur
// // déclarer et afficher une constante
// //déclarer une variable de type string et afficher son type dans la conso log 
// //ecrire une condition ternaire qui virifie si 2 est plus petit que 4
// // déclarer une variable nombre qui à pour valeur 10
// //et verifier que nombre est bien un "number" 2 sulotions posible
// //calculer le prix TTC de ma PS5 à 499.99€ et affichier le
// //resultat ( la TVA  est à 19.6%) (le prix est 597.98 TTC)

// // VAR
// var age = 18;
// var age = window.prompt("vous avez quelle age ?");

// if(age < 18){
//     document.write("l'utilisateur est majour");
// }else {
//     document.write("l'utilisateur est mineur");
// }



// //CONST
//  const AGE = 25;
//  document.write(AGE);

//  //string

//  var monNom = "AHMADZAI";
//  document.write("<br>");


//  /*if(monNom = AHMADZAI){
//      console.log("VARI");

//  }else{
//      console.log("FAUX")
//  }
// */
// //string
// var voiture = "audi";
// console.log(typeof voiture);

// // condition ternaire 
// document.write((2 < 4 ) ? 'oui' : 'non');


// // variable nombre

// var nombre = 10;
// document.write(typeof nombre);

// document.write("<br>");

// if (typeof nombre == "nombre"){
//     document.write('nomre est de type number');
// }


// // 2éme
// if(isNaN(nombre)){
//     document.write('VRAI'  + '<br>');

// }else{
//     document.write('FAUX'  + '<br>');
// }


// // TVA

// /*var prix = 499.98;
// var tva = 19.6;


// console.log("prix + tva");// 499.98 + 19.6
// */


// // calculer le prix TTc de ma PS5 à 499.99 et afficher le resultat (la TVA est à 19.6%) (le prix est 567.98 TTC)
// var prix = 499.99;
// tva = 19.6;
// ttc = prix * tva/100;
// ttc = prix + tva;
// document.write("Le prix ttc de " + prix + " est de : " + ttc);
// // condition switch
// var couleur = "jaune";
// switch(couleur){
//     case 'bleu':
//         document.write('vous aimez le bleu');
//         break;
//     case 'rouge':
//         document.write('vous aimez le rouge');
//         break;
//     case 'rose':
//          document.write('vous aimez le rose');
//          break;  
//     case 'jaune':
//          document.write('vous aimez le jaune');
//          break;  
//     default:
//         document.write('vous aimez aucune couleur');
//         break;
// }
// // si le nombre saisir est bien un number
// //verifier si l'utilisateur est majeur ou mineur
// var age = parseInt(prompt("Veuillez saisir un age :"));
// if(!isNaN(age)){
//     if(age >= 18){
//         document.write("Majeur");
//     }else{
//         document.write("Mineur");
//     }
// }



// document.write("<h2> Boucles </h2>");

// var a = 10;

// for (var i = 0;  i < a;  i++ ){
//     document.write('je suis la tour numero : ' + i + '<br>');
// }

// // l'nvers
// var b = 0;

// for (var i = 10;  i < b;  i-- ){
//     document.write('je suis la tour numero : ' + i + '<br>');
// }


// var j = 0;


// while(j < a)
// {
//     document.write('je suis la tour numero : ' + j + '<br>');

//     j++
// }

// var k = 0;

// do{
//     document.write('je suis la tour k numero : ' + k + '<br>');
//     k++

// }while(k < a);


// // boucle for demander l'age de l'utilisateur tant que celui-ci 
// // n'est pas majeur 


// // var age = parseInt(prompt(message: 'veuillez saisir votre age : '));

// // if(age >= 18)
// // {
// //     document.write('vous etes majeur');

// // }else{

// //         alert('vous etes mineur');

// //         while(age < 18){
// //             parseInt(prompt(message: 'veuillez saisir votre age : '));
// //         }

// // }

// boucle  for demander l'age de l'utilisateur tant que celui-ci
// n'est pas majeur 

var i;
for (i = 0; i < 1; i++) //ne fonctionne qu'à conditin d'enlever l'incrémentation.

    age = prompt('quel age as-tu boucle for ?');
if (age >= 18) {
    alert('vous etes majeur');
    break;
}

// // boucle  while demander l'age de l'utilisateur tant que celui-ci
// // n'est pas majeur 

var age;
while (true) {
    age = prompt('quel age as-tu boucle for ?');
    if (age >= 18) {
        alert('vous etes majeur');
        break;
    }
}

// // boucle do while demander l'age de l'utilisateur tant que celui-ci
// // n'est pas majeur 

do {
    age = prompt( 'quel age as-tu boucle for ?');
    if (age >= 18) {
        alert('vous etes majeur');
        break;
    }
}


/////////////////////////////////////////////


var liste_fruits2 = [
    ['fraise', 'pomme', 'kiwi'],
    ['tomate', 'mangue'],
    ['pierre', 'jack', 'paul']
];

document.write((liste_fruits2[0][0])); //fraise
document.write((liste_fruits2[0][1])); //pomme
document.write((liste_fruits2[1][0])); //tomate
document.write((liste_fruits2[1][1])); //mangue

for (var i = 0; i < liste_fruits2.length; i++) {
    for (var j = 0; j < liste_fruits2[i].length; j++) {
        document.write(liste_fruits2[i][j] + "<br>");
    }
}



//déclarer une liste de prénom minimum 10 prénom
//premiere exercice afficher un message de bienvenu lorsque vous
//avez un "pierre" dans votre liste de contact
// deuxieme etap afficher le nombre de "pierre" dans votre tableau
/*
var liste_prenom = [['Charly', 'Niamatullah'], ['Zakarya', 'Mohammed'], ['jeremy', 'Ornella'],['Amin', 'Sara'], ['Mohammet', 'Rachid'],['Jordan', 'David']];

var liste_prenom = prompt('Bienvenu dans notre classe taper votre nom');
document.write(liste_prenom);

for(i = 0; i < liste_prenom; i++)
{

}
*/

// document.write((liste_prenom[0][0]))
// document.write((liste_prenom[0][0]))
// document.write((liste_prenom[0][0]))
// document.write((liste_prenom[0][0]))
// document.write((liste_prenom[0][0]))


/////////////////////////////////////////////////////////////////////////
var liste_contact = ["pierre", "paul", "rachid", "amine", "zakarya", "mohammet", "charly", "jeremy", "ornella", "sara", "jordan", "pierre", "pierre"];

var compteur = 0;
for (i = 0; i < liste_contact.length; i++) {
    if (liste_contact[i] == "pierre") {
        document.write("Bienvenu à toi : " + liste_contact[i] + "<br>");
        compteur++;
    }
}

document.write("j'ai" + compteur + " pierre dans mon tableau");






////////////////////////////////////////////////////////////////////////////:


(function(){//IIFE Immediatly invoked
    document.write('cette fonction est anonyme est automatiquement exc"cut"');
})();
var animal = "ours";
function test(){
    document.write(animal + "<br>");
}
test();
/*
function test2(){
    var animal2 = "loup";
    document.write(animal2 + '<br>');
}
*/
/*
test2();
document.write(animal2 + "<br>")*/
//document.write("<h2>Objet</h2>");
/*
var monObjet = {};//syntaxe objet
// syntaxe poibnt
monObjet.prenoms='yassine';
monObjet.nom = 'JAAGOUB';
document.whrite(monObjet.prenom + "<br>")
// pour affecter c'est :
var Homme = {
    nom: 'Winter',
    prenom: 'Thomas',
    age: 35
};
document.write(Homme.prenom);*/
var Voiture = {
    marque : 'mercedes',
    modele : 'classe A',
    couleur : 'noir',
    changeDeCoueleur : function(nouvelle){
        return this.couleur = nouvelle;
    },
    optionDeSerie : ['clim', 'autoradio', 'park-assist'],
    annee : 2020,
    motorisation : {
        energie : 'diesel',
        puissance : '250cv'
    }
}
document.write(Voiture.couleur + '<br>');//noir
Voiture.changeDeCoueleur("rose");
document.write(Voiture.couleur + '<br>')//rose
document.write(Voiture.optionDeSerie[0] + '<br>');//clim
document.write(Voiture.motorisation.energie + '<br>');//
// di je veut aller chercher tout mes element
for(var element in Voiture){//Foreach
    document.write(element + ":" + Voiture [element] + "<br>");
    if(typeof Voiture[element] === 'objet'){
        for(var elementB in Voiture.motorisation){
            document.write(elementB + ":" + Voiture.motorisation[elementB] + '<br>');
        }
    }
}
//this renvoie a un animal
function animal(nom, espece, categorie, age){
    this.nom = nom;
    this.espece = espece;
    this.categorie = categorie;
    this.age = age;
}
/*
var ours = new Animal('Grizzly', 'Dauphin', 'Mammifere', 3);
document.write(ours.nom);*/
function Contact(nom, prenom, adresse, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
    this.age = age;
}
var contact1 = new Contact("Venom", "Snake", "36 rue de la maladrerie", 29);
document.write(contact1.adresse);
//PROTOTYPAGE Ajouter une fonctioon a un objet
function Vehicul(marque){
    this.marque = marque;
}
var audi = new Vehicule('Renault');
audi.demarrer = function(){
    document.write('vroom vroom je démarres <br>')
}
audi.demarrer();

























// //////////////////////////////////////////////////////////////////////////////////////////////////////////:


// //COMMENTAIRE javascript concaténation syntaxe
// document.write("<h2>Commentaire, Affichage est concaténation </h2>");
// //tracution: j'ecris dans mon document html
// console.log('hello world');
// // serviras losqu'on doit debuger ou tester le contenue ou le typoe d'une variable 
// /*CONCATENATION*/
// document.write("Bonjours" + "tout le monde");
// //Language informatique 
// /************************************************VARIABLE CONSTANTE****************************************/
// document.write("<h2>Variable, constantes et type de donner </h2>");
// //Qu'est ce qu'une variable?
// //une variable est un espace nommée apeller memoire qui permet de concerver une valeurs 
// //commentIlS'appelle les syntaxe commence toujours avec une miniscule
// //oui : monAge, mon_age, age, age1
// //non : MONage, Monage, MONAge, 1age, mon-age, /age, mon.age
// var monTableau = [1, 2, 3];
// //on peut declarer plusieurs variavle en meme temps
// var nom = "CHAAIR", prenom = "Amine", age = 27;
// //Comment conderver une valeurs
// prenom = "yassine";
// document.write(prenom);//jack
// //prenoms += "jack"
// var fruits = "pomme";
// document.write(fruits);
// fruits += "fraise";
// document.write(fruits);//pommefraise
// /******************************CONSTANTE**********************************/
// document.write("<h2>Variable, constantes et type de donner </h2>");
// const MA_VARIABLE =20;
// const MAX = 199;
// document.write(MAX);
// //La convention de nomage
// console.log(typeof age);//typeof type de 
// console.log(typeof prenom);
// console.log(typeof monTableau);
// //                             OPERATEUR
// document.write("<h2>Opérateurs arithmetique</h2>");
// //ADDITION
// var resultat = 10 + 5;
// document.write(resultat);//15
// //SOUSTRACTION
// var resultat = 10 - 5;
// document.write(resultat);//5s
// //MULTIPLICATION
// var resultat = 10 * 5;
// document.write(resultat);//50
// //Division
// var resultat = 10 / 5;
// document.write(resultat);//2
// //var fruits += "fraise" concaatener et ajouter une valeurs sup a ma variable
// var a = 5;
// a += 9;
// //simplifier a = a +9;
// //5 = 5 + 9;
// document.write(a);//14
// //on peut la retrouver egalement 
// /*a *= 10;
// a -= 10;
// a /= 2;*/
// //ADDITION
// document.write("<h2>Opérateurs de comparaison</h2>");
// //> strict; superieur
// //< strictement inferieur
// //>= superiur ou egal
// //<= inferieur ou egale
// //= operateur d'afféctation 
// //== comparaison de VALEURS
// //=== comparaison la valeurs et le types
// //!= different de.
// document.write("<h2>Conditions</h2>");
// //Déclaration de 3 variable a, b et c, et dans un premier temps je vais demander si a est SUPERIEUR a b
// var a = 99, b = 43, c = 22;
// // IF = si
// if(a > b){
//     //Instruction!!
//     document.write("Oui a est superieur à b");
// }
// //verifier 2 condition
// // SI a est SUP à b ET si b est SUP a C
// //&& est
// if(a > b && b > c){
//     document.write("VRAIS");
// }
// /*
// if( a > b && b < c){
//     document.write("vrais");
// }
// Instruction pas bonne pour ca soit accepter et verfier faut que la comparaison soient bonne*/
// // || ou
// if(a > b || b < c){
//     document.write("VRAIS");
// }
// //else = SINON
// if(a > b && b < c){
//     document.write("VRAIS");
// }else{
//     document.write('FAUX');
// }
// //              COMPARAISON DE VALEURS
// if(a == b && b == c){
//     document.write("VRAIS");
// }else{
//     document.write('FAUX');
// }
// /*
// var maVariable = 1, maVariable2 = "1";
// if(maVariable == maVariable2){
//     document.write('VRAIS');
// }else{
//     document.write('FAUX');
// }
// if(maVariable === maVariable2){
//     document.write('VRAIS');
// }else{
//     document.write('FAUX');
// }
// // CONDITION TERNAIRE
// var voiture = "bmw";
// // ? represente le if
// // : represente else
// document.write((voiture == "bmw") ? 'oui' : 'non');
// //NaN = not a number 
// var nombre = "Amine";
// document.write("<br>");
// resultat = parseInt(nombre) + age;//si je mets pas cette methode ca me fais un concatenation pour rapelle njr tout le monde
// //moi je veut faire une addiction entre 2 chiffre sauf que nombres ce n'est pas un chifre mais que age c'eest un chiffre il vas pour forcer mon adiction  je fais ce qu'on appel a parsage je force le changement de typpes sur ma variable 
// document.write(resultat + "<br>");
// if(!isNaN(nombre)){//not a numbers si nombres n'est pas un nombres isNaN ou si nombre et un nombre !isNaN demande de verifier si c'est un nombres le ! est ce que c'est ca ou pas !
//     document.write('VRAIS');
// }else{
//     document.write('FAUX');
// }
// document.write("<h2>Pratique TP</h2>");
// /*
// var age = parseInt(prompt("Qu'elle age avez vous?"));
// console.log("Le type de age est:" + typeof age);
// if(!isNaN(age)){//not a numbers si nombres n'est pas un nombres isNaN ou si nombre et un nombre !isNaN demande de verifier si c'est un nombres le ! est ce que c'est ca ou pas !
//    if(age >= 18){//SI LE NOMBRE SAISI EST BIEN UN "NOMBRE"
//        document.write('Majeur')//VERIFIER SI L'uTILISATEUR EST MAJEUR OU MINEUR parsInt force a le transfomer en nombre
//    }
//    }else{
//     document.write('Vous etes mineur');
// }
// /*
// if(age > 18){
//     document.write("vous etes majeur")
// }else{
//     document.write("vous etes mineur")
// }*/
// // constante*/ 
// document.write("<br>");
// const MOTSDEPASSE = 124;
// document.write(MOTSDEPASSE);
// //DECALRER maVariable
// var voiture = "audi";
// console.log(typeof voiture);
// document.write("<br>");
// document.write((2 < 4) ? 'oui' : 'non');
// document.write("<br>");
// var number = 10;
// if(!isNaN(number)){//not a numbers si nombres n'est pas un nombres isNaN ou si nombre et un nombre !isNaN demande de verifier si c'est un nombres le ! est ce que c'est ca ou pas !
//     document.write('VRAIS');
// }else{
//     document.write('FAUX');
// }
// /*
// document.write("<br>");
// var prix = prompt("Entré votre prix avec les taxe");
// var resulta = prix * 1.196;
// document.write(resulta);
// //pourquoi prix tva/100
// /*
// var prix = 499.99;
// var tva = 19.6;
// var ttc = 0;
// tva = prix * tva/100;
// ttc = prix + tva;
// document.write(ttc);
// */
// document.write("<br>");
// //CONDITION
// var couleur = "jaune";
// //le swtch permet de tester une egalité
// switch(couleur){
//     case 'bleu':
//         document.write('vous aimez le bleu');
//         break
//     case 'rouge':
//         document.write('vous aimez le rouge');
//         break// le break il viens dire si la condition a ete verifier le break vas sortir du switch
//     case 'rose':
//         document.write('vous aimez le rose');
//         break
//     case 'bleu':
//         document.write('vous aimez le bleu');
//         break
//     case 'jaune':
//         document.write('vous aimez le jaune');
//         break
//     default:
//             document.write('vous aimez aucune couleur');
//             break;
// }
// var age =prompt("veuillez saisir un age");
// /*
// if(!isNaN(age)){//not a numbers si nombres n'est pas un nombres isNaN ou si nombre et un nombre !isNaN demande de verifier si c'est un nombres le ! est ce que c'est ca ou pas !
//    if(age >= 18){//SI LE NOMBRE SAISI EST BIEN UN "NOMBRE"
//        document.write('Majeur')//VERIFIER SI L'uTILISATEUR EST MAJEUR OU MINEUR parsInt force a le transfomer en nombre
//    }
//    }else{
//     document.write('Vous etes mineur');
// }*/
// document.write("<br>");
// var calcule = prompt("entré un chiffre pour le calcul:");
// var calcule2 = prompt("entré un chiffre pour le calcul:");
// var resultat = calcule + calcule2;
// document.write(resultat);
// document.write("<br>");
// var calcule = parseInt(prompt("entré un chiffre pour le calcul:"));
// var calcule2 = parseInt(prompt("entré un chiffre pour le calcul:"));
// var resultat = calcule * calcule2;
// if(!isNaN(resultat)){//not a numbers si nombres n'est pas un nombres isNaN ou si nombre et un nombre !isNaN demande de verifier si c'est un nombres le ! est ce que c'est ca ou pas !
//    //SI LE NOMBRE SAISI EST BIEN UN "NOMBRE"
//        document.write('resultat')//VERIFIER SI L'uTILISATEUR EST MAJEUR OU MINEUR parsInt force a le transfomer en nombre
// }
// document.write("<br>");