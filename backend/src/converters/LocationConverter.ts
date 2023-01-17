import {Location} from "../models/Location";
import {LocationEntity} from "../persistence/LocationEntity";
import {Converter} from "./Converter";
import {} from "../models/Character";

export const locationConverter: Converter<LocationEntity, Location> = {

    toDomain(origin: LocationEntity): Location {
        return new Location(
            origin.name,
            origin.url
        )
    },

    toEntity(domain: Location): LocationEntity {
        throw new Error();
    }
}