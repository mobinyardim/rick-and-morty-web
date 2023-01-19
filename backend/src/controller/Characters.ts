import CharacterDao from "../persistence/CharacterEntity";
import {CharacterEntity} from "../persistence/CharacterEntity";
import {RequestHandler} from "express";
import {characterConverter} from "../converters/CharacterConverter";
import {Document} from "mongoose";
import {Success} from "../models/Result";

export const getCharacters: RequestHandler = async (req, res) => {
    const characters = await CharacterDao.find().exec()
    const responseArray = characters.map((value: CharacterEntity & Document, index: number, array: CharacterEntity[]) => {
        return characterConverter.toDomain(value)
    })
    res.status(200).json(
        new Success(
            "Successful",
            responseArray,
            undefined
        )
    )
}