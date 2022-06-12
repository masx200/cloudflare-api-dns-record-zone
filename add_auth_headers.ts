import { AuthorizationOptions } from "./cloudflare-DNS-Records-for-a-Zone.ts";

export function add_auth_headers(
    options: AuthorizationOptions,
    headers: Record<string, string>,
) {
    if ("APIToken" in options) {
        const { APIToken } = options;
        headers["Authorization"] = `Bearer ` + APIToken;
    }
    if ("AuthUserServiceKey" in options) {
        headers["X-Auth-User-Service-Key"] = options.AuthUserServiceKey;
    }
    if ("AuthEmail" in options) {
        headers["X-Auth-Email"] = options.AuthEmail;
    }
    if ("AuthKey" in options) {
        headers["X-Auth-Key"] = options.AuthKey;
    }
}
