
var moyenne = parseFloat(prompt("Quelle à été ta moyenne au bac"));


if(moyenne<10){
    document.write("Reclé" );
   
}else if ((moyenne >= 10) && (moyenne < 12)){
    document.write("Tu passes");
}else if ((moyenne >=12  ) && (moyenne <= 12 )){
    document.write("Bravo pour la mention ! ");
}else{
    document.write("Et de 0 à 20 ça donne ...")
}