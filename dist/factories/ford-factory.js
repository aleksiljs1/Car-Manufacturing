"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FordFactory = void 0;
const models_1 = require("../models");
const factory_1 = require("./factory");
class FordFactory extends factory_1.Factory {
    createCar() {
        return new models_1.FordCar();
    }
    createTruck() {
        return new models_1.FordTruck();
    }
}
exports.FordFactory = FordFactory;
