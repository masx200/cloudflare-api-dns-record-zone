export type NAPTRRecord = typeof record;
const record = {
    "id": "372e67954025e0ba6aaa6d586b9e0b59",
    "type": "NAPTR" as const,
    "name": "example.com",
    "proxiable": true,
    "proxied": false,
    "ttl": 3600,
    "locked": false,
    "zone_id": "023e105f4ecef8ad9ca31a8372d0c353",
    "zone_name": "example.com",
    "created_on": "2014-01-01T05:20:00.12345Z",
    "modified_on": "2014-01-01T05:20:00.12345Z",
    "data": {
        "order": 100,
        "preference": 10,
    },
    "meta": {
        "auto_added": true,
        "source": "primary",
    },
};
