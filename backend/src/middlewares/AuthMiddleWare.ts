import { RequestHandler } from "express";
import { Fail } from "models/src/Result";

const userAuthMiddleWare: RequestHandler = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(401).json(new Fail("Not authorized", 401, "NOT_AUTHORIZED"));
  }
};
