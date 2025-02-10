import { Car, Truck } from "../models/";

export abstract class Factory {
  abstract createCar(): Car;
  abstract createTruck(): Truck;
}
