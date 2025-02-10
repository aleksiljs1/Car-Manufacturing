"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeslaCar = void 0;
const consts_1 = require("../consts");
class TeslaCar {
    constructor() {
        this.carId = consts_1.IdConsts.teslaCarId;
        this.carWeight = 4000;
        this.carName = consts_1.NameConsts.teslaCarName;
        this.carDescription = consts_1.DescriptionConsts.teslaCarDescription;
    }
}
exports.TeslaCar = TeslaCar;
