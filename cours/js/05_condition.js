//alert("hello world !")

// strcuture de base IF

if (true){
    //si(La condition à virifier)

    // code
}

var nb1 = 10;
if (nb1 < 50 ){
    console.log("nb1 est inférieur à 50");
}

if (true){
    // code pour ture
}
else{
    // code pour faux
}

if( nb1 >=50){
    console.log("nb1 est suprérieur ou égal  à 50.")

} else{
    console.log("nb1 est inférieur à 50.");
}

// excercice on vérifie l'age d'un internaut,
// si il est majeur je luis souhaite la bienvenue,
// sinon : je lui signal (1) et je le renvoi sur un autre site (2)     ->document.location

var majorite = 18;
var age = parseInt(prompt("Indiquez votre age"));// force le type de variable à être un entier
if (age >= majorite){
    alert("Bienvenu gros !");
}else{
    alert("Allez voir un autre site ...");
    document.location = "https://www.darty.com"; // .href n'est pas obligatoire
}