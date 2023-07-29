class GameState {

    constructor() {
        this.isRunning = false;
        this.player = {
            score: 0,
            resources: {
                wood: 0,
                stone: 0,
                gold: 0,
            },
        };
        this.units = [];
        this.deposits = [];
        this.base = {};
        this.depositsMgr = new DepositsManager();
        this.buildingsMgr = new BuildingsManager();
        this.unitsMgr = new UnitsManager();
    }

    startGame() {
        console.log(`Starting the game`);
        this.deposits = this.depositsMgr.generateDeposits(1500);
        this.base = this.buildingsMgr.generateBase();
        this.units = [];
    }
    addUnit(name, base) {
        if (this.base.storage >= 5) {
            let unit = this.unitsMgr.addUnit(this.units.length, base);
            this.units.push(unit);
            console.log(`Added unit: ${unit.name}`);
            this.base.storage -= 5;
        }
    }
    upgradeUnits() {
        if (this.base.storage >= 20) {
            this.base.storage -= 20;
            for (let unit of this.units) {
                unit.capacity += 1;
            }
        }
    }
    speedUpUnits() {
        if (this.base.storage >= 20) {
            this.base.storage -= 20;
            for (let unit of this.units) {
                unit.speed += 1;
            }
        }
    }

}