export class WorkerUnit {
    constructor(name, base) {
        this.x = base.x + 30;
        this.y = base.y + 30;
        this.dx = 0;
        this.dy = 0;
        this.base = base;
        this.target = null;
        this.angle = 0;
        this.loaded = false;
        this.capacity = 1;
        this.holding = 0;
        this.loadedResourceAmount = 0;
        this.totalResourceTransported = 0;
        this.delay = 0;
        this.name = "Worker_" + name;
        this.speed = 2;
        this.selected = true;
    }

    getNearestResource(resources) {
        let nearest = null;
        let nearestDistance = Infinity;
        for (let resource of resources) {
            if (resource.amount > 0) {
                let dx = resource.x - this.x;
                let dy = resource.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < nearestDistance) {
                    nearest = resource;
                    nearestDistance = distance;
                }
            }
        }
        if (nearest === null) {
            return { x: 0, y: 0 }
        }
        return nearest;
    }

    move() {
        let dx = this.target.x - this.x;
        let dy = this.target.y - this.y;

        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > this.speed) {
            this.x += (dx / distance) * this.speed;
            this.y += (dy / distance) * this.speed;

        } else {
            // The worker has reached the target
            this.x = this.target.x;
            this.y = this.target.y;
            return true;
        }

        return false;
    }
}
