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
background.draw();

UserInteractions.register(gameState);

// disable this to enable logging
console.log = function () {
}

// Starting the game
gameState.startGame();


let lastFrameTime = performance.now();
const frameDelay = 1000 / 60;  // 60 FPS

// Game loop
function gameLoop() {

    let currentFrameTime = performance.now();
    let timeSinceLastFrame = currentFrameTime - lastFrameTime;

    if (timeSinceLastFrame >= frameDelay) {
        // Enough time has passed, we should render a new frame
        lastFrameTime = currentFrameTime;
        // // Clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        gameState.unitsMgr.navigateUnits(gameState.units, gameState.deposits, gameState.base)

        renderer.renderDeposits();
        renderer.renderUnits();
        renderer.renderBuildings();
    }
    requestAnimationFrame(gameLoop);
}

document.addEventListener('DOMContentLoaded', () => {
    // Start the game loop
    requestAnimationFrame(gameLoop);
});