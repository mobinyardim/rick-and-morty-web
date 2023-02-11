import {Gender, Status} from "../../../models/src/Character";
import {Origin} from "../../../models/src/Origin";
import {Location} from "../../../models/src/Location";

export interface CharacterBody {
    name: string
    status?: Status;
    species: string
    type?: string
    gender: Gender
    origin: Origin
    location: Location
    image: string
    episode?: string[]
}