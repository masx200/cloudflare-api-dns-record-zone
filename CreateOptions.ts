import { DNSRecord } from "./DNSRecord.ts";
import {
    AuthorizationOptions,
    ZoneOptions,
} from "./cloudflare-DNS-Records-for-a-Zone.ts";

export type CreateOptions =
    & ZoneOptions
    & AuthorizationOptions
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
