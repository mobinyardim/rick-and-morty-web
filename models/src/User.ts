export class User {
  constructor(
    public id: string,
    public username: string,
    public email: string,
    public isVerified: boolean,
    public avatar?: string,
    public fullName?: string,
    public isAdmin: boolean = false
  ) {}
}
