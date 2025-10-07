


//Creates a random number. based on amount it attributes a value of Rock Paper Scissors
function getComputerChoice(){
    let i = Math.floor(Math.random()*100);

        if (i <= 33) {
            console.log("Rock")
        } else if (i >= 33 && i <= 66) {
            console.log("Paper")
        } else if (i < 66) {
            console.log("Scissors");
        }
}

console.log(getComputerChoice())


function getHumanChoice(){
    let i = prompt("Please write Rock, Paper or Scissors") 
        console.log(i);

}
 console.log(getHumanChoice());
