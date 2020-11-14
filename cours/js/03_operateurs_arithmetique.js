//alert("test");

/* 1. Addition
    (je peut déclarer plusieurs variables à la suite)
    */
    /* je délares mes variables */
    var nb1, nb2, resultat;

    /* j'affiche des valeurs */
    nb1 = 10;
    nb2 = 5;

    /* j'utilise mes variables avec un calcul */
     resultat = nb1 + nb2;

     /* j'affiche mon resultat dasn la console */

     console.log(resultat);

     /*
        2. soustraction
    */

    resultat = nb1 - nb2;
     console.log(resultat);

     /*
       3. Multiplication
       */
      resultat = nb1 * nb2;
      console.log(resultat);


       /*
       4. Division
       */
      resultat = nb1 / nb2;
      console.log(resultat);

       /*
       5. Mudelo %
            le mudelo retourne le reste d'une division
       */
      resultat = nb1 % nb2;
      console.log(resultat);

      // je ré-afficte une valeur à nb1

        nb1 = 11;
        resultat = nb1 % nb2;
        console.log( "le reste de la division de " + nb1 + " par " + nb2 +" est égal à :" + resultat);

        /*
            6. Ecritures simplifiées
        */

        nb1 = 15;
        nb1 = nb1 + 5; //égal à 20
        nb1 += 10; // = nb1 = nb1 + 10;
        console.log ('le resultat de "nb1 += 10;" est ' + nb1); // égal à 30, alternace de guillemet simples et doubles pour ne casser ma chaime de caractéres

        //  si j'utilise un ' (apostraphe) dans une phrase concaténée, je peux écharper le caractére à l'aide d'un anti-slash \ (altg+8)
         


