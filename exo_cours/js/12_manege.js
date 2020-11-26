//alert('yaya');

/*var tour = 10;

var tour = window.prompt("Veuillez choisir un tour  (C'est le tour de manège n°1, C'est le tour de manège n°2 etc...");

if(tour  >= 11){
    document.write("Il n'y a pas plus de 11 tours !");

}else if(tour  == 1){
    document.write("C'est le tour de manège n°1");

}else if(tour  == 2){
    document.write("C'est le tour de manège n°2");

}else if(tour == 3){
    document.write("C'est le tour de manège n°3");

}else if(tour  == 4){
    document.write("C'est le tour de manège n°4");

}else if(tour  == 5){
    document.write("C'est le tour de manège n°5");

}else if(tour  == 6){
    document.write("C'est le tour de manège n°6");

}else if(tour  == 7){
    document.write("C'est le tour de manège n°7");

}else if(tour  == 8){
    document.write("C'est le tour de manège n°8");

}else if(tour  == 9){
    document.write("C'est le tour de manège n°9");

}else if(tour  == 10){
    document.write("C'est le tour de manège n°10");

}else {
    document.write("Erreur de saisi, recommencez");
}   


for ( tour = 1; tour <= 1; tour++){
    document.write("<p> Tournez manège : " + tour + "</p>")
}

var ménage = 1
while(ménage <= 10){
    document.write(" <p> C'est le tour de manège n° " + ménage + "</p>");
    ménage++; 
}

*/

var manege = 0;
while(manege <= 10){
    document.write("C'est le tour n°" + manege + "<br />");
    manege++;
}

// FOR
 
for( var i = 1;  i <= 10; i++){
    document.write(" C'est le tour n°" + i + "<br />");
}

document.write("<hr />");


//PROMPT WHILE

var questioin = parseInt(prompt("Combien de tours voulez-vous faire ?"));
var compteur = 1;
while (compteur <= questioin){
    document.write("C'est le tour n°" + compteur + "<br />");
    compteur++;
}

document.write("<hr />");


//PROMPT FOR

var nbTours = parseInt(prompt("Combien de tours à faire ?"));
var compteur = 1;
for (var tour =1; tour <= nbTours; tour++){
    document.write("C'est le tour n°" + tour + "<br />");
}