import express from "express"
import * as CharactersController from "../controller/Characters"

export const router = express.Router();

router.get("/", CharactersController.getCharacters);
