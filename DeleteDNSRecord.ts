import { add_auth_headers } from "./add_auth_headers.ts";
import { IDRecord } from "./cloudflare-DNS-Records-for-a-Zone.ts";
import { createBaseHeaders } from "./createBaseHeaders.ts";
import { DNSDetailsOptions } from "./DNSDetailsOptions.ts";
import { json_result_response_processor } from "./json_result_response_processor.ts";

export async function DeleteDNSRecord(
    options: DNSDetailsOptions,
): Promise<IDRecord> {
    const { zone_id, id } = options;
    const headers: Record<string, string> = createBaseHeaders();
    add_auth_headers(options, headers);
    const response = await fetch(
        `https://api.cloudflare.com/client/v4/zones/${zone_id}/dns_records/${id}`,
        {
            headers,
            referrerPolicy: "strict-origin-when-cross-origin",
            body: null,
            method: "DELETE",
        },
    );
    return await json_result_response_processor<IDRecord>(response);
}
