import {Response} from "express";
import {Fail} from "../models/Result";

export function handleFailResult(res: Response, result: Fail) {
    res.status(result.statusCode).json(result)
}