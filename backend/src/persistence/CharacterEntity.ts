import { InferSchemaType, model, Schema } from "mongoose";
import { originSchema } from "./OriginEntity";
import { locationSchema } from "./LocationEntity";

const characterEntitySchema = new Schema(
  {
    name: { type: String, required: true },
    status: {
      type: String,
      enum: ["Alive", "Dead", "Unknown"],
      required: true,
    },
    species: { type: String, required: true },
    type: { type: String, required: false },
    gender: {
      type: String,
      enum: ["Female", "Male", "Genderless", "Unknown"],
      required: true,
    },
    origin: { type: originSchema, required: true },
    location: { type: locationSchema, required: true },
    image: { type: String, required: true },
    episode: { type: [String], required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

export type CharacterEntity = InferSchemaType<typeof characterEntitySchema>;

export default model<CharacterEntity>("character", characterEntitySchema);
