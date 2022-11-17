import { json_result_response_processor } from "./json_result_response_processor.ts";

import { createBaseHeaders } from "./createBaseHeaders.ts";
import { add_auth_headers } from "./add_auth_headers.ts";
import {
    AuthorizationOptions,
    PaginationOptions,
} from "./cloudflare-DNS-Records-for-a-Zone.ts";
import { set_url_search_params } from "./set_url_search_params.ts";
import { Zone } from "./Zone.ts";
import { assert } from "https://deno.land/std@0.165.0/testing/asserts.ts";

export type ListZoneOptions = AuthorizationOptions & {
    parameters?:
        & PaginationOptions
        & Partial<{
            match: string;
            name: string;
            "account.name": string;
            status: string;
            "account.id": string;
        }>;
};

export async function ListZones(options: ListZoneOptions): Promise<Zone[]> {
    const { parameters = {} } = options;
    const headers: Record<string, string> = createBaseHeaders();
    add_auth_headers(options, headers);
    const url = new URL(`https://api.cloudflare.com/client/v4/zones/`);
    set_url_search_params(url, parameters);
    const response = await fetch(url, {
        headers: headers,
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
    });
    const Zones = await json_result_response_processor<Zone[]>(response);
    assert(Array.isArray(Zones));
    return Zones;
}
