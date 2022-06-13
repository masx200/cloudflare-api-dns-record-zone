import { add_auth_headers } from "./add_auth_headers.ts";
import {
    AuthorizationOptions,
    ZoneOptions,
} from "./cloudflare-DNS-Records-for-a-Zone.ts";
import { createBaseHeaders } from "./createBaseHeaders.ts";
import { DNSRecord } from "./DNSRecord.ts";
import { json_result_response_processor } from "./json_result_response_processor.ts";
export type UpdateOptions =
    & ZoneOptions
    & AuthorizationOptions
    & {
        id: string;
    }
    & {
        record: {
            ttl: number;
            name: string;
            content?: string;
            type: string;
            proxied?: boolean;
            priority?: number;
        } & Partial<DNSRecord>;
    };
export async function UpdateDNSRecord(
    options: UpdateOptions,
): Promise<DNSRecord> {
    const { record, zone_id, id } = options;
    const headers: Record<string, string> = createBaseHeaders();
    add_auth_headers(options, headers);
    const response = await fetch(
        `https://api.cloudflare.com/client/v4/zones/${zone_id}/dns_records/${id}`,
        {
            headers,
            referrerPolicy: "strict-origin-when-cross-origin",
            body: JSON.stringify(record),
            method: "PUT",
        },
    );
    return await json_result_response_processor<DNSRecord>(response);
}
