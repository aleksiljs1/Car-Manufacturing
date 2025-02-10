import { Truck, FordCar, Car, FordTruck } from "../models";
import { Factory } from "./factory";

export class FordFactory extends Factory {
  createCar(): Car {
    return new FordCar();
  }
  createTruck(): Truck {
    return new FordTruck();
  }
}
