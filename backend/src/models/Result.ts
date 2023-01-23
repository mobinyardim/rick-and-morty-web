export class Success<Data> {
    message: string
    data: Data
    pagination?: Pagination

    constructor(
        message: string,
        data: Data,
        pagination?: Pagination
    ) {
        this.message = message;
        this.data = data;
        this.pagination = pagination;
    }

}

export class Pagination {
    constructor(totalPages: number, totalCount: number) {
        this.totalPages = totalPages;
        this.totalCount = totalCount;
    }

    totalPages: number
    totalCount: number
}

export type ErrorType = "NOT_AUTHORIZED" | "NOT_VALID_INPUT" | "READ_ERROR" | "NOT_FOUND" | "UNKNOWN"

export class Fail {
    message: string

    type: ErrorType

    statusCode: number

    constructor(
        message: string,
        code: number,
        type: ErrorType
    ) {
        this.message = message
        this.statusCode = code
        this.type = type
    }

}

export type Result<T> = Success<T> | Fail;