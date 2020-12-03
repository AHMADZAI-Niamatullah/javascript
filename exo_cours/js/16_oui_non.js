// var utilisateur = prompt("Veuillez entrer oui ou non");

// while((utilisateur != "oui") && (utilisateur != "non")){
//     utilisateur =  prompt("Veuillez entrer oui ou non");
// }



// CORRECTION 

var i = 1;
var reponse = "";

while((reponse !== "oui") && (reponse !== "non") && (reponse !== "Non") && (reponse !== "Oui")) {
    reponse = prompt("Alors on joue au ni oui non");
    document.write(reponse + " pour la " + i + " ° fois, dis moi oui oju non ! <br>");
    i++
}
document.write("<h2 style='background-color: cyan; text-align: center;'> Fini ;) </h2>");



// FLOPPY BIRD

// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// const img = new Image();
// img.src = "./media/flappy-bird-set.png";

// // Général setting

// var gamePlaying = false;
// const gravity = .5;
// const speed = 6.2;
// const size = [51, 36];
// const jump = -11.5;
// const cTenth = (canvas.width / 10);

// // Pipes settings
// const pipeWidth = 78;
// const pipeGap = 270;
// const pipeLoc = () => (Math.random() * ((canvas.height - (pipeGap + pipeWidth)) - pipeWidth)) + pipeWidth;



// var index = 0,
//     bestScore = 0, 
//     curentScore = 0,
//     pipes = [],
//     flight,
//     flyHeight;

// const setup = () => {
//     currentsCORE + 0;
//     flight = jump;
//     flyHeight = (canvas.height / 2) - (size[1] / 2);

//     pipes = Array(3).fill().map((a, i) => [canvas.width + (i * (pipeGap + pipeWidth)), pipeLoc()]);
// }



// const render = () => {
//     index++;

//     // Background
//     ctx.drawImage(img, 0, 0, canvas.width, canvas.height, -((index * (speed / 2)) % canvas.width) + canvas.width, 0, canvas.width, canvas.height);

//     ctx.drawImage(img, 0, 0, canvas.width, canvas.height, -((index * (speed / 2)) % canvas.width), 0, canvas.width, canvas.height);


//     if(gameplaying) {
//         ctx.drawImage(img, 432, Math.floor((index % 9) / 3) * size[1], ...size, cTenth, flyHeight, ...size);
//         flight.Height, ...size);
//         flight += gravity;
//         flyHeight = Math.min(flyHeight + flight, canvas.height -size[1]);


//     } else {
//     ctx.drawImage(img, 432, Math.floor((index % 9) / 3) * size[1], ...size, ((canvas.width / 2) - size[0] / 2), flyHeight, ...size);
//     flyHeight = (canvas.height / 2) - (size[1] / 2);


//     ctx.fillText("Meilleur score : ${bestScore}", 55, 245);
//     ctx.fillText("Cliquez pour jouer", 48, 535);
//     ctx.font = "bold 30px courier";
//    }
//     window.requestAnimationFrame(render);
// }
// img.onload = render;
// document.addEventListener("click", () => gamePlaying = true);
// window.onclick = () => flight = jump;