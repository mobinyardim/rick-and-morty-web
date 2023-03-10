import { RequestHandler } from "express";
import { Fail } from "models/src/Result";

export const userAuthMiddleWare: RequestHandler = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(401).json(new Fail("Not authorized", 401, "NOT_AUTHORIZED"));
  }
};

export const adminAuthMiddleWare: RequestHandler = (req, res, next) => {
  if (req.session.user && req.session.user.isAdmin) {
    next();
  } else if (!req.session.user) {
    res.status(401).json(new Fail("Not authorized", 401, "NOT_AUTHORIZED"));
  } else {
    res
      .status(403)
      .json(new Fail("Permission denied", 403, "PERMISSION_DENIED"));
  }
};
