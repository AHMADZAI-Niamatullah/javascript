var manege = 0;

while(manege <= 10) {
    document.write("C'est le tour n°" + manege + "<br />");
    manege++;
}

document.write("<hr>");



// FOR

for(var i = 1; i <= 10; i++) {
    document.write("C'est le tour n°" + manege + "<br />");
}



document.write("<hr>");



// Prompt WHILE 

var question = parseInt(prompt("Combien de tour voulez-vous faire ?"));
var compteur = 1;

while(compteur <= question) {
    document.write("C'est le tour n°" + compteur + "<br />");
    compteur++;
}


document.write("<hr>");


// PROMPT FOR 

var nbTours = parseInt(prompt("Combien de tour à faire ?"));

for(var tour = 1; tour <= nbTours; tour++) {
    document.write("C'est le tour n°" + tour + "<br />");
}


