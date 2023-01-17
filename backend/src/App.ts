import express, {NextFunction, Request, Response} from "express";
import morgan from "morgan";
import {router as CharactersRoute} from "./routes/Characters";
import createHttpError, {isHttpError} from "http-errors";


const app = express()

app.use(morgan("dev"))

app.use((req, res, next) => {
    next(createHttpError("Endpoint not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    let errorMessage = "An unknown error occurred";
    let statusCode = 500;
    if (isHttpError(error)) {
        errorMessage = error.message
        statusCode = error.statusCode
    }
    if (error instanceof Error) errorMessage = error.message;
    res.status(statusCode).json({error: errorMessage});
});

export default app;