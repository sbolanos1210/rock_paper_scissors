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




// When the browser loads the page, a number is randomly made ✓
// grab the number and run it through an if statement ✓
// return rock, paper or scissors depending on the random number generated. ✓
// print new Value