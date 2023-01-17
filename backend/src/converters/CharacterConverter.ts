import {CharacterEntity} from "../persistence/CharacterEntity";
import {Character, Gender, Status} from "../models/Character";
import {Converter} from "./Converter";
import {originConverters} from "./OriginConverter";
import {locationConverter} from "./LocationConverter";

export const characterConverter: Converter<CharacterEntity, Character> = {

    toDomain(entity: CharacterEntity): Character {
        return new Character(
            entity.name,
            toStatus(entity.status),
            entity.species,
            entity.type,
            toGender(entity.gender),
            originConverters.toDomain(entity.origin),
            locationConverter.toDomain(entity.location),
            entity.image,
            entity.episode,
            entity.url
        )
    }
}

function toStatus(string: string): Status {
    let value: Status
    try {
        value = <Status>string
    } catch (e) {
        value = "Unknown"
    }
    return value
}


function toGender(string: string): Gender {
    let value: Gender
    try {
        value = <Gender>string
    } catch (e) {
        value = "Genderless"
    }
    return value
}

