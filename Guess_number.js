var guess = prompt("Guess a number");
var secret_number = 9;
if (Number(guess) == secret_number) {
    alert("You got the secret number");
}
else if (Number(guess) > secret_number) {
    alert("You entered a high value. ");
}
else if (Number(guess) < secret_number) {
    alert("You entered a low value. ");
}
else
    alert("Entered a incorrect number");