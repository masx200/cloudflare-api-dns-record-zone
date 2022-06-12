export type ResponseDeleteResult = typeof response_delete_result;
const response_delete_result = {
    result: {
        id: "372e67954025e0ba6aaa6d586b9e0b59",
    },
};
export type IDRecord = ResponseDeleteResult["result"];

export type PaginationOptions = Partial<{
    page: number;
    per_page: number;
    order: string;
    direction: "asc" | "desc";
}>;
export type ZoneOptions = { zone_id: string };
export type AuthorizationOptions =
    | {
        APIToken: string;
    }
    | { AuthEmail: string; AuthKey: string }
    | { AuthUserServiceKey: string };

export type ResultInfo = typeof result_info;
const result_info = {
    page: 1,
    per_page: 20,
    count: 1,
    total_count: 200,
};
export type ResponseResultSuccess<T> = {
    success: true;
    errors: ResponseResultError[];
    messages: ResponseResultMessage[];
    result: T;
    result_info?: ResultInfo;
};
export type ResponseResultFailure = {
    success: false;
    errors: ResponseResultError[];
};
export type ResponseResultMessage = ResponseResultError;
export type ResponseResultError = typeof response_result_error;
const response_result_error = {
    code: 9106,
    message: "Missing X-Auth-Key, X-Auth-Email or Authorization headers",
};
