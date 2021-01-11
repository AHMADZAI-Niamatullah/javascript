

/*
document.getElementById('div1').onclick = div1; ===> evenment sur l'objet, la fuction déclarée plus loin.

document.getElementById('div1').onblur = function() {monScript}

document.getElementById('div1').addEventLisner("blur", functionName);

document.getElementById('div1').addEventLisner("click", function() {monScript});

*/
//lert('hello');

// document.getElementById('div1').addEventListener("click", div1);
// document.getElementById('div5').addEventListener("dblclick", div5);
// document.getElementById('div10').addEventListener("mouseover", div10);
// document.getElementById('div11').addEventListener("mouseout", div11);
// document.getElementById('div15').addEventListener("mousedown", div15);
// document.getElementById('div15').addEventListener("mouseup", div15bis);

// function div1 (){alert('div1 - click div1');}
// function div5 (){alert('div5 - dblclick div5');}
// function div10 (){alert('div10 - mouseover div10');}
// function div11 (){alert('div11 - mouseout div11');}
// function div15 (){alert('div15 - mousedown div15');}
// function div15 (){alert('div15 - mouseup div15');}


// document.getElementById('div2').addEventListener("blur", div2);
// document.getElementById('div3').addEventListener("focus", div3);

// function div15 (){alert('div2 - blur div2');}
// function div3 (){alert('div3 - blur div3');}


// document.getElementById('div14').addEventListener("submit",  function(event){
//     event.preventDefault();
//     alert('div - submit');
// })


// document.getElementById('div7').addEventListener("keydown",  function(event){
//     event.preventDefault();
//     alert('div - keydwon');
// })


// document.getElementById('div14').addEventListener("submit",  function(event){
//     event.preventDefault();
//     alert('div - submit');
// })


// Document.getElementById ('div1').onclick = div1; ==> evenement sur l'objet, la fonction déclarée plus loin.
// documment.getElementById('div1').onblur = function(){monScript}
// documment.getElementById('div1').addEventListenner("blur", FonctioName);
// documment.getElementById('div1').addEventListenner("click", function() {monScript};
document.getElementById('div1').addEventListener('click', div1);
document.getElementById('div5').addEventListener('dblclick', div5);
document.getElementById('div10').addEventListener('mouseover', div10);
document.getElementById('div11').addEventListener('mouseout', div11);
document.getElementById('div15').addEventListener('mousedown', div15);
document.getElementById('div15').addEventListener('mouseup', div15Bis);



document.getElementById('div1').addEventListener('click', function(){
    var color = document.getElementById('div1');
    color.style.background = "black";
});




function div1(){
    alert('div1 - clic div1');
}

function div5(){
    alert('div1 - dblclic div5');
}

function div10(){
    alert('div10 - mouseover div10');
}

function div11(){
    alert('div11 - mouseout div11');
}

function div15(){
    alert('div15 - mousedown div15');
}

function div15Bis(){
    alert('div15 - mouseup div15');
}
document.getElementById('div2').addEventListener("blur", div2);
document.getElementById('div3').addEventListener("focus", div3);
function div2 (){ alert('div2 - blur div2');}
function div3 (){ alert('div3 - focus div3');}
document.getElementById("div14").addEventListener("submit", function(event){
    event.preventDefault();
    alert('div14 - submit');
})
document.getElementById("div7").addEventListener("keydown", function(){
    var r = document.getElementById("div7");
    alert('div7 - keydown!' + r.value);
})
document.getElementById("div8").addEventListener("keypress", function(){
    var r = document.getElementById("div8");
    alert('div8 - keypress!' + r.value);
})


function div1(){
 document.getElementById('div1').style.background = "green";// LE STYLE ICI ON AS MODIFIER LE BGRD quand on appuie sur l'élément la couleur change donc on dit que quand on appuie la couleur change 
}
/*
  document.getElementById("div1").addEventListener("click", function(){
   var color = document.getElementById("div1")
   color.style.background ="#000";
})
*/






