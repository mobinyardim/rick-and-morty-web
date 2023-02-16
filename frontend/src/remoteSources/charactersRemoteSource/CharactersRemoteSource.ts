import { Character } from "models/src/Character";

interface CharactersRemoteSource {
  getCharacters(): Promise<Array<Character>>;

  getCharacter(id: string): Promise<Character>;

  addCharacter(character: Omit<Character, "id">): Promise<Character>;

  updateCharacter(
    id: string,
    character: Partial<Character>
  ): Promise<Character>;
}

export default CharactersRemoteSource;
