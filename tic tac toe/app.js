let boxes = document.querySelectorAll('.box');
let resetButton = document.getElementById('reset-btn');
let turno = true;

const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows 
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];        

function checkWin() {
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      boxes[a].innerHTML &&
      boxes[a].innerHTML === boxes[b].innerHTML &&
      boxes[a].innerHTML === boxes[c].innerHTML
    ) {
      alert(`Player ${boxes[a].innerHTML} wins!`);
      disableAllBoxes();
      return;
    }
  }

  // Check for draw
  if ([...boxes].every(box => box.innerHTML)) {
    alert("It's a draw!");
  }
}

function disableAllBoxes() {
  boxes.forEach(box => box.disabled = true);
}

function resetGame() {
  boxes.forEach(box => {
    box.innerHTML = '';
    box.disabled = false;
  });
  turno = true;
}

resetButton.addEventListener('click', resetGame);

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (box.innerHTML === '') {
      box.innerHTML = turno ? 'O' : 'X';
      box.disabled = true;
      checkWin();
      turno = !turno;
    }
  });
});
