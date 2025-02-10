import { Truck } from "./truck";
import { DescriptionConsts, NameConsts, IdConsts } from "../consts";

export class TeslaTruck implements Truck {
  truckId: string = IdConsts.teslaTruckId;
  truckWeight: number = 23000;
  truckName: string = NameConsts.teslaTruckName;
  truckCapacity: number = 14000;
  truckDescription: string = DescriptionConsts.teslaTruckDescription;
}
