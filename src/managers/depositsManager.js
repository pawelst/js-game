import { ResourceDeposit } from '../entities/deposit.js';
import { Utils } from '../utils/collisions.js';

export class DepositsManager {
    constructor() {
        this.totalResources = 1500;
        this.minResourceAmount = 30;
        this.maxResourceAmount = 200;
        this.deposits = [];
    }

    generateDeposits() {
        let amount = 0;
        let numberOfDeposits = 10;
        let canvasHeight = 600;
        let canvasWidth = 1400;
        let maxDepositSize = 300;

        for (let i = 0; i < numberOfDeposits; i++) {
            amount = Math.floor(Math.random() * (maxDepositSize - this.minResourceAmount + 1)) + this.minResourceAmount;
            let deposit = {};

            do {
                let x = this.getRandomCoord(maxDepositSize / 2, canvasWidth - maxDepositSize / 2);
                let y = this.getRandomCoord(maxDepositSize / 2, canvasHeight - maxDepositSize / 2);

                deposit = new ResourceDeposit(x, y, amount);

            } while (Utils.doDepositsOverlap(deposit, this.deposits));

            this.deposits.push(deposit);

        }
        return this.deposits;
    }

    getRandomCoord(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


}