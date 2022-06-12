import {
    AuthorizationOptions,
    ZoneOptions,
} from "./cloudflare-DNS-Records-for-a-Zone.ts";

export type DNSDetailsOptions =
    & ZoneOptions
    & AuthorizationOptions
    & {
        id: string;
    };
