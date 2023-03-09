import { Gender, Status } from "../Character";
import { Origin } from "../Origin";
import { Location } from "../Location";

export interface CharacterBody {
  name: string;
  status?: Status;
  species: string;
  type?: string;
  gender: Gender;
  origin: Origin;
  location: Location;
  image: string;
  episode?: string[];
}
