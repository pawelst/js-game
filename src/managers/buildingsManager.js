import {BaseBuilding} from '../entities/base';

export class BuildingsManager {

    generateBase(){
        return new BaseBuilding();
    }
}