// Create a new game state
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

let gameState = new GameState();
let renderer = new Renderer(gameState, canvas, context);

// disable this to enable logging
console.log = function () { }

// Starting the game
gameState.startGame();


// Game loop
function gameLoop() {

    // // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    gameState.unitsMgr.navigateUnits(gameState.units, gameState.deposits, gameState.base)

    renderer.renderDeposits();
    renderer.renderUnits();
    renderer.renderBuildings();

    requestAnimationFrame(gameLoop);
}

document.addEventListener('DOMContentLoaded', (event) => {
    // Start the game loop
    gameLoop();
});