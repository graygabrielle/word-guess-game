let computerChoices = ["apple", "peaches", "oranges"];

let answerIndex = Math.floor((Math.random() * computerChoices.length));


let word = computerChoices.splice(answerIndex, 1);

console.log(word);
console.log(computerChoices);

let wordArray = word[0].split("");

let chances = 10;

let wrongLetters = [];

let userProgress = [];

let wins = 0;

let losses = 0;

for(let i = 0; i < wordArray.length; i++){
    userProgress.push("_");
}
render();

function render(){
    document.getElementById("user-progress").textContent = userProgress.join(" ");
}

//document.getElementById("userprogress").textContent = userProgress.join(" ");

// console.log(wordArray);

// console.log(computerChoices[answerIndex]);

document.onkeyup = function(event){
    let userInput = event.key.toLowerCase();
    // console.log(userInput);


    for(let j = 0; j < wordArray.length; j++) {
        if(userInput === wordArray[j]) {
            userProgress[j] = userInput;
 
        }
 
 
        // console.log(wrongLetters);
 
        // console.log(userProgress);
 
    }
 
    if(wordArray.indexOf(userInput) === -1) {
        wrongLetters.push(userInput);
        document.getElementById("wrong-letters").textContent = wrongLetters.join(", ");
        chances--;
        document.getElementById("chances").textContent = chances;

    };

    if (chances === 0) {

        document.getElementById("game-over").innerText = "Game Over!!!";
        document.getElementById("user-progress").style.display = "none";
        document.getElementById("correctword").innerText = word;
        document.onkeyup = null;
        losses++;
        document.getElementById("numloss").textContent = losses;
       

   

    };
 
    if(userProgress.indexOf("_") === -1) {
        wins++;
        document.getElementById("numwins").textContent = wins;
        document.onkeyup = null;

    };
   
 

    render ();
 }