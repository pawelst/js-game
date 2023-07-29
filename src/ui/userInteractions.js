document.addEventListener('DOMContentLoaded', (event) => {

    let buyWorkerButton = document.getElementById('buyWorker');
    let upgradeWorkersButton = document.getElementById('upgradeWorkersButton');
    let speedUpWorkersButton = document.getElementById('speedUpWorkersButton');

    buyWorkerButton.addEventListener('click', function () {
        gameState.addUnit("", gameState.base);
    });

    upgradeWorkersButton.addEventListener('click', function () {
        gameState.upgradeUnits();
    });

    speedUpWorkersButton.addEventListener('click', function () {
        gameState.speedUpUnits();
    });

});