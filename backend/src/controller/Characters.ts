import CharacterEntity from "../models/CharacterEntity";
import {RequestHandler} from "express";

export const getCharacters: RequestHandler = async (req, res) => {
    const characters = await CharacterEntity.find().exec()
    res.status(200).json(characters)
}