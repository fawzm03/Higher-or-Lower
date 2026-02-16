function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
    const die1 = rollDie();
    const die2 = rollDie();

    document.getElementById("die1").value = die1;
    document.getElementById("die2").value = die2;

    let resultText = "";

    if (die2 > die1) {
        resultText = "You Win";
    } else if (die2 < die1) {
        resultText = "You Lose";
    } else {
        resultText = "Tie";
    }

    document.getElementById("result").value = resultText;
}

