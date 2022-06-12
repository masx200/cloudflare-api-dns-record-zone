import { add_auth_headers } from "./add_auth_headers.ts";
import { createBaseHeaders } from "./createBaseHeaders.ts";
import { CreateOptions } from "./CreateOptions.ts";
import { DNSRecord } from "./DNSRecord.ts";
import { json_result_response_processor } from "./json_result_response_processor.ts";

export async function CreateDNSRecord(
    options: CreateOptions,
): Promise<DNSRecord> {
    const { zone_id, record } = options;
    const headers: Record<string, string> = createBaseHeaders();
    add_auth_headers(options, headers);
    const response = await fetch(
        `https://api.cloudflare.com/client/v4/zones/${zone_id}/dns_records/`,
        {
            headers,
            referrerPolicy: "strict-origin-when-cross-origin",
            body: JSON.stringify(record),
            method: "POST",
        },
    );
    return await json_result_response_processor<DNSRecord>(response);
}
