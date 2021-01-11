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

var b = toto();

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
    var prix = prix * 1.196;

    return Math.round(prix * 100) / 100;
}

document.write(prixTTC(399) + "<br>");
document.write(prixTTC(14.99) + "<br>");


//--------------------continue le cours function ---------------
var maFunction = function(){
    document.write('nous somme jeudi <br>')
}
maFunction();
// iife Immediatly Invokes Functions expressions
(function(){
    document.write('cette fonction est anonyme et automatiquement excuté <br>');
})();
var animal ="chien";
function test(){
    document.write(animal+ "<br>");
}
test();
function test2(){
    var animal2 = "chat";
    document.write(animal2 + "<br>");
}
test2();
document.write(animal2 +  "<br>");
document.write("<h2> Les Objets </h2>");
var monObjet ={};
monObjet.prenom = "Niamatullah";
monObjet.nom = "AHMADZAI";
document.write(monObjet.prenom + "<br>");// il va afficher Niamatullah

// pour affecter c'est :
var Homme = {
    nom: 'Winter',
    prenom: 'Thomas',
    age: 35
};
document.write(Homme.prenom);

// déclaration d'un objet
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
document.write(Voiture.couleur + '<br>');//rose
document.write(Voiture.optionDeSerie[0] + "<br>");// clime
document.write(Voiture.motorisation.energie + "<br>");//energi

// for each
for (var element in Voiture){
    document.write(element + ":" + Voiture[element] + "<br>");

    if(typeof Voiture[element] === "object"){
        for(var elementB in Voiture.motorisation){
            document.write(elementB + ":" + Voiture.motorisation[elementB] + "<br>");
        }
    }
}



/////////////////////////////////////////////////////////////

function animal(nom, espece, categorie, age){
    this.nom = nom;
    this.espece = espece;
    this.categorie = categorie;
    this.age = age;
}
var dauphin = new animal('flipper', 'dauphin', 'mamifere', 3);
document.write(dauphin.nom);//flipper
function Contact(nom, prenom, adress, age){
    this.nom = nom;
    this.prenom = prenom;
    this.adress = adress;
    this.age = age;
}
var Contact1 = new Contact('benchir','sara', '38 rue de la bruyere', 26);
document.write(Contact1.adress);
//Prototypage
function vehicule(marque){
    this.marque = marque;
}
var megane = new vehicule('Renault');
megane.demarrer = function(){
    document.write('vroom vroom je démarres <<br>')
}

audi.demarrer();


////////////////////////////////////////////////////////////////////:
// test

// Etap 1 : création d'un peronnage
//créé un objet Personnage avec les propriétés suivate : nom (string),
// sante (nombre) et force (nombre).

// Etap2 : créer une function (à l'interieure de mon objet) qui présent mon
// personnage ("je suis la/le valeureaux/valeureuse guerrier/gueriere du monde de
// narnia j'ai "x" de sante et ma force de combat est de "x" ")

// var peronnage = {
//     nom : "ahmadzai",
//     sante : 100,
//     force : 85

// };

// function peronnage ( nom, sante, force){
//     this.nom = nom;
//     this.sante = sante;
//     this.force = force;
// }

// var hero = new peronnage( )

// document.write("je suis la valeureaux guerrier " + peronnage.nom + 
// "du monde de narnia j'ai " + peronnage.sante + "de sante et ma force de combat est de " + peronnage.force);



//Etape 1 : création d'un personnage
//créé un objet Personnage avec les propriétés suivante : nom (string),
//sante (number) et force (number).
//Etape 2 : créer une fonction (à l'interieure de mon objet) qui présente mon
//personnage ("Je suis le/la valeureux/valeureuse guerrier/guerriere "nom" du monde de
//Narnia j'ai "x" de sante et ma force de combat est de "x"
//Etape 3 : créer une fonction "attaquer" qui permet d'attaquer une "cible"
//lorsque le personnage attaque la cible, celle-ci perd 10 points de sante.
function Personnage(pseudo, sante, force){
    this.pseudo = pseudo;
    this.sante = sante;
    this.force = force;
    this.decrire =  function (){
        document.write("je suis le valeureux guerrier " + this.pseudo +
            " du monde de Narnia j'ai " + this.sante +
            " de sante et ma force de combat est de " + this.force + "<br>");
    };
    this.attaquer = function (cible){
        cible.sante = cible.sante - 10;
        return cible.sante;
    };
}
var hero = new Personnage('Conan', 100, 85);
var mechant = new Personnage('Troll', 90, 20);
hero.decrire();
hero.attaquer(mechant);
mechant.decrire();
hero.attaquer(mechant);
hero.attaquer(mechant);
mechant.decrire();

///////////////////////////////////////////////////////////////////////::


