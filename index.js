const statOver = document.getElementById("start-over");

const countOne = document.getElementById("count-el1");
const countTwo = document.getElementById("count-el2");

// declaring variables
let countHome = 0;
let countGuest = 0;


// function that count the home scores
function handleHomeScores(scoreToAdd) {
 const currentScore = Number(countOne.textContent)
  countOne.textContent = currentScore + scoreToAdd
}

// function that count the guest scores
function handleGuestScores(scoreToAdd) {
 const currentScore = Number(countTwo.textContent)
  countTwo.textContent = currentScore + scoreToAdd
}

// function that sets the score back to zero
function startOver() {
  countOne.textContent = countHome;
  countTwo.textContent = countGuest;
  countHome = 0;
  countGuest = 0;
}
