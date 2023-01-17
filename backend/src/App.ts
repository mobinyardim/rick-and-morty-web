import express from "express";
import {router as CharactersRoute} from "./routes/Characters";


const app = express()

app.use(CharactersRoute)

export default app;