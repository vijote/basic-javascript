var number = 6;
var guess = Number(prompt("Can you guess the number?"));

if(guess === number){
    alert("You guessed the number!");
}
else if (guess < number){
    alert("Too low. Try again");
}
else if(guess > number){
    alert("Too high, try again");
}