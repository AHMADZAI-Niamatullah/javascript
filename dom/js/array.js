document.write("<h2> Array </h2>");

var liste_fruits = ['banane', 'orange', 'framboise', 'poire', 'kiwi'];
//liste_fruits =  "banane" + "orange" + "framboise";

document.write(liste_fruits.join('-') + "<br>");


/*document.write(liste_fruits[0]);
document.write(liste_fruits[1]);
document.write(liste_fruits[2]);
*/

for (var i = 0; i < 5; i++) {

    document.write(liste_fruits[i] + "<br>");
}


for (var i = 0; i < liste_fruits.length; i++) {

    document.write(liste_fruits[i] + "<br>");
}


document.write(i);

var k = 0;

document.write("Boucle while <br>");

while (k < liste_fruits.length) {

    document.write(liste_fruits[k] + "<br>");
    k++;
}