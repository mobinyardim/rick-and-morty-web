import {RequestHandler} from "express";
import {characterConverter} from "../converters/CharacterConverter";
import {CharacterBody} from "../bodyModels/CharacterBody";
import {services} from "../services/Services";
import {Success} from "../models/Result";
import {handleFailResult} from "../utils/ControllerHelpers";
import {PaginationQueries} from "../bodyModels/PaginationQueries";

export const getCharacters: RequestHandler<unknown, unknown, unknown, PaginationQueries> = async (req, res) => {
    const limit = req.query.limit ?? 10
    const offset = req.query.offset ?? 0

    const result = await services.characterService.getCharacters(limit, offset)

    if (result instanceof Success) {
        res.status(200).json(result)
    } else {
        handleFailResult(res, result)
    }
}