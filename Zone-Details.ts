import { json_result_response_processor } from "./json_result_response_processor.ts";

import { createBaseHeaders } from "./createBaseHeaders.ts";
import { add_auth_headers } from "./add_auth_headers.ts";
import { AuthorizationOptions } from "./cloudflare-DNS-Records-for-a-Zone.ts";
import { Zone } from "./Zone.ts";

export type ZoneDetailsOptions = { id: string } & AuthorizationOptions;

export async function ZoneDetails(options: ZoneDetailsOptions): Promise<Zone> {
    const { id } = options;
    const headers: Record<string, string> = createBaseHeaders();
    add_auth_headers(options, headers);
    const url = new URL(`https://api.cloudflare.com/client/v4/zones/` + id);

    const response = await fetch(url, {
        headers: headers,
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
    });
    return await json_result_response_processor<Zone>(response);
}
