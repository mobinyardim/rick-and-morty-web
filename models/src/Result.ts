export class Success<Data> {
  message: string;
  data: Data;
  pagination?: Pagination;

  constructor(message: string, data: Data, pagination?: Pagination) {
    this.message = message;
    this.data = data;
    this.pagination = pagination;
  }
}

export class Pagination {
  totalPages: number;
  totalCount: number;

  constructor(totalPages: number, totalCount: number) {
    this.totalPages = totalPages;
    this.totalCount = totalCount;
  }
}

export type ErrorType =
  | "NOT_AUTHORIZED"
  | "BAD_REQUEST"
  | "NOT_VALID_INPUT"
  | "READ_ERROR"
  | "NOT_FOUND"
  | "UNKNOWN";

export class Fail {
  message: string;

  type: ErrorType;

  statusCode: number;

  constructor(message: string, code: number, type: ErrorType) {
    this.message = message;
    this.statusCode = code;
    this.type = type;
  }
}

export type Result<T> = Success<T> | Fail;
