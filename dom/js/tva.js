alert('hello world');

// calculer le prix TTc de ma PS5 à 499.99 et afficher le resultat (la TVA est à 19.6%) (le prix est 567.98 TTC)
var prix = 499.99;
tva = 19.6;
ttc = prix * tva / 100;
ttc = prix + tva;
document.write("Le prix ttc de " + prix + " est de : " + ttc);