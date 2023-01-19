import {RequestHandler} from "express";
import {characterConverter} from "../converters/CharacterConverter";
import {CharacterBody} from "../bodyModels/CharacterBody";
import {services} from "../services/Services";
import {Success} from "../models/Result";
import {handleFailResult} from "../utils/ControllerHelpers";

export const getCharacters: RequestHandler = async (req, res) => {

    const result = await services.characterService.getCharacters(10, 0)

    if (result instanceof Success) {
        res.status(200).json(result)
    } else {
        handleFailResult(res, result)
    }
}