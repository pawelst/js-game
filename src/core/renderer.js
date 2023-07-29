class Renderer {

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
        context.save();
        // Translate and rotate the context
        context.translate(unit.x, unit.y);
        //context.rotate(getAngle(unit) + Math.PI/2);

        // Draw the body of the rocket
        context.beginPath();
        context.rect(-15, -15, 15, 15);
        context.fillStyle = unit.carrying ? 'grey' : 'silver';
        context.fill();
        context.stroke();
        context.restore();
    }

    renderUnits() {
        // Draw and update each worker
        this.gameState.units.forEach(unit => {
            // Draw the worker
            this.renderUnit(unit);
        });
    }
    renderBuildings() {
        this.context.fillStyle = 'white';
        this.context.fillRect(this.gameState.base.x, this.gameState.base.y, this.gameState.base.width, this.gameState.base.height);
        this.context.fillText('$' + this.gameState.base.storage, this.gameState.base.x - 20, this.gameState.base.y + this.gameState.base.height / 2);
    }

    renderSingleUnit(unit) {
        this.context.save();

        // Translate and rotate the context
        this.context.translate(worker.x, worker.y);
        this.context.rotate(getAngle(worker) + Math.PI / 2);

        // Draw the body of the rocket
        this.context.beginPath();
        this.context.rect(-5, -15, 10, 20);  // Adjust these numbers to change the size of the rocket body
        this.context.fillStyle = worker.carrying ? 'grey' : 'silver';
        this.context.fill();
        this.context.stroke();

        this.context.restore();
    }
}