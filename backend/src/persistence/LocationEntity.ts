import {InferSchemaType, Schema} from "mongoose";

export const locationSchema = new Schema({
    "name": {type: String, required: true},
    "url": {type: String, required: false}
})

export type LocationEntity = InferSchemaType<typeof locationSchema>;
