//alert('test');


/*var nb = prompt("saisir un nombre");

if(nb % 2 == 0){
    document.write("Ce nombre est pair");

}else{
    document.write("Ce nombre est impair");
}
*/


/*
for (var nb = 1;  nb <= 10; nb++){
    if( nb % 2 === 0){
        document.write("nb" + '' + "est pair");
    
    }else if( nb % 3 === 0){
        document.write( "nb" + '' + "est impair")
    
    }else{
        document.write("erreur");
    }
}
*/



/*for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
    console.log(i + " est pair");

}else{
    document.write("<h3>" + i + "est impair </h3>");
}

}
*/

/*var chiffre = parseInt(prompt("choisir un nombre entier"));
var chiffreMax = (chiffre + 10);
while (chiffre <= chiffreMax){
    if (chiffre % 2 === 0){
        document.write("<h3>" + chiffre + "est pair </h3>");
    
    }else{
        document.write("<h3>" + chiffre + "est impair </h3>");
    }
    chiffre++;
}
*/

var nbUser = parseInt(prompt("Ton chiffre ?"));
var nbUserMax = (nbUser + 5);
for (var tour = nbUser; tour <= nbUserMax; tour++){

    if (tour % 2 === 0){
        document.write("<h3>" + tour + "est pair </h3>");
    
    }else{
        document.write("<h3>" + tour + "est impair </h3>");
    }
}
    
