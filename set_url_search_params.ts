export function set_url_search_params(
    url: URL,
    parameters: Record<string, string | number | boolean> = {},
) {
    if (Object.keys(parameters).length) {
        url.search = String(
            new URLSearchParams(
                Object.entries(parameters).map(([key, value]) => [
                    key,
                    String(value),
                ]),
            ),
        );
    }
}
