

let computerChoices = ["philosophy", "socialism", "demagogue", "historian", "barbarian", "benevolent", "chartreuse"];

let wins = 0;
let losses = 0;

 function initializeGame() {
    let answerIndex = Math.floor((Math.random() * computerChoices.length));
    let word = computerChoices.splice(answerIndex, 1);
    let wordArray = word[0].split("");
    let chances = 10;
    let wrongLetters = [];
    let userProgress = [];
    document.getElementById("wrong-letters").textContent = "";
    document.getElementById("chances").textContent = chances;

    for(let i = 0; i < wordArray.length; i++){
        userProgress.push("_");
    }
    render();
    
    function render(){
        document.getElementById("user-progress").textContent = userProgress.join(" ");
    }
    
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
    
        if (chances === 0) {
    
            document.getElementById("user-progress").style.display = "none";
            document.getElementById("correctword").innerText = word;
            document.onkeyup = null;
            losses++;
            document.getElementById("numloss").textContent = losses;
            alert("Better luck next time! Press the button to start over with a new word.");
        };
     
        if(userProgress.indexOf("_") === -1) {
            wins++;
            document.getElementById("numwins").textContent = wins;
            document.onkeyup = null;
            alert("Congratulations!");  
        };

        render ();
     }
    
}
