import CharactersRemoteSource from "./CharactersRemoteSource";
import { Character } from "models/src/Character";
import { BASE_URL, LOCAL_BASE_URL } from "../common/Consts";
import axios, { AxiosRequestConfig } from "axios";
import { Success } from "models/src/Result";
import { PaginationParams } from "../common/PaginationParams";

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

  getCharacters(paginationParams: PaginationParams): Promise<Success<Character[]>> {
    const options: AxiosRequestConfig = {
      method: "GET",
      params: {
        ...paginationParams,
      },
    };

    return axios
      .get<Success<Character[]>>(`${LOCAL_BASE_URL}/characters`, options)
      .then((result) => result.data);
  }

  updateCharacter(
    id: string,
    character: Partial<Character>
  ): Promise<Character> {
    throw Error();
  }
}
