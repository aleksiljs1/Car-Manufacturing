"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factories_1 = require("./factories/");
const FordTruck = new factories_1.FordFactory().createTruck();
console.log(FordTruck.truckId);
const factory = new factories_1.TeslaFactory().createCar();
console.log(factory);
