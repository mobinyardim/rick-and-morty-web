import {CharacterService} from "./CharacterService";
import {CharacterBody} from "../bodyModels/CharacterBody";
import {Fail, Pagination, Result, Success, ErrorType} from "../models/Result";
import {Character} from "../models/Character";
import CharacterDao, {CharacterEntity} from "../persistence/CharacterEntity";
import {Document} from "mongoose";
import {characterConverter} from "../converters/CharacterConverter";

export class CharacterServiceImpl implements CharacterService {
    async getCharacters(limit: number, offset: number): Promise<Result<Array<Character>>> {
        let characters
        try {
            characters = await CharacterDao.find().limit(limit).skip(offset).exec()
        } catch (e: any) {
            const message = e.message ?? "Unknown Error"
            return new Fail(
                message,
                "READ_ERROR"
            )
        }

        const responseArray = characters.map((value: CharacterEntity & Document, index: number, array: CharacterEntity[]) => {
            return characterConverter.toDomain(value)
        })
        const count = await CharacterDao.countDocuments()

        return new Success(
            "Successful",
            responseArray,
            new Pagination(
                Math.ceil(count / limit),
                count
            )
        )
    }

    getCharacter(id: string): Promise<Result<Character>> {
        throw new Error()
    }

    createCharacter(characterBody: CharacterBody): Promise<Result<Character>> {
        throw new Error()
    }

    deleteCharacter(characterBody: CharacterBody): Promise<Result<unknown>> {
        throw new Error()
    }

    updateCharacter(characterBody: CharacterBody): Promise<Result<unknown>> {
        throw new Error()
    }


}