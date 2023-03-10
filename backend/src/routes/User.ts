import * as UserController from "../controller/User";
import express from "express";
import { userAuthMiddleWare } from "../middlewares/AuthMiddleWare";

export const router = express.Router();

router.post("/signUp", UserController.signUp);

router.post("/login", UserController.login);

router.get("/:id?", userAuthMiddleWare, UserController.getUser);

router.delete("/logout", userAuthMiddleWare, UserController.logout);
