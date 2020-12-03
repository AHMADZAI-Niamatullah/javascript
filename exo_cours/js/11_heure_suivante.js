// var heure = window.prompt("Entrez votre heure");
// var minute = window.prompt("Et maintenant les minutes");
// var seconde = window.prompt("Les secondes...");


// if(heure === 24)

// if(heure > 24 && minute > 59 && seconde > 59) {
//     Document.write("Erreur de saisi");
// } 


//  CORRECTION 

var heure = window.prompt("Entrez une heure");
var minute = window.prompt("Entrez une minute");
var seconde = window.prompt("Entrez une seconde");

if((heure >= 0) && (minute <= 23) && (minute >= 0) && (minute <= 59) && (seconde >= 0) && (seconde <= 59)) {
    seconde++
    if(seconde === 60) {
        seconde = 0;
        minute++;
        if(minute === 60) {
            minute = 0;
            heure++;
            if(heure === 24) {
                heure = 0;
            }
        }
    }
    document.write("<p> Dans une seconde il sera " + heure + " h " + minute + " min" + seconde + " seconde </p>");
} else {
    document.write("Heure incorrecte")
}


