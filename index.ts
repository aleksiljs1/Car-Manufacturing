import { FordFactory, TeslaFactory } from "./factories/";

const FordTruck = new FordFactory().createTruck();
console.log(FordTruck.truckId);
const factory = new TeslaFactory().createCar();
console.log(factory);
