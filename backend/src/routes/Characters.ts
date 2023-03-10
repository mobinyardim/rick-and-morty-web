import express from "express";
import * as CharactersController from "../controller/Characters";
import {
  adminAuthMiddleWare,
  userAuthMiddleWare,
} from "../middlewares/AuthMiddleWare";

export const router = express.Router();

router.get("/", CharactersController.getCharacters);

router.post(
  "/populate",
  userAuthMiddleWare,
  adminAuthMiddleWare,
  CharactersController.populateDatabase
);

router.get("/:id", CharactersController.getCharacter);

router.post(
  "/",
  userAuthMiddleWare,
  adminAuthMiddleWare,
  CharactersController.createCharacter
);
