"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FordCar = void 0;
const consts_1 = require("../consts");
class FordCar {
    constructor() {
        this.carId = consts_1.IdConsts.fordCarId;
        this.carWeight = 4500;
        this.carName = consts_1.NameConsts.fordCarName;
        this.carDescription = consts_1.DescriptionConsts.fordCarDescription;
    }
}
exports.FordCar = FordCar;
