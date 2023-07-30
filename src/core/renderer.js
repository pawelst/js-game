export class Renderer {

    constructor(gameState, canvas, context) {
        this.gameState = gameState;
        this.canvas = canvas;
        this.context = context;
    }

    renderDeposits() {
        this.gameState.deposits = this.gameState.deposits.filter(deposit => deposit.amount > 0);


        this.gameState.deposits.forEach(deposit => {
            this.context.beginPath();
            this.context.arc(deposit.x, deposit.y, deposit.amount / 3, 0, Math.PI * 2, false);
            this.context.fillStyle = 'green';
            this.context.fill();
            this.context.closePath();
            this.context.fillStyle = 'white'; // Change the color for the text
            this.context.textAlign = 'center'; // Center the text horizontally
            this.context.fillText(deposit.amount.toString(), deposit.x, deposit.y + 4);
        });
    }

    renderUnit(unit) {
        this.context.save();
        // Translate and rotate the context
        this.context.translate(unit.x, unit.y);
        //context.rotate(getAngle(unit) + Math.PI/2);

        // Draw the body of the rocket
        this.context.beginPath();
        this.context.rect(-15, -15, 15, 15);
        this.context.fillStyle = unit.carrying ? 'grey' : 'silver';
        this.context.fill();
        this.context.stroke();
        this.context.restore();
    }

    drawWorker(worker) {
        let workerImage = document.getElementById('workerSvg');

        let dx = worker.target.x - worker.x;
        let dy = worker.target.y - worker.y;
        worker.angle = Math.floor(Math.atan2(dy, dx));
        worker.angle += 90;

        if (workerImage.complete) {  // make sure the image is completely loaded
            this.context.save();
            this.context.translate(worker.x, worker.y);
            this.context.rotate(worker.angle);
            this.context.drawImage(workerImage, -10, -10 / 2, 20, 20);
            this.context.restore();
        } else {
            workerImage.onload = function () {
                this.context.save();
                this.context.translate(worker.x, worker.y);
                this.context.rotate(worker.angle);
                this.context.drawImage(workerImage, -10, -10 / 2, 20, 20);
                this.context.restore();
            };
        }

    }
    renderUnits() {
        // Draw and update each worker
        this.gameState.units.forEach(unit => {
            // Draw the worker
            this.drawWorker(unit);
        });
    }
    renderBuildings() {
        let storageImage = document.getElementById('baseSvg');

        if (storageImage.complete) {  // make sure the image is completely loaded
            this.context.drawImage(storageImage, this.gameState.base.x, this.gameState.base.y, 30, 30);
        } else {
            storageImage.onload = function () {
                this.context.drawImage(storageImage, this.gameState.base.x, this.gameState.base.y, 30, 30);
            };
        }
        // this.context.fillStyle = 'white';
        // this.context.fillRect(this.gameState.base.x, this.gameState.base.y, this.gameState.base.width, this.gameState.base.height);
        this.context.font = "bold 14px sans-serif";
        this.context.fillText('$' + this.gameState.base.storage, this.gameState.base.x - 20, this.gameState.base.y + this.gameState.base.height / 2);
    }
}