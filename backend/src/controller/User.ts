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

  if (result.kind == "success") {
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

  if (result.kind == "success") {
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
    if (result.kind == "success") {
      res.status(200).json(result);
    } else {
      handleFailResult(res, result);
    }
  } else {
    res.status(500).json(new Fail("unknown error happen!", 500, "UNKNOWN"));
  }
};

export const logout: RequestHandler<
  unknown,
  unknown,
  unknown,
  unknown
> = async (req, res) => {
  if (req.session.user) {
    req.session.destroy((err) => {
      if (err) {
        res.status(200).json(new Success<null>("logout successfully!", null));
      } else {
        console.error(err);
        res.status(500).json(new Fail(`${err.message}`, 500, "UNKNOWN"));
      }
    });
  } else {
    console.error("unknown");
    res.status(500).json(new Fail("unknown error happen!", 500, "UNKNOWN"));
  }
};
