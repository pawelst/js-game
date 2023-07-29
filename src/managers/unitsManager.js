import {WorkerUnit} from "../entities/worker";


export class UnitsManager {

    generateUnits() {

    }
    addUnit(name, base) {
        let unit = new WorkerUnit(name, base);
        return unit;
    }

    navigateUnits(units, deposits, base) {
        units.forEach(unit => {
            // if unit doesn't have a target - it's new. set target to nearest resource
            if (!unit.target) {
                //    console.log(unit.name + " doesn't have a target");
                unit.target = unit.getNearestResource(deposits);
                console.log(unit.name + " target set to " + JSON.stringify(unit.target));

            }

            // if move() returns true, means unit reached target
            if (unit.move()) {

                console.log(unit.name + " reached target");

                // if unit is holding something and reached target, means it arrived at the base
                if (unit.holding > 0) {
                    console.log(unit.name + " arriving at base holding " + unit.holding + " cargo");

                    base.storage += unit.holding;
                    unit.holding = 0;
                    unit.target = unit.getNearestResource(deposits);

                    // if unit is not holding anything and reached target, means it arrived at the resource
                } else {
                    // if resource is empty at the time of arrival, set new target
                    if (!unit.target || unit.target.amount === 0) {
                        console.log(unit.name + " reporting target is depleted")
                        unit.target = unit.getNearestResource(deposits);
                        console.log(unit.name + " target set to " + JSON.stringify(unit.target));

                        // if resource is not empty, proceed to load the cargo, and set target to base
                    } else {
                        let amountToLoad = Math.min(unit.capacity - unit.holding, unit.target.amount);
                        unit.holding += amountToLoad;
                        unit.target.amount -= amountToLoad;
                        unit.carrying = true;
                        console.log(unit.name + " leaving resource with " + unit.holding + " cargo, resource has " + unit.target.amount);

                        unit.target = { x: base.x + 20, y: base.y + 20 };
                        console.log(unit.name + " target set to " + JSON.stringify(unit.target));
                    }
                }
            }
        });
    }
}