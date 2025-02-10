"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeslaTruck = void 0;
const consts_1 = require("../consts");
class TeslaTruck {
    constructor() {
        this.truckId = consts_1.IdConsts.teslaTruckId;
        this.truckWeight = 23000;
        this.truckName = consts_1.NameConsts.teslaTruckName;
        this.truckCapacity = 14000;
        this.truckDescription = consts_1.DescriptionConsts.teslaTruckDescription;
    }
}
exports.TeslaTruck = TeslaTruck;
