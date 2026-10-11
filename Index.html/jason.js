    let secretNumber = Math.floor(Math.random() * 10) + 1;
    console.log("Game Started! I picked a number between 1 and 10.");
    let guess = 0;
    while (guess !== secretNumber) {
        guess = Number(prompt("Guess a number between 1 and 10:"));
        
        if (guess === 0 || isNaN(guess)) {
            console.log("Game cancelled.");
            break;
        }

        console.log("You guessed: " + guess);

        if (guess < secretNumber) {
            console.log("Too low! Try again.");
        } else if (guess > secretNumber) {
            console.log("Too high! Try again.");
        } else {
            console.log("Congratulations! You guessed the correct number!");
            alert("You won! Check the console for details.");
        }
    }