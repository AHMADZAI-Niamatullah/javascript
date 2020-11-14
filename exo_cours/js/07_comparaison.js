
//alert("hello");

var numero1 = window.prompt("Veuillez rentrer un nombre");
var numero2 = window.prompt("Veuillez saisir un deuxième nombre");
if(numero1 == numero2){
    document.write("Les nombres " + numero1 + " et " + numero2 + " sont bel et bien égaux");
} else if(numero1 > numero2){
    document.write("Le nombre " + numero1 + " " + "est supérieur au " + numero2 + ".");
} else {
    document.write("<hr>Le nombre  " + numero2 + "est inférieur au " + numero1 + "</hr>.");
}

//console.log("numbre 1 et plus grand que numbre 2");

/*var nb1 = prompt("Entrer le premier variable :");
var nb2 = prompt("Entrer le deuxieme variable :");
if (nb1===nb2) {
    document.write("<p> le premier variable " + nb1 + " est egal la deuxieme variable " + nb2 + "</p>");
}
else if (nb1 < nb2) {
    document.write("<p> le premier variable " + nb1 + " est plus petite que la deuxieme variable " + nb2 + "</p>");
}
else if (nb1 > nb2){
    document.write("<p> le premier variable " + nb1 + " est plus grand que la deuxieme variable " + nb2 + "</p>");
}
*/


var nb1 = parseInt(prompt("Entrez un premier nombre afin de le comparer à un deuxième."));
var nb2 = parseInt(prompt("Entrez un deuxième nombre."));
if ( (!isNaN(nb1)) && (!isNaN(nb2)) ){
    if (nb1<nb2){
        document.write("Votre 1er nombre : " + nb1 + " est plus petit que votre 2nd : " + nb2);
    }else if (nb1>nb2){
        document.write("Votre 1er nombre : " + nb1 + " est plus grand que votre 2nd : " + nb2);
    }else{
        document.write("Votre 1er nombre : " + nb1 + " est égal à votre 2nd : " + nb2);
    }
} else {
    alert('Vous n\'avez pas saisi de chiffre(s)');
}
// isNaN  is not a number  -> n'est pas un nombre 
// !isNaN is a number -> c'est un nombre
// \ anti-slash  -> caractère d'échappement pour éviter que mon apostrophe soit prit en compte
  

  
