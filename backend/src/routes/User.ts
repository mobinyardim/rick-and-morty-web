import * as UserController from "../controller/User";
import express from "express";

export const router = express.Router();

router.post("/signUp", UserController.signUp);

router.post("/login", UserController.login);

router.get("/:id?", UserController.getUser);

router.delete("/logout", UserController.logout);
