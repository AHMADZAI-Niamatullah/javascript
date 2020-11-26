alert('hello world !')

/*var li = 14h17m59s
var li = 6h59m59s
var li = 23h59m59s



if ( li = 14h18m0s ){
    document.write("14h18m0s :" + "li")

}if else( li = 6h59m59s){
    document.write("7h0m0s")
} if else (li = 0h0m0s) {
    document.write{"il est :" + "li"}
}



{
    let mydate = new Date();
    console.log(mydate);
    document.write(mydate);

}
*/

var heure = prompt("entre une heure")
var minutes = prompt("entre les minutes")
var secondes = prompt("entre des secondes")

if ( ( heure >= 0) && (heure <= 23) && (minutes >= 0) && (minutes <= 59) && (secondes >= 0) && (secondes <= 59)){
    secondes++
    if(secondes === 60){
        secondes = 0;
        minutes++;
        if(minutes === 60){
            minutes = 0;
            heure++;
            if(heure === 24){
                heure =0;
            }
        }
    }

    document.write("<p>Dans une seconde il ser :" + heure + "h" + minutes + "min" + secondes + "sec. </p>");

}else{
    document.write("Heure incotrrecte !");
}












/*


 


  
var heure = prompt(" Veuillez entrer le nombre d'une heure :");
var minute = prompt("Veuillez entrer le nombre d'une minute:");
var seconde = prompt("Veuillez entrer le nombre d'une seconde :");
var time = new Date();
 time.setHours(heure);
 time.setMinutes(minute);
 time.setSeconds(seconde);
 time.setSeconds( time.getSeconds() +1 );
 document.write( time.getHours() +" h " +time.getMinutes() +" min " +time.getSeconds() +" s ");
 */