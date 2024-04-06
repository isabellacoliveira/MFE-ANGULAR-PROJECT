export interface IApiResponse<T = null> {
    success: boolean;
    errors: string[];
    data: T;
}
