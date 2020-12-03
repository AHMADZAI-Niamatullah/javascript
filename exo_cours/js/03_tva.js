// var euro = prompt("entrez le prix HT :");
// var hors_taxe = Number(euro);
// var tva = hors_taxe * 1.2;
// document.write("Le prix TTC est de " + tva + "euro");

var horsTaxe = prompt("Entrez un prix hors taxes : ");

ttc = horsTaxe * 1.2;

document.write("<h2>Le Prix TTC de " + horsTaxe + " est de " + ttc + "<h2>");