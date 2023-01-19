import {CharacterEntity} from "../persistence/CharacterEntity";
import CharacterDao from "../persistence/CharacterEntity";
import {Character, Gender, Status} from "../models/Character";
import {Converter} from "./Converter";
import {originConverters} from "./OriginConverter";
import {locationConverter} from "./LocationConverter";
import {Document} from "mongoose";
import {CharacterBody} from "../bodyModels/CharacterBody";

export const characterConverter: Converter<Document & CharacterEntity, CharacterBody, Character> = {

    toDomain(entity: Document & CharacterEntity): Character {
        return new Character(
            entity._id,
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
    },

    toEntity(domain: Character): Document & CharacterEntity {
        throw new Error("not implemented")
    },

    bodyToEntity(transfer: CharacterBody): Document & CharacterEntity {
        const dao = new CharacterDao()

        dao.name = transfer.name;
        dao.status = transfer.status ?? "Unknown";
        dao.species = transfer.species;
        dao.type = transfer.type
        dao.gender = transfer.gender ?? "Unknown";
        dao.origin = transfer.origin ?? [];
        dao.location = transfer.location
        dao.image = transfer.image
        dao.episode = transfer.episode ?? [];

        return dao
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

