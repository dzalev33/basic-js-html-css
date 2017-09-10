
//all the words
var words = [
    ["M", "A", "S", "A"],
    ["T", "O", "C", "A", "K"],
    ["L", "A", "B", "R", "A", "D", "O", "R"],
    ["B", "I", "T", "O", "L", "A"],
    ["P", "E", "L", "I", "N", "K", "O", "V", "A", "C"],
    ["K", "U" ,"R" ,"A" ,"C"],

    ["P", "E", "L", "I", "N", "K", "O", "V", "A", "C"]


]
var random = Math.floor((Math.random()*(words.length-1)));

var guessword = words[random];
var rateword = new Array(guessword.length); // da si naoga zboroj od nizata gore
var error = 0;

// pod sekoja bukva dolna linija
for (var i = 0; i < rateword.length; i++){
    rateword[i] = "_ ";
}


function printRateword(){
    for (var i = 0; i < rateword.length; i++){
        var ratefeld = document.getElementById("ratefeld");
        var letter = document.createTextNode(rateword[i]);
        ratefeld.appendChild(letter);
    }
}

//proverka
var testcharacter = function(){
    var f = document.rateform;
    var b = f.elements["ratecharacter"];
    var character = b.value;
    character = character.toUpperCase();
    for (var i = 0; i < guessword.length; i++){
        if(guessword[i] === character){
            rateword[i] = character + " ";
            var hit = true;
        }
        b.value = "";
    }


    var ratefeld = document.getElementById("ratefeld");
    ratefeld.innerHTML="";
    printRateword();

    // ako bukvata ne igra klava vo wrong words u dodava slikata od besilkata
    if(!hit){
        var guessedletters = document.getElementById("guessedletters");
        var letter = document.createTextNode(" " + character);
        guessedletters.appendChild(letter);
        error++;
        var hangman = document.getElementById("hangman");
        hangman.src = "img/Hangman-" + error + ".png";
    }

    //dali site se najdeni
    var finished = true;
    for (var i = 0; i < rateword.length; i++){
        if(rateword[i] === "_ "){
            finished = false;
        }
    }
    if(finished){
        window.alert("POBEDI!!!");
    }

    //once you got six wrong letters, you lose
    if(error === 6){
        window.alert("IZGUBI");
    }
}

function init(){
    printRateword();
}

window.onload = init;