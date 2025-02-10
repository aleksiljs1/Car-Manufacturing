"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeslaFactory = void 0;
const models_1 = require("../models");
const factory_1 = require("./factory");
class TeslaFactory extends factory_1.Factory {
    createCar() {
        return new models_1.TeslaCar();
    }
    createTruck() {
        return new models_1.TeslaTruck();
    }
}
exports.TeslaFactory = TeslaFactory;
