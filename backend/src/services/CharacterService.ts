import {Result} from "../models/Result";
import {Character} from "../models/Character";
import {CharacterBody} from "../bodyModels/CharacterBody";

export interface CharacterService {
    getCharacters(limit: string, offset: string): Result<Array<Character>>

    getCharacter(id: string): Result<Character>

    createCharacter(characterBody: CharacterBody): Result<Character>

    updateCharacter(characterBody: CharacterBody): Result<unknown>

    deleteCharacter(characterBody: CharacterBody): Result<unknown>
}