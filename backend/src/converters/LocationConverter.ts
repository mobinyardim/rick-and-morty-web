import {Location} from "../../../models/src/Location";
import {LocationEntity} from "../persistence/LocationEntity";
import {Converter} from "./Converter";
import {} from "../../../models/src/Character";

export const locationConverter: Converter<LocationEntity, unknown, Location> = {

    toDomain(origin: LocationEntity): Location {
        return new Location(
            origin.name,
            origin.url
        )
    },

    toEntity(domain: Location): LocationEntity {
        throw new Error();
    },
    bodyToEntity(transfer: unknown): LocationEntity {
        throw new Error()
    }
}