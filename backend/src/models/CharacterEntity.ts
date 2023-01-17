import {InferSchemaType, model, Schema} from "mongoose";

const originSchema = new Schema({
    "name": {type: String, required: true},
    "url": {type: String, required: true}
})

const locationSchema = new Schema({
    "name": {type: String, required: true},
    "url": {type: String, required: true}
})

const characterEntitySchema = new Schema({
        "id": {type: String, required: true},
        "name": {type: String, required: true},
        "status": {type: String, required: true},
        "species": {type: String, required: true},
        "type": {type: String, required: true},
        "gender": {type: String, required: true},
        "origin": {type: originSchema, required: true},
        "location": {type: locationSchema, required: true},
        "image": {type: String, required: true},
        "episode": {type: [String], required: true},
        "url": {type: String, required: true},
    }, {timestamps: true}
)

type CharacterEntity = InferSchemaType<typeof characterEntitySchema>;

export default model<CharacterEntity>("character", characterEntitySchema)

