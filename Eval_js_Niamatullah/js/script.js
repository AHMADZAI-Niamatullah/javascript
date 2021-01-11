//alert('hi');

/*parti input lien entre haut et bas de page  */

window.onload = function() {

    const inf1Input = document.getElementById("info1");
    const inf3Input = document.getElementById("info3");
    const inf4Input = document.getElementById("info4");
    const nomInput = document.getElementById("nom");
    const numeroInput = document.getElementById("numero");
    const mailInput = document.getElementById("mail");
    
    inf1Input.addEventListener('input', function() {
        nomInput.value = inf1Input.value;
    });
    
    inf3Input.addEventListener('input', function() {
        numeroInput.value = inf3Input.value;
    });
    
    inf4Input.addEventListener('input', function() {
        mailInput.value = inf4Input.value;
    });
    
    }



/* parti central données clientelles  gauche*/
    function handleClients(){
        const value = document.getElementById('recherche').value;

        // if(value === 'client'){
        //     document.getElementById('text0').setAttribute('value', '1');
        //     document.getElementById('nom0').setAttribute('value', 'test value');
        //     document.getElementById('rue0').setAttribute('value', 'test value');
        //     document.getElementById('code0').setAttribute('value', 'test value');
        //     document.getElementById('numero0').setAttribute('value', 'test value');         
        // }
        if(value === 'netscape'){
            document.getElementById('text0').setAttribute('value', 'micromania');
            document.getElementById('nom0').setAttribute('value', 'Niamat');
            document.getElementById('rue0').setAttribute('value', '955 Route des Lucioles,');
            document.getElementById('code0').setAttribute('value', '06560 Valbonne, France');
            document.getElementById('numero0').setAttribute('value', ' 04.92.94.36.00');
        }
        if(value === 'production'){
            document.getElementById('text0').setAttribute('value', 'bouyguestelecom');
            document.getElementById('nom0').setAttribute('value', 'zak');
            document.getElementById('rue0').setAttribute('value', '37-39 rue Boissière,');
            document.getElementById('code0').setAttribute('value', '75016 Paris, France');
            document.getElementById('numero0').setAttribute('value', 'Téléphone : 1064');
        }
        if(value === 'unity'){
            document.getElementById('text0').setAttribute('value', 'nike France');
            document.getElementById('nom0').setAttribute('value', 'william');
            document.getElementById('rue0').setAttribute('value', "12 rue de l'Équerre,");
            document.getElementById('code0').setAttribute('value', "95310 Saint-Ouen-l'Aumône, France");
            document.getElementById('numero0').setAttribute('value', '01.23.56.45.36');
        }
        if(value === 'godus'){
            document.getElementById('text0').setAttribute('value', 'airbnb');
            document.getElementById('nom0').setAttribute('value', "mathieu");
            document.getElementById('rue0').setAttribute('value', "4 Place de l'opéra,");
            document.getElementById('code0').setAttribute('value', '75002 Paris, France');
            document.getElementById('numero0').setAttribute('value', '01.84.88.40.00');
        }
    }





/* parti central données clientelles droite */
    function sendClients(){
        const value = document.getElementById('search').value;

        // if(value === 'nouveau1'){
        //     document.getElementById('text1').setAttribute('value', '1');
        //     document.getElementById('nom1').setAttribute('value', 'test value');
        //     document.getElementById('rue1').setAttribute('value', 'test value');
        //     document.getElementById('code1').setAttribute('value', 'test value');
        //     document.getElementById('numero1').setAttribute('value', 'test value');         
        // }
        if(value === 'cabinet'){
            document.getElementById('text1').setAttribute('value', 'mma');
            document.getElementById('nom1').setAttribute('value', 'sacha');
            document.getElementById('rue1').setAttribute('value', '14 boulevard Marie et Alexandre Oyon');
            document.getElementById('code1').setAttribute('value', '72030 Le Mans, France');
            document.getElementById('numero1').setAttribute('value', '06 43 41 72 72');         
        }
        if(value === 'corporation'){
            document.getElementById('text1').setAttribute('value', 'alstom');
            document.getElementById('nom1').setAttribute('value', 'pierre');
            document.getElementById('rue1').setAttribute('value', '48 rue Albert Dhalenne, ');
            document.getElementById('code1').setAttribute('value', '93400 Saint-Ouen, France');
            document.getElementById('numero1').setAttribute('value', '07 57 06 80 00');         
        }
        if(value === 'familly'){
            document.getElementById('text1').setAttribute('value', ' tf1');
            document.getElementById('nom1').setAttribute('value', ' valerie');
            document.getElementById('rue1').setAttribute('value', '1 quai Point du Jour, ');
            document.getElementById('code1').setAttribute('value', '92100 Boulogne, France');
            document.getElementById('numero1').setAttribute('value', 'Téléphone : 01 41 41 12 34');         
        }
        if(value === 'main'){
            document.getElementById('text1').setAttribute('value', 'total');
            document.getElementById('nom1').setAttribute('value', 'benoit');
            document.getElementById('rue1').setAttribute('value', '2 place Jean Millier');
            document.getElementById('code1').setAttribute('value', '92078 Paris La Défense, France');
            document.getElementById('numero1').setAttribute('value', '06 47 44 60 00');         
        }
    }




