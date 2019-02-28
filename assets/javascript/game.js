
// alert immediately
alert("Press the start button to begin the game!")


//setting global variables
let computerChoices = ["philosophy", "socialism", "demagogue", "historian", "barbarian", "benevolent", "chartreuse"];
let wins = 0;
let losses = 0;
let button = document.getElementById("button");


// This is one huge function that runs the whole game
 function initializeGame() {
    let answerIndex = Math.floor((Math.random() * computerChoices.length));
    let word = computerChoices.splice(answerIndex, 1);
    let wordArray = word[0].split("");
    let chances = 10;
    let wrongLetters = [];
    let userProgress = [];
    for(let i = 0; i < wordArray.length; i++){
        userProgress.push("_");
    }
    render();
    // this function updates the user's progress on screen as they are guessing the word
    function render(){
        document.getElementById("user-progress").textContent = userProgress.join(" ");
    }
    document.getElementById("wrong-letters").textContent = "";
    document.getElementById("chances").textContent = chances;
    document.getElementById("user-progress").style.display = "block";
    document.getElementById("correctword").innerText = "";
 
    document.onkeyup = function (event){
        let userInput = event.key.toLowerCase();
    
    
        for(let j = 0; j < wordArray.length; j++) {
            if(userInput === wordArray[j]) {
                userProgress[j] = userInput;
            }
        }
     
        if(wordArray.indexOf(userInput) === -1) {
            wrongLetters.push(userInput.toUpperCase());
            document.getElementById("wrong-letters").textContent = wrongLetters.join(", ");
            chances--;
            document.getElementById("chances").textContent = chances;
        };
    // to lose
        if (chances === 0) {
    
            document.getElementById("user-progress").style.display = "none";
            document.getElementById("correctword").innerText = word;
            document.onkeyup = null;
            losses++;
            document.getElementById("numloss").textContent = losses;
            if (computerChoices[0]) {
                alert("Better luck next time! Press the button to start over with a new word."); 
            }; 
            if (!computerChoices[0]) {
                button.style.display = "none";
                alert("You have used up all possible words!");
            };

            

        };
    //  to win
        if(userProgress.indexOf("_") === -1) {
            wins++;
            document.getElementById("numwins").textContent = wins;
            document.onkeyup = null;
            if (computerChoices[0]) {
            alert("Congratulations! Press start again to restart the game with a new word!"); 
            }; 
            if (!computerChoices[0]) {
                button.style.display = "none";
                alert("You have used up all possible words!");
            };
        };

        render ();
     }
    
}

