import { CharacterService } from "./character/CharacterService";
import { CharacterServiceImpl } from "./character/CharacterServiceImpl";
import { UserService } from "./user/UserService";
import { UserServiceImpl } from "./user/UserServiceImpl";

export const services = {
  characterService: <CharacterService>new CharacterServiceImpl(),
  userService: <UserService>new UserServiceImpl(),
};