/*Partie commande  premier colonne */
    function handleSearch1(){
        const searchVal1 = document.getElementById('searchSelect1').value;

        if(searchVal1 === 'codeProduit1'){
            document.getElementById("row1_label").innerHTML = "IdeapadFLEX 5 14IIL";
            document.getElementById("row1_price").innerHTML = "599.00";
        }
        if(searchVal1 === 'codeProduit2'){
            document.getElementById("row1_label").innerHTML = "1T0K6EA";
            document.getElementById("row1_price").innerHTML = "699.00";
        }
        if(searchVal1 === 'codeProduit3'){
            document.getElementById("row1_label").innerHTML = "10SER-417FR";
            document.getElementById("row1_price").innerHTML = "1399.00";
        }
        if(searchVal1 === 'codeProduit4'){
            document.getElementById("row1_label").innerHTML = "45TY241";
            document.getElementById("row1_price").innerHTML = "400.00";
        }
        if(searchVal1 === 'codeProduit5'){
            document.getElementById("row1_label").innerHTML = "45PT123";
            document.getElementById("row1_price").innerHTML = "799.00";
        }
    
        
    }

 function handleQuantity1(event){
        const quantity1 = event.target.value;
        const price = document.getElementById("row1_price").innerHTML;

        const total = price * quantity1;

        document.getElementById("row1_total").innerHTML = total;
        
    }






/*Partie commande  2éme colonne */
    function handleSearch2(){
        const searchVal2 = document.getElementById('searchSelect2').value;

        if(searchVal2 === 'codeProduit6'){
            document.getElementById("row2_label").innerHTML = "ERT120P";
            document.getElementById("row2_price").innerHTML = "110.00";
        }
        if(searchVal2 === 'codeProduit7'){
            document.getElementById("row2_label").innerHTML = "TY415MKJ";
            document.getElementById("row2_price").innerHTML = "700.00";
        }
        if(searchVal2 === 'codeProduit8'){
            document.getElementById("row2_label").innerHTML = "RED416DF0";
            document.getElementById("row2_price").innerHTML = "399.99";
        }
        if(searchVal2 === 'codeProduit9'){
            document.getElementById("row2_label").innerHTML = "ESDR0125";
            document.getElementById("row2_price").innerHTML = "899.99";
        }
        if(searchVal2 === 'codeProduit10'){
            document.getElementById("row2_label").innerHTML = "DFR102KJU";
            document.getElementById("row2_price").innerHTML = "199.99";
        }
    
        
    }

function handleQuantity2(event){
        const quantity2 = event.target.value;
        const price = document.getElementById("row2_price").innerHTML;

        const total = price * quantity2;

        document.getElementById("row2_total").innerHTML = total;
        
    }




/*Partie commande  3éme colonne */
    function handleSearch3(){
        const searchVal3 = document.getElementById('searchSelect3').value;

        if(searchVal3 === 'codeProduit11'){
            document.getElementById("row3_label").innerHTML = "1RTY012";
            document.getElementById("row3_price").innerHTML = "199.00";
        }
        if(searchVal3 === 'codeProduit12'){
            document.getElementById("row3_label").innerHTML = "T12401";
            document.getElementById("row3_price").innerHTML = "399.00";
        }
        if(searchVal3 === 'codeProduit13'){
            document.getElementById("row3_label").innerHTML = "12TY100";
            document.getElementById("row3_price").innerHTML = "999.99";
        }
        if(searchVal3 === 'codeProduit14'){
            document.getElementById("row3_label").innerHTML = "105DE10";
            document.getElementById("row3_price").innerHTML = "400.00";
        }
        if(searchVal3 === 'codeProduit15²'){
            document.getElementById("row3_label").innerHTML = "105SRE01";
            document.getElementById("row3_price").innerHTML = "799.99";
        }
    
        
    }

function handleQuantity3(event){
        const quantity3 = event.target.value;
        const price = document.getElementById("row3_price").innerHTML;

        const total = price * quantity3;

        document.getElementById("row3_total").innerHTML = total;
        
    }



/*Partie commande  4éme colonne */   
    function handleSearch4(){
        const searchVal4 = document.getElementById('searchSelect4').value;

        if(searchVal4 === 'codeProduit16'){
            document.getElementById("row4_label").innerHTML = "RT1025584Y";
            document.getElementById("row4_price").innerHTML = "199.99";
        }
        if(searchVal4 === 'codeProduit17'){
            document.getElementById("row4_label").innerHTML = "45HUY1202";
            document.getElementById("row4_price").innerHTML = "200.00";
        }
        if(searchVal4 === 'codeProduit18'){
            document.getElementById("row4_label").innerHTML = "ER45LMLKI0";
            document.getElementById("row4_price").innerHTML = "399.99";
        }
        if(searchVal4 === 'codeProduit19'){
            document.getElementById("row4_label").innerHTML = "GT103LKJU";
            document.getElementById("row4_price").innerHTML = "550.00";
        }
        if(searchVal4 === 'codeProduit20'){
            document.getElementById("row4_label").innerHTML = "REM14562";
            document.getElementById("row4_price").innerHTML = "1000.00";
        }
    
        
    }


function handleQuantity4(event){
        const quantity4 = event.target.value;
        const price = document.getElementById("row4_price").innerHTML;

        const total = price * quantity4;

        document.getElementById("row4_total").innerHTML = total;
        
    }
    

