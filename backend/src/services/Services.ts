import {CharacterService} from "./CharacterService";
import {CharacterServiceImpl} from "./CharacterServiceImpl";

export const services = {
    characterService: <CharacterService>new CharacterServiceImpl()
}