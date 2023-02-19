import { RequestHandler } from "express";
import { characterConverter } from "../converters/CharacterConverter";
import { CharacterBody } from "../bodyModels/CharacterBody";
import { services } from "../services/Services";
import { Success } from "../../../models/src/Result";
import { handleFailResult } from "../utils/ControllerHelpers";
import { PaginationQueries } from "../bodyModels/PaginationQueries";

export const getCharacters: RequestHandler<
  unknown,
  unknown,
  unknown,
  PaginationQueries
> = async (req, res) => {
  const limit = req.query.limit ?? 10;
  const offset = req.query.offset ?? 0;

  const result = await services.characterService.getCharacters(limit, offset);

  if (result instanceof Success) {
    res.status(200).json(result);
  } else {
    handleFailResult(res, result);
  }
};

interface GetCharacterParams {
  id: string;
}

export const getCharacter: RequestHandler<
  GetCharacterParams,
  unknown,
  unknown,
  unknown
> = async (req, res) => {
  const id = req.params.id;
  const result = await services.characterService.getCharacter(id);

  if (result instanceof Success) {
    res.status(200).json(result);
  } else {
    handleFailResult(res, result);
  }
};

export const createCharacter: RequestHandler<
  unknown,
  unknown,
  CharacterBody,
  unknown
> = async (req, res) => {
  const result = await services.characterService.createCharacter(
    characterConverter.bodyToEntity(req.body)
  );

  if (result instanceof Success) {
    res.status(200).json(result);
  } else {
    handleFailResult(res, result);
  }
};

export const populateDatabase: RequestHandler<
  unknown,
  unknown,
  unknown,
  unknown
> = async (req, res) => {
  const populateResponse =
    await services.characterService.populateDatabaseWithOutSource();
  if (populateResponse instanceof Success) {
    res.status(200).json(populateResponse);
  } else {
    handleFailResult(res, populateResponse);
  }
};
