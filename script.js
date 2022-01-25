// create 16x16 grid of divs

const container = document.querySelector('.container');
const grid = document.querySelector('.grid');

function createGrid () {
  const row = document.createElement('div');
  grid.appendChild(row);
  row.classList.add('row');

  function fillRow() {
    const squareRow = document.createElement('div');
    row.appendChild(squareRow);
    squareRow.classList.add('square');

    squareRow.addEventListener("mouseover", () => {
      squareRow.classList.add('hover');
    })
  }
  
  for (i = 0; i < 16; i++) {
    fillRow();
  }
}

for (j = 0; j < 16; j++) {
  createGrid()
}

// clear grid

function deleteGrid() {
  const row = document.querySelector('.row')
  row.remove();
}

// grab the button, add event listener on click to popup

const button = document.querySelector('button');

button.addEventListener("click", () => {
  for (k = 0; k < 16; k ++) {
    deleteGrid();
  }
     createNewGrid();
});

function promptMe() {
  let userInput = prompt("Starting over? Choose your grid size!", "Keep me less than 100");

  function checkInt() {
  if (isNaN(userInput)) {
      alert("Not a number - try again!")
  } else {
      return userInput;
  }
}
checkInt(userInput);
return userInput;
}

// create new grid

function createNewGrid(userInput) {
  userInput = parseInt(promptMe(), 10)
  const row = document.createElement('div');
  grid.appendChild(row);
  row.classList.add('row');
  
  function fillRow() {
    const squareRow = document.createElement('div');
    row.appendChild(squareRow);
    squareRow.classList.add('square');

    squareRow.addEventListener("mouseover", () => {
      squareRow.classList.add('hover');
    })
  }

  for (i = 0; i < userInput; i++) {
    fillRow();
  }
}

  


