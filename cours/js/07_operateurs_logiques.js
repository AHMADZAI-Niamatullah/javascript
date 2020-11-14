alert("yaya");

/*
  L'operateur ET : && ou and
  */

  //  L'operateur && ou AND permet du cumuler deux condition

  if ((prenomBDD === prenomPrompt) && (ageBDD === agePrompt)) {
      // code si les deux condition son validées
  }

  => si A est FAUX et B est VRAI => FAUX
  => si A est FAUX et B est FAUX => FAUX
  => si A est FAUX et B est FAUX => FAUX
  => si A est VRAI et B est VRAI => VRAI


 //L'operateur OU :  || ou OR ( | alt gr  + 6)


 // L'operateur || ou OR permet de rentrer dans la condition si au moins une des deusx  est vrai 
 

 => si A est FAUX et B est VRAI => VRAI
 => si A est VRAI et B est FAUX => VRAI  
 => si A est FAUX et B est FAUX => FAUX
 => si A est VRAI et B est VRAI => VRAI

 /*
 L'operateur contraire : !
 */

 var utilisateurlog = true;

 if (!utilisayeurlog) {
     // code si l'utilisateur n'est pas connecté
 }
 
 // ce qui revein à écrire :

 if(utilisateurLog == false){
    //code si l'utilisateur n'est pas connecté en genrale si il n'est pas connecté tu le renvoie en page d'acceuil ou de connextion
}