import CharactersRemoteSource from "./CharactersRemoteSource";
import { Character } from "models/src/Character";
import { BASE_URL } from "../common/Consts";
import axios, { AxiosRequestConfig } from "axios";

export class CharactersRemoteSourceImpl implements CharactersRemoteSource {
  async addCharacter(character: Omit<Character, "id">): Promise<Character> {
    const options: AxiosRequestConfig<Omit<Character, "id">> = {
      method: "POST",
    };

    return axios
      .post<Character>(`${BASE_URL}/characters`, character, options)
      .then((result) => {
        return result.data;
      });
  }

  getCharacter(id: string): Promise<Character> {
    throw Error();
  }

  getCharacters(): Promise<Array<Character>> {
    throw Error();
  }

  updateCharacter(
    id: string,
    character: Partial<Character>
  ): Promise<Character> {
    throw Error();
  }
}
