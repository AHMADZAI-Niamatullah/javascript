//alert("hi");

/* les
boucles
*/

// la boucle for
/*
for ( 3 arguments){
    code
}
*/

/*

1. initialisation du compter , à partir de combien je compte  (par défaut on utilise i pour stoquer la valeur)
2. la condition à vérifier (elle doit être vrai / true)
3. le "pas" d'incrémentation ( combien on ajoute chaque tour, générelment 1 donc 1++)

*/

for ( i = 1; i <= 10; i++){
    document.write("<p> Instruction exécutée : " + i + "</p>")
}

// La boucle WHILE
// trés utilisée quand on ne connaît pas le numbre de tours à l'avance

var j = 1
while(j <= 10){
    document.write("<hr /> <p> Instruction exécutée : " + j + "</p>");
    j++; // incrémentation tout à la fin de la boucle 
}

/*
    |   EXERCICE
    j'ai 1000£ sur mon compte chaque mois j'ajoute 50£
    combien de temps pour avoire 2000£
*/

/*var j = 1000;
var t = 0;
while ( j <= 1000/50 ){
    document.write("<p> il faut aura + t + "  )
}
*/


/*var j = 1000;
while (j <= 2000){
    document.write("<i> <p> instruction exécutée : " + j + "</p> </i>");
    j+=50;// incrémentation tout à la fin de la boucle
}
*/


var monCompte = 1000;
var temps = 0; 
while(monCompte < 2000){
    monCompte += 50;
    temps ++;
}

document.write("<p> sur mon compte" + monCompte + ".</p>");
document.write("<p> Il faut " + temps + "mois pour avoir 2000£ sur mon compte. </p>");

//FOR
var tps = 0;
for(var mesSous = 1000; mesSous < 2000 ; mesSous += 50){
    document.write( " le mois suivant j'aurais : " + mesSous + " £.</p>");
    tps++;

}

document.write("<p> il aura fallu " + tps + " mois pour avoir 2000£ sur mon compte.</p>")


/*var nb1 , nb2 resultat;

nb1 = 2000;
nb2 = 50;

nb1 / nb2 ;

console.log (resultat)
*/