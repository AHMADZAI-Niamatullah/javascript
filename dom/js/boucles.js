document.write("<h2> Boucles </h2>");

var a = 10;

for (var i = 0; i < a; i++) {
    document.write('je suis la tour numero : ' + i + '<br>');
}

// l'nvers
var b = 0;

for (var i = 10; i < b; i--) {
    document.write('je suis la tour numero : ' + i + '<br>');
}


var j = 0;


while (j < a) {
    document.write('je suis la tour numero : ' + j + '<br>');

    j++
}

var k = 0;

do {
    document.write('je suis la tour k numero : ' + k + '<br>');
    k++;

} while (k > a);