import { Car } from "./car";
import { DescriptionConsts, NameConsts, IdConsts } from "../consts";

export class FordCar implements Car {
  carId: string = IdConsts.fordCarId;
  carWeight: number = 4500;
  carName: string = NameConsts.fordCarName;
  carDescription: string = DescriptionConsts.fordCarDescription;
}
