import { BaseBuilding } from '../entities/base';

export class BuildingsManager {

    generateBase(){
        let base = new BaseBuilding();
        return base;
    }
}