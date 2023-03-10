export class Success<Data> {
  kind: "success" = "success";

  constructor(
    public message: string,
    public data: Data,
    public pagination?: Pagination
  ) {}
}

export class Pagination {
  constructor(public totalPages: number, public totalCount: number) {}
}

export type ErrorType =
  | "NOT_AUTHORIZED"
  | "BAD_REQUEST"
  | "NOT_VALID_INPUT"
  | "READ_ERROR"
  | "NOT_FOUND"
  | "PERMISSION_DENIED"
  | "UNKNOWN";

export class Fail {
  kind: "fail" = "fail";

  constructor(
    public message: string,
    public statusCode: number,
    public type: ErrorType
  ) {}
}

export type Result<T> = Success<T> | Fail;
