import { json_result_response_processor } from "./json_result_response_processor.ts";
import { DNSRecord } from "./DNSRecord.ts";
import { ListDNSOptions } from "./ListDNSOptions.ts";
import { createBaseHeaders } from "./createBaseHeaders.ts";
import { add_auth_headers } from "./add_auth_headers.ts";
import { set_url_search_params } from "./set_url_search_params.ts";
import { assert } from "https://deno.land/std@0.220.1/testing/asserts.ts";

export async function ListDNSRecords(
    options: ListDNSOptions,
): Promise<DNSRecord[]> {
    const { zone_id, parameters = {} } = options;
    const headers: Record<string, string> = createBaseHeaders();
    add_auth_headers(options, headers);
    const url = new URL(
        `https://api.cloudflare.com/client/v4/zones/${zone_id}/dns_records/`,
    );
    set_url_search_params(url, parameters);
    const response = await fetch(url, {
        headers: headers,
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
    });
    const records = await json_result_response_processor<DNSRecord[]>(response);
    assert(Array.isArray(records));
    return records;
}
