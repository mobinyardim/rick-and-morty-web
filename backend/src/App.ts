import express from "express";
import CharacterEntity from "./models/CharacterEntity";

const app = express()

app.get("/", async (req, res) => {
    const characters = await CharacterEntity.find().exec()
    res.status(200).json(characters)

});

export default app;