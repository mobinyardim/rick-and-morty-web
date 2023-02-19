import { InferSchemaType, Schema } from "mongoose";

export const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, required: false, default: false },
  avatar: { type: String, required: false },
});

export type UserEntity = InferSchemaType<typeof UserSchema>;
