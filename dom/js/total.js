// ******************** TABLEAUX *********************
document.write("<h2> Array / Tableaux </h2>");
var liste_fruits = ["banane", "orange", "framboise", "fraise", "kiwi"];
document.write(liste_fruits.join("-") + "<br>") // join = Afficher tout le tableau
document.write(liste_fruits[0]);
for (var i = 0; i < liste_fruits.length; i++) {
    document.write(liste_fruits[i] + "<br>");
}
document.write("<br>");
var k = 0
while (k < liste_fruits.length) {
    document.write(liste_fruits[k] + "<br>")
    k++
}
document.write("<br>");
var m = 0;
while (m < 10) {
    document.write("Je suis le tour : " + m + "<br>")
    m++;
}
document.write("<br>");
var prenom = ["Amine", "Rachid", "Jordan", "Niamatullah"];
for (i = 0; i < prenom.length; i++) {
    document.write(prenom[i] + "<br>");
}
document.write("<br>");
var j = 0;
while (j < prenom.length) {
    document.write(prenom[j] + "<br>");
    j++;
}
document.write("<br>");
// Boucle for demander l'âge de l'utilisateur tant que celui-ci
// n'est pas majeur
// var age = parseInt(prompt("Quel âge avez vous ?"));
// while (age >= 18) {
//     document.write("Vous êtes majeu");
//     if(age < 18) {
//         document.write("Vous êtes mineur");
//         parseInt(prenom("Veuillez saisir un âge"))
//     }
// }
// Boucle while demander l'âge de l'utilisateur tant que celui ci 
// n'est pas majeur
document.write("<br>");
document.write("<h2> Tableau multi-dimensionnel </h2>");
var list_fruits2 = [
    ["fraise", "pomme", "kiwi"],
    ["tomate", "mangue", "cerise"]
];
document.write(list_fruits2[0][0] + "<br>"); // 1er [0] = 1er tableau
document.write(list_fruits2[0][1] + "<br>"); // pomme
document.write(list_fruits2[1][0] + "<br>"); // tomate
document.write("<br>");
for (var i = 0; i < list_fruits2.length; i++) {
    for (var j = 0; j < list_fruits2[i].length; j++) {
        document.write(list_fruits2[i][j] + "<br>");
    }
}
document.write("<br>");
// Déclarer une liste de prénom minimum 10 prénoms
// premier exercice : Afficher un message de bienvenu lorsque vous 
// avez un "pierre" dans votre liste de contact
var liste_contact = ["pierre", "pierre", "paul", "jack", "mohamed", "arthur", "rachid", "aurelie", "reda", "ayoub", "jordan"];
var compteur = 0;
for (i = 0; i < liste_contact.length; i++) {
    if (liste_contact[i] == "pierre") {
        document.write("bienvenue a toi : " + liste_contact[i] + "<br>");
        compteur++;
    }
}
document.write("j'ai " + compteur + "pierre dans mon tableau");