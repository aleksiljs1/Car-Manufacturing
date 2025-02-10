import { Truck } from "./truck";
import { DescriptionConsts, NameConsts, IdConsts } from "../consts";

export class FordTruck implements Truck {
  truckId: string = IdConsts.fordTruckId;
  truckWeight: number = 19000;
  truckName: string = NameConsts.fordTruckName;
  truckCapacity: number = 17000;
  truckDescription: string = DescriptionConsts.fordTruckDescription;
}
