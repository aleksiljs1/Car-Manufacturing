"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FordTruck = void 0;
const consts_1 = require("../consts");
class FordTruck {
    constructor() {
        this.truckId = consts_1.IdConsts.fordTruckId;
        this.truckWeight = 19000;
        this.truckName = consts_1.NameConsts.fordTruckName;
        this.truckCapacity = 17000;
        this.truckDescription = consts_1.DescriptionConsts.fordTruckDescription;
    }
}
exports.FordTruck = FordTruck;
