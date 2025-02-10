import { Car, TeslaCar, TeslaTruck, Truck } from "../models";

import { Factory } from "./factory";

export class TeslaFactory extends Factory {
  createCar(): Car {
    return new TeslaCar();
  }
  createTruck(): Truck {
    return new TeslaTruck();
  }
}
