import { assert } from "https://deno.land/std@0.156.0/testing/asserts.ts";
import { check_response_ok } from "./check_response_ok.ts";

import {
    IDRecord,
    ResponseDeleteResult,
    ResponseResultFailure,
    ResponseResultSuccess,
} from "./cloudflare-DNS-Records-for-a-Zone.ts";
import { DNSRecord } from "./DNSRecord.ts";
import { Zone } from "./Zone.ts";

export async function json_result_response_processor<
    T extends DNSRecord[] | DNSRecord | IDRecord | Zone[] | Zone,
>(response: Response): Promise<T> {
    await check_response_ok(response);
    const result = (await response.json()) as
        | ResponseResultSuccess<T>
        | ResponseDeleteResult
        | ResponseResultFailure;
    assert(typeof result === "object", "response result json not object");
    if (
        "success" in result &&
        typeof result?.success === "boolean" &&
        result?.success === false
    ) {
        throw new Error(
            "response result failure:" + JSON.stringify(result?.errors),
        );
    }
    assert(
        "result" in result && typeof result?.result === "object",
        "result result json not object",
    );
    return result?.result as T;
}