//Etape 1 : création d'un personnage
//créé un objet Personnage avec les propriétés suivante : nom (string),
//sante (number) et force (number).
//Etape 2 : créer une fonction (à l'interieure de mon objet) qui présente mon
//personnage ("Je suis le/la valeureux/valeureuse guerrier/guerriere "nom" du monde de
//Narnia j'ai "x" de sante et ma force de combat est de "x"
//Etape 3 : créer une fonction "attaquer" qui permet d'attaquer une "cible"
//lorsque le personnage attaque la cible, celle-ci perd 10 points de sante.
//Etape 4 : Lorsque les points de vie arrivent à 0 afficher un message qui
//indique que le personnage ciblé est mort.
//Etape 5 : modifier la fonction d'attaque pour que les dégats soit proportionnel à
//la force d'attaque de l'attaquant.
function Personnage(pseudo, sante, force){
    this.pseudo = pseudo;
    this.sante = sante;
    this.force = force;
    //hero.decrire(hero.pseudo, hero.sante, hero.force);
    this.decrire =  function (pseudo, sante, force){
        document.write("je suis le valeureux guerrier " + pseudo +
            " du monde de Narnia j'ai " + sante +
            " de sante et ma force de combat est de " + force + "<br>");
    };
    this.attaquer = function (cible){
        if(cible.sante <= 0){
            document.write("La cible est morte <br>");
            cible.sante = 0;
        } else {
            cible.sante = cible.sante - 20;
        }
        return cible.sante;
    };
}
var hero = new Personnage('Conan', 100, 85);
var mechant = new Personnage('Troll', 30, 20);
hero.decrire(hero.pseudo, hero.sante, hero.force);
mechant.decrire(mechant.pseudo, mechant.sante, mechant.force);
hero.attaquer(mechant);
hero.attaquer(mechant);
hero.attaquer(mechant);
hero.attaquer(mechant);
mechant.decrire(mechant.pseudo, mechant.sante, mechant.force);
document.write("la sante de la cible est de : " + mechant.sante);



///////////////////////////////////////////////////////////////






//Etape 1 : création d'un personnage
//créé un objet Personnage avec les propriétés suivante : nom (string),
//sante (number) et force (number).
//Etape 2 : créer une fonction (à l'interieure de mon objet) qui présente mon
//personnage ("Je suis le/la valeureux/valeureuse guerrier/guerriere "nom" du monde de
//Narnia j'ai "x" de sante et ma force de combat est de "x"
//Etape 3 : créer une fonction "attaquer" qui permet d'attaquer une "cible"
//lorsque le personnage attaque la cible, celle-ci perd 10 points de sante.
//Etape 4 : Lorsque les points de vie arrivent à 0 afficher un message qui
//indique que le personnage ciblé est mort.
//Etape 5 : modifier la fonction d'attaque pour que les dégats soit proportionnel à
//la force d'attaque de l'attaquant.
//Etape 6 : ajouter un attribut experience, un hero commence avec une experience de jeu
//à 0, lorsqu'il tue un mechant il gagne 15 points d'experiences.
//Etape 7 : lorsque le héro obtient 100 points d'experiences il gagne un niveau supplémentaire
//Reflechissez bien à la manière dont vous allez procéder
//posez-vous les bonnes questions avant de coder.
function Personnage(pseudo, sante, force){
    this.pseudo = pseudo;
    this.sante = sante;
    this.force = force;
    this.experience = 85;
    this.level = 1;
    this.decrire =  function (){
        document.write("je suis le valeureux guerrier " + this.pseudo +
            " niveau " + this.level + " du monde de Narnia j'ai " + this.sante +
            " de sante et ma force de combat est de " + this.force + "<br>");
    };
    this.attaquer = function (cible){
        if(cible.sante <= 0){
            document.write(cible.pseudo  +" est mort <br>");
            this.experience += 15;
            cible.sante = 0;
        } else {
            document.write(this.pseudo + " attaque " + cible.pseudo + " et lui inflige " + this.force + " de dégâts <br>");
            cible.sante = cible.sante - this.force;
        }
        if(this.experience >= 100){
            this.level += 1;
            this.experience = 0;
            document.write("Super notre héro a pris un level supplémentaire il est maintenant niveau : " + this.level + " son experience revient à 0<br>");
        }
        return cible.sante;
    };
}
var hero = new Personnage('Conan', 100, 85);
var mechant = new Personnage('Troll', 30, 20);
hero.decrire();
document.write("au début de l'aventure le hero : " + hero.pseudo + " a " + hero.experience + "xp<br>");
mechant.decrire();
mechant.attaquer(hero);
hero.attaquer(mechant);
hero.attaquer(mechant);
mechant.decrire();
hero.decrire();











