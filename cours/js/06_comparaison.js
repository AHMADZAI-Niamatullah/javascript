//alert("hello world")

var nb1 = 123;// var de type numbre et plus précisement integer (Int)
var nb2 = "123";// var de type chaine  de caractère (string ou str)

console.log( nb1 == nb2 ) //retourne un boolean (true)
// == signifie "égal à :"

console.log( nb1 === nb2 ) //retourne un boolean (false)
 // === signifie "égal  en type et  en valeur"

 console.log( nb1 != nb2 ) //retourne  false

 console.log( nb1 !== nb2 ) //retourne true
 // !== signifie "strictement différent en valeur et en type"

 //Excercice

 // EXERCICE
var prenomBDD, ageBDD;
prenomBDD = "Niamatullah";
ageBDD = 110;
var prenonPrompt = prompt("Quel est votre prénom ?");
if(prenomBDD === prenonPrompt){
    var agePrompt = parseInt(prompt("Votre age ?"));
    if(ageBDD === agePrompt){
        alert("Bienvenue " + prenomBDD);
    }else{
        alert("erreur d'age !");
    }
}else{
    alert("Attention, prénom non preconnu !");
}






