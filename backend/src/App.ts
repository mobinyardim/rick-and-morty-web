import { router as CharactersRoute } from "./routes/Characters";
import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";
import cors, { CorsOptions } from "cors";
import session from "express-session";
import Env from "./utils/Env";
import MongoStore from "connect-mongo";

const corsOptions: CorsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOptions));
app.use(morgan("dev"));

app.use(express.json());

app.use(
  session({
    secret: Env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000,
    },
    rolling: true,
    store: MongoStore.create({
      mongoUrl: Env.DATABASE_URL,
    }),
  })
);

app.use("/api/v1/characters", CharactersRoute);

app.use((req, res, next) => {
  next(createHttpError("Endpoint not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = "An unknown error occurred";
  let statusCode = 500;
  if (isHttpError(error)) {
    errorMessage = error.message;
    statusCode = error.statusCode;
  }
  if (error instanceof Error) errorMessage = error.message;
  res.status(statusCode).json({ error: errorMessage });
});

export default app;
