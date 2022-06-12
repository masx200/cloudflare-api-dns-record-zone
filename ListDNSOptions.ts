import {
    AuthorizationOptions,
    PaginationOptions,
    ZoneOptions,
} from "./cloudflare-DNS-Records-for-a-Zone.ts";

export type ListDNSOptions =
    & ZoneOptions
    & AuthorizationOptions
    & {
        parameters?:
            & PaginationOptions
            & Partial<{
                match: string;
                name: string;
                content: string;
                type: string;
                proxied: boolean;
            }>;
    };
