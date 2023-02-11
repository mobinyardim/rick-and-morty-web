import express from "express"
import * as CharactersController from "../controller/Characters"

export const router = express.Router();

router.get("/", CharactersController.getCharacters);

router.post("/populate", CharactersController.populateDatabase);

router.get("/:id", CharactersController.getCharacter);

router.post("/", CharactersController.createCharacter);
