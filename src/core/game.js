import { GameState } from './gameState.js';
import { Renderer } from './renderer.js';
import { UserInteractions } from '../ui/userInteractions.js';
import {Background} from "../ui/background";


// Create a new game state
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

let gameState = new GameState();
let renderer = new Renderer(gameState, canvas, context);
let background = new Background();

UserInteractions.register(gameState);

// disable this to enable logging
//console.log = function () { }

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