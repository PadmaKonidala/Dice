 const player = document.getElementById('player'); const rollDiceButton = document.getElementById('roll-dice'); const diceResult = document.getElementById('dice-result'); const gridOverlay = document.querySelector('.grid-overlay'); let currentPosition = 1; const gridSize = 10; const totalCells = gridSize * gridSize; 
 const snakesAndLadders = {  4: 14, 9: 31, 20: 38, 28: 84, 40: 59, 51: 67, 63: 81, 71: 91,  17: 7, 54: 34, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 99: 78, }; 
// Function to get grid coordinates from position 
function getCoordinates(position) { const row = Math.floor((position - 1) / gridSize); const col = (position - 1) % gridSize; const x = (col * 50) + 25; 
// Center of the cell 
const y = (row * 50) + 25;  
return { x, y }; } 
// Function to move the player 
function movePlayer(newPosition) { const { x, y } = getCoordinates(newPosition); player.style.left = `${x}px`; player.style.top = `${y}px`; } 

function rollDice() { 
return Math.floor(Math.random() * 6) + 1; } 
 rollDiceButton.addEventListener('click', () => { 
const diceValue = rollDice(); diceResult.textContent = `You rolled a ${diceValue}`; 
let newPosition = currentPosition + diceValue; if (newPosition > totalCells) { newPosition = currentPosition; 
 } else { currentPosition = newPosition; 
if (snakesAndLadders[currentPosition]) { 
currentPosition = snakesAndLadders[currentPosition]; 
} movePlayer(currentPosition); 
} 
if (currentPosition === totalCells) { 
alert('Congratulations! You won!'); 
rollDiceButton.disabled = true; } }); // Function to create the grid 
function createGrid() { for (let i = 1; i <= totalCells; i++) { const cell = document.createElement('div'); cell.classList.add('cell'); cell.textContent = i; gridOverlay.appendChild(cell); } } // Initialize game 
createGrid(); movePlayer(currentPosition);