import {InferSchemaType, Schema} from "mongoose";

export const originSchema = new Schema({
    "name": {type: String, required: true},
    "url": {type: String, required: false}
})

export type OriginEntity = InferSchemaType<typeof originSchema>;
