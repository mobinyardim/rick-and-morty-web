import { CharacterService } from "./CharacterService";
import { CharacterBody } from "../../bodyModels/CharacterBody";
import {
  Fail,
  Pagination,
  Result,
  Success,
} from "../../../../models/src/Result";
import { Character } from "../../../../models/src/Character";
import CharacterDao, {
  CharacterEntity,
} from "../../persistence/CharacterEntity";
import { Document, Error as ValidatorError, isValidObjectId } from "mongoose";
import { characterConverter } from "../../converters/CharacterConverter";
import axios, { AxiosResponse } from "axios";
import { OutSourceResult } from "../transferModels/OutSourceResult";

export class CharacterServiceImpl implements CharacterService {
  async getCharacters(
    limit: number,
    offset: number
  ): Promise<Result<Array<Character>>> {
    let characters;
    try {
      characters = await CharacterDao.find().limit(limit).skip(offset).exec();
    } catch (e: any) {
      const message = e.message ?? "Unknown Error";
      return new Fail(message, 500, "READ_ERROR");
    }

    const responseArray = characters.map(
      (
        value: CharacterEntity & Document,
        index: number,
        array: CharacterEntity[]
      ) => {
        return characterConverter.toDomain(value);
      }
    );
    const count = await CharacterDao.countDocuments();

    return new Success(
      "Successful",
      responseArray,
      new Pagination(Math.ceil(count / limit), count)
    );
  }

  async getCharacter(id: string): Promise<Result<Character>> {
    if (!isValidObjectId(id)) {
      return new Fail("Id is not valid!", 401, "NOT_VALID_INPUT");
    }
    try {
      const character = await CharacterDao.findById(id).exec();
      if (character) {
        return new Success(
          "Successful",
          characterConverter.toDomain(character)
        );
      } else {
        return new Fail("Character with this id not found!", 404, "NOT_FOUND");
      }
    } catch (e: any) {
      return new Fail(e.message, 500, "READ_ERROR");
    }
  }

  async createCharacter(
    characterBody: CharacterBody
  ): Promise<Result<Character>> {
    const body = characterConverter.bodyToEntity(characterBody);
    try {
      const character = await body.save();

      return new Success("Successful", characterConverter.toDomain(character));
    } catch (e: any) {
      const message = e.message ?? "Unknown Error";

      if (e instanceof ValidatorError) {
        return new Fail(message, 401, "NOT_VALID_INPUT");
      }
      return new Fail(message, 500, "READ_ERROR");
    }
  }

  deleteCharacter(characterBody: CharacterBody): Promise<Result<unknown>> {
    throw new Error();
  }

  updateCharacter(characterBody: CharacterBody): Promise<Result<unknown>> {
    throw new Error();
  }

  async getOutSourceCharacters(page: string): Promise<Result<Character[]>> {
    return axios
      .get<OutSourceResult<Character[]>>(
        "https://rickandmortyapi.com/api/character",
        {
          params: {
            page: page,
          },
        }
      )
      .then((result: AxiosResponse<OutSourceResult<Character[]>>) => {
        return new Success(
          "success",
          result.data.results,
          new Pagination(result.data.info.pages, result.data.info.count)
        );
      });
  }

  async populateDatabaseWithOutSource(): Promise<Result<unknown>> {
    for (let page = 1; ; page++) {
      const response = await this.getOutSourceCharacters(`${page}`);
      console.log("data fetched");
      if (response && response instanceof Success) {
        console.log(typeof response.data);
        for (const item of response.data as Array<Character>) {
          try {
            await this.createCharacter(item);
            console.log(`charachter ${item.id} ${item.name} added`);
          } catch (e: any) {
            console.log(
              `charachter ${item.id} ${item.name} error ${e.message}`
            );
          }
        }
        console.log(
          `current:${page} total:${response.pagination?.totalPages ?? 0}`
        );
        if (page >= (response.pagination?.totalPages ?? 0)) {
          return response;
        }
      } else {
        return response;
      }
    }
  }
}