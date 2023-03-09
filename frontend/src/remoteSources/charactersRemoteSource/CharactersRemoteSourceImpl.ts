import CharactersRemoteSource from "./CharactersRemoteSource";
import { Character } from "models/src/Character";
import axios, { AxiosRequestConfig } from "axios";
import { Result, Success } from "models/src/Result";
import { PaginationParams } from "../common/PaginationParams";
import { convertAxiosFailToFailResult } from "../common/Utils";
import { API_BASE_URL } from "../common/Consts";

export class CharactersRemoteSourceImpl implements CharactersRemoteSource {
  async addCharacter(character: Omit<Character, "id">): Promise<Character> {
    const options: AxiosRequestConfig<Omit<Character, "id">> = {
      method: "POST",
    };

    return axios
      .post<Character>(`${API_BASE_URL}/api/v1/characters`, character, options)
      .then((result) => {
        return result.data;
      });
  }

  getCharacter(id: string): Promise<Character> {
    throw Error();
  }

  getCharacters(
    paginationParams: PaginationParams
  ): Promise<Result<Character[]>> {
    const options: AxiosRequestConfig = {
      method: "GET",
      params: {
        ...paginationParams,
      },
    };

    return axios
      .get<Success<Character[]>>(`${API_BASE_URL}/api/v1/characters`, options)
      .then((result) => {
        return result.data;
      })
      .catch((reason) => {
        return convertAxiosFailToFailResult(reason);
      });
  }

  updateCharacter(
    id: string,
    character: Partial<Character>
  ): Promise<Character> {
    throw Error();
  }
}
