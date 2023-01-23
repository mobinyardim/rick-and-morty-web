import {Gender, Status} from "../models/Character";
import {Origin} from "../models/Origin";
import {Location} from "../models/Location";

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