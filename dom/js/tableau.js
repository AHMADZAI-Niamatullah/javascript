// document.write("<h2> Tableau multi-dimensionnel </h2>");

// var liste_fruits2 = [['fraise', 'pomme', 'kiwi'] , ['tomate', 'mangue'] , ['pierre', 'paul', 'jack']];

// document.write((liste_fruits2[0][0]));//fraise
// document.write((liste_fruits2[0][1]));//pomme
// document.write((liste_fruits2[1][0]));//tomate
// document.write((liste_fruits2[1][1]));//mangue

// for(var i = 0;  i < liste_fruits2.length;  i++){
//     for(var j = 0;  j < liste_fruits2[i].length; j++)
//     {
//         document.write(liste_fruits2[i][j] + "<br>");
//     }
// }



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
// var liste_contact = [ "pierre", "paul", "rachid", "amine", "zakarya", "mohammet", "charly", "jeremy", "ornella", "sara", "jordan",  "pierre", "pierre"];

// var compteur = 0;
// for(i = 0;  i < liste_contact.length ; i++)
// {
//     if(liste_contact[i] == "pierre"){
//         document.write("Bienvenu à toi : " + liste_contact[i] + "<br>");
//         compteur++;
//     }
// }

// document.write("j'ai" + ' ' + compteur + " pierre dans mon tableau");


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
    age = prompt(message: 'quel age as-tu boucle for ?');
    if (age >= 18) {
        alert('vous etes majeur');
        break;
    }
}

// // boucle do while demander l'age de l'utilisateur tant que celui-ci
// // n'est pas majeur 

do {
    age = prompt(message: 'quel age as-tu boucle for ?');
    if (age >= 18) {
        alert('vous etes majeur');
        break;
    }
}

/////////////////////////////////////////////

document.write("<h2> Tableau multi-dimensionnel </h2>");

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