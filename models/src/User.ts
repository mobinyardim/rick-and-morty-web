export class User {
  id: string;

  fullName?: string;
  username: string;

  email: string;

  isVerified: boolean;

  avatar?: string;

  constructor(
    id: string,
    username: string,
    email: string,
    isVerified: boolean,
    avatar?: string,
    fullName?: string
  ) {
    this.id = id;
    this.fullName = fullName;
    this.username = username;
    this.email = email;
    this.isVerified = isVerified;
    this.avatar = avatar;
  }
}
