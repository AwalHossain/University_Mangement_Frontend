
export interface IMeta {
    page: number;
    limit: number;
    size: number;
}

export interface IGenericErrorResponse {
    statusCode: number;
    message: string;
    errorMessages?: string[];
}

export interface ResponseSuccessType {
    data: any;
    meta?: IMeta;
}