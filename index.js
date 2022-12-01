let statOver = document.getElementById("start-over");

let countOne = document.getElementById("count-el1");
let countTwo = document.getElementById("count-el2");

// declaring variables
let countHome = 0;
let countGuest = 0;


// functions that count the guest scores

function addingHome1() {
  countHome += 1;
  countOne.textContent = countHome;
}

function addingHome2() {
  countHome += 2;
  countOne.textContent = countHome;
}

function addingHome3() {
  countHome += 3;
  countOne.textContent = countHome;
}

// functions that count the guest scores

function addingGuest1() {
  countGuest += 1;
  countTwo.textContent = countGuest;
}


function addingGuest2() {
  countGuest += 2;
  countTwo.textContent = countGuest;
}


function addingGuest3() {
  countGuest += 3;
  countTwo.textContent = countGuest;
}

// function that set the score back to zero
function startOver() {
  countOne.textContent -= countHome;
  countTwo.textContent -= countGuest;
  countHome = 0;
  countGuest = 0;
}