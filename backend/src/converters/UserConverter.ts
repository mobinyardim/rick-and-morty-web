import { Converter } from "./Converter";
import { UserEntity } from "../persistence/UserEntity";
import { User } from "models/src/User";

export const userConverter: Converter<UserEntity, unknown, User> = {
  toDomain(user: UserEntity): User {
    return new User(user.username, user.email, user.isVerified, user.avatar);
  },

  toEntity(domain: User): UserEntity {
    throw new Error();
  },
  bodyToEntity(transfer: unknown): UserEntity {
    throw new Error();
  },
};
