import { CharacterService } from "./character/CharacterService";
import { CharacterServiceImpl } from "./character/CharacterServiceImpl";

export const services = {
  characterService: <CharacterService>new CharacterServiceImpl(),
};
