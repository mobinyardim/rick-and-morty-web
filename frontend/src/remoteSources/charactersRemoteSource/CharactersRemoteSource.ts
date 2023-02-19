import { Character } from "models/src/Character";
import { Success } from "models/src/Result";
import { PaginationParams } from "../common/PaginationParams";

interface CharactersRemoteSource {
  getCharacters(pagination?: PaginationParams): Promise<Success<Character[]>>;

  getCharacter(id: string): Promise<Character>;

  addCharacter(character: Omit<Character, "id">): Promise<Character>;

  updateCharacter(
    id: string,
    character: Partial<Character>
  ): Promise<Character>;
}

export default CharactersRemoteSource;
