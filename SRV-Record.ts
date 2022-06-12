export type SRVRecord = typeof record;
const record = {
    "id": "372e67954025e0ba6aaa6d586b9e0b59",
    "type": "SRV" as const,
    "name": "_sip._tcp.example.com",
    "content": "10 IN SRV 5 8806 example.com.",
    "proxiable": true,
    "proxied": false,
    "ttl": 3600,
    "locked": false,
    "zone_id": "023e105f4ecef8ad9ca31a8372d0c353",
    "zone_name": "example.com",
    "created_on": "2014-01-01T05:20:00.12345Z",
    "modified_on": "2014-01-01T05:20:00.12345Z",
    "data": {
        "service": "_sip",
        "proto": "_tcp",
        "name": "example.com",
        "priority": 10,
        "weight": 5,
        "port": 8806,
        "target": "example.com",
    },
    "meta": {
        "auto_added": true,
        "source": "primary",
    },
};
