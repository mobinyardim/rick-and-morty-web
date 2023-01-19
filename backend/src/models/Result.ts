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

export class Fail {
    message: string

    constructor(message: string) {
        this.message = message
    }

}

export type Result<T> = Success<T> | Fail;