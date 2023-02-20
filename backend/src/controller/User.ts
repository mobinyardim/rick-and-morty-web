import { RequestHandler } from "express";
import { SignUpBody } from "models/src/bodyModels/SignUpBody";
import { LoginBody } from "models/src/bodyModels/LoginBody";
import { Fail, Success } from "models/src/Result";
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

interface GetUserParams {
  id?: string;
}

export const getUser: RequestHandler<
  GetUserParams,
  unknown,
  unknown,
  unknown
> = async (req, res) => {
  const userId = req.params.id ?? req.session.user?.id;

  if (userId) {
    const result = await services.userService.getUser(userId);
    if (result instanceof Success) {
      res.status(200).json(result);
    } else {
      handleFailResult(res, result);
    }
  } else {
    handleFailResult(res, new Fail("Not Authorized", 401, "NOT_AUTHORIZED"));
  }
};
