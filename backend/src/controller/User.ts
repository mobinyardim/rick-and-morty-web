import { RequestHandler } from "express";
import { SignUpBody } from "models/src/bodyModels/SignUpBody";
import { LoginBody } from "models/src/bodyModels/LoginBody";
import { Success } from "models/src/Result";
import { services } from "../services/Services";
import { handleFailResult } from "../utils/ControllerHelpers";

export const signUp: RequestHandler<
  unknown,
  unknown,
  SignUpBody,
  unknown
> = async (req, res) => {
  const result = await services.userService.signUp(req.body);

  if (result instanceof Success) {
    req.session.user = result.data;
    res.status(200).json(result);
  } else {
    handleFailResult(res, result);
  }
};

export const login: RequestHandler<
  unknown,
  unknown,
  LoginBody,
  unknown
> = async (req, res) => {
  const result = await services.userService.login(req.body);

  if (result instanceof Success) {
    req.session.user = result.data;
    res.status(200).json(result);
  } else {
    handleFailResult(res, result);
  }
};
