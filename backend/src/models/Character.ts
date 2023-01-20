import {Location} from "./Location";
import {Origin} from "./Origin"

export type Status = "Alive" | "Dead" | "Unknown"
export type Gender = "Female" | "Male" | "Genderless" | "Unknown"


export class Character {
    id: string
    name: string
    status: Status;
    species: string
    type?: string
    gender: Gender
    origin: Origin
    location: Location
    image: string
    episode: string[]
    url: string

    constructor(
        id:string,
        name: string,
        status: Status,
        species: string,
        gender: Gender,
        origin: Origin,
        location: Location,
        image: string,
        episode: string[],
        url: string,
        type?: string
    ) {
        this.id = id
        this.name = name;
        this.status = status;
        this.species = species;
        this.type = type;
        this.gender = gender;
        this.origin = origin;
        this.location = location;
        this.image = image;
        this.episode = episode;
        this.url = url;
    }
}