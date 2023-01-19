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

export type ErrorType = "NOT_AUTHORIZED" | "READ_ERROR"

export class Fail {
    message: string

    type: ErrorType

    constructor(
        message: string,
        type: ErrorType
    ) {
        this.message = message
        this.type = type
    }

}

export type Result<T> = Success<T> | Fail;