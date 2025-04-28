function getComputerChoice(){
//     Step 1: Create a new variable named randomNumber.
    let randomNumber;
// Step 2: Store the random number generated to randomNumber variable.
randomNumber = Math.random();
// Step 3: Compare the values of the randomNumber variable.
if(randomNumber < 0.5){
    return "Rock";
} else if(randomNumber > 0.5){
    return "Scissors";
} else {
    return "Paper";
}
// Step 4: If variable is less than 0.5 print Rock if more than 0.5 print scissors if exact middle print paper.
// Step 5: return the output
}

console.log(getComputerChoice());