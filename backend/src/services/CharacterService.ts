import {Result} from "../../../models/src/Result";
import {Character} from "../../../models/src/Character";
import {CharacterBody} from "../bodyModels/CharacterBody";

export abstract class CharacterService {
    abstract getCharacters(limit: number, offset: number): Promise<Result<Array<Character>>>

    abstract getCharacter(id: string): Promise<Result<Character>>

    abstract createCharacter(characterBody: CharacterBody): Promise<Result<Character>>

    abstract updateCharacter(characterBody: CharacterBody): Promise<Result<unknown>>

    abstract deleteCharacter(characterBody: CharacterBody): Promise<Result<unknown>>
}