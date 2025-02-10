import { Car } from "./car";
import { DescriptionConsts, NameConsts, IdConsts } from "../consts";
export class TeslaCar implements Car {
  carId: string = IdConsts.teslaCarId;
  carWeight: number = 4000;
  carName: string = NameConsts.teslaCarName;
  carDescription: string = DescriptionConsts.teslaCarDescription;
}
