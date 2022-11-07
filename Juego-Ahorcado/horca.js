//Selectors

let words = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML", "CSS"];
let tablero = document.getElementById("forca").getcontext("2d");
let secretword = "";

//SecretWord

function chooseSecretWord(){
    let word = words[Math.floor(Math.random() * words.length)]
    secretword = word
    console.log(secretword)
}


//StartGame

function StartGame(){
    document.getElementById("iniciar-juego").style.display="none";

    chooseSecretWord()
    dibujarCanvas()
    dibujarLinea()
}