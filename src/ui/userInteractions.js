
export class UserInteractions {
    static register(gameState) {
        this.buyWorkerButton = document.getElementById('buyWorker');
        this.upgradeWorkersButton = document.getElementById('upgradeWorkersButton');
        this.speedUpWorkersButton = document.getElementById('speedUpWorkersButton');

        this.buyWorkerButton.addEventListener('click', function () {
            gameState.addUnit();
        });

        this.upgradeWorkersButton.addEventListener('click', function () {
            gameState.upgradeUnits();
        });

        this.speedUpWorkersButton.addEventListener('click', function () {
            gameState.speedUpUnits();
        });
    }



}
// document.addEventListener('DOMContentLoaded', (event) => {
//
//
//
// });

