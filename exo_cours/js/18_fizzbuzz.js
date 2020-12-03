// var i = window.prompt("Entrez un nombre entre 1 et 100")

// for(var i = 1; i > 100; i++) {
//     document.write(i)
// }


// for(var i = 1; i <= 100; i++) {
//     if(i % 8 == 0){
//         document.write("<br>" + "FizzBuzz" + "<br>");
//    } else if(i % 3 == 0) {
//         document.write("<br>" + "Fizz" + "<br>");
//    } else if(i % 5 == 0) {
//         document.write("<br>" + "Buzz" + "<br>");
//    } else {
//         document.write("<br>" + i + "<br>");
//    }    
// }


for(var i = 1; i <= 100; i++) {
    if(i % 3 == 0) {
        document.write("<br>" + "Fizz" + "<br>")
    } else if(i % 5 == 0) {
        document.write("<br>" + "Buzz" + "<br>")
    } else if(i % 8 == 0) {
        document.write("FizzBuzz")
    } else {
        document.write("<br>" + i + "<br>");
    }
}

