import { Location } from "./Location";
import { Origin } from "./Origin";

export type Status = "Alive" | "Dead" | "Unknown";
export type Gender = "Female" | "Male" | "Genderless" | "Unknown";

export class Character {
  constructor(
    public id: string,
    public name: string,
    public status: Status,
    public species: string,
    public gender: Gender,
    public origin: Origin,
    public location: Location,
    public image: string,
    public episode: string[],
    public url: string,
    public type?: string
  ) {}
}
