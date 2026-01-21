const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
}

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");
let winningScore = 3;
let gameOver = false;

function updateScores(player, opp) {
    if (!gameOver) {
        if (player.score !== winningScore) {
            player.score += 1;
            if (player.score === winningScore) {
                gameOver = true;
                player.display.classList.add("winner");
                opp.display.classList.add("loser");
            }
            player.display.textContent = player.score;
        }
    }
}

p1.button.addEventListener("click", function () {
    updateScores(p1, p2);
});
p2.button.addEventListener("click", function () {
    updateScores(p2, p1);
});



winningScoreSelect.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
});
resetButton.addEventListener("click", reset);

function reset() {
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = p1.score;
    p2.display.textContent = p2.score;
    gameOver = false;
    p1.display.classList.remove("winner", "loser");
    p2.display.classList.remove("winner", "loser");
};