import { ListZones } from "./List-Zones.ts";
import { test_api_token } from "./test-data/test_api_token.ts";
import {
    assert,
    assertEquals,
    assertRejects,
} from "https://deno.land/std@0.220.1/testing/asserts.ts";
import { test_zone_name } from "./test-data/test_zone_name.ts";
import { ZoneDetails } from "./Zone-Details.ts";
import { test_zone_id } from "./test-data/test_zone_id.ts";
import { ListDNSRecords } from "./ListDNSRecords.ts";
import {
    test_dns_content1,
    test_dns_content2,
    test_dns_name,
    test_dns_type,
} from "./test-data/test_dns_name.ts";
import { CreateDNSRecord } from "./CreateDNSRecord.ts";
import { DNSRecordDetails } from "./DNSRecordDetails.ts";
import { UpdateDNSRecord } from "./UpdateDNSRecord.ts";
import { AAAARecord } from "./AAAARecord.ts";
import { PatchDNSRecord } from "./PatchDNSRecord.ts";
import { DeleteDNSRecord } from "./DeleteDNSRecord.ts";

Deno.test("ListZones-all", async () => {
    const Zones = await ListZones({ APIToken: test_api_token });
    assert(Array.isArray(Zones));
    assert(Zones.length);
    console.log(Zones);
});

Deno.test("ListZones-all-error-api-token", async () => {
    console.warn(
        await assertRejects(async () => {
            await ListZones({ APIToken: "0".repeat(40) });
        }, "Invalid access token"),
    );
});

Deno.test("ListZones-filter-name", async () => {
    const Zones = await ListZones({
        APIToken: test_api_token,
        parameters: { name: test_zone_name },
    });
    assert(Array.isArray(Zones));
    assert(Zones.length);
    console.log(Zones);
    assert(Zones.some((zone) => zone.name === test_zone_name));
});

Deno.test("ZoneDetails", async () => {
    const zone = await ZoneDetails({
        APIToken: test_api_token,
        id: test_zone_id,
    });
    console.log(zone);
    assertEquals(zone.id, test_zone_id);
});

Deno.test("DNSRecords", async (context) => {
    let id: string | undefined;
    await context.step(
        "ListDNSRecords-filter-name-type-UpdateDNSRecord-or-CreateDNSRecord",
        async () => {
            const Records = await ListDNSRecords({
                APIToken: test_api_token,
                zone_id: test_zone_id,
                parameters: { name: test_dns_name, type: test_dns_type },
            });
            console.log(Records);
            const record = {
                ttl: 1,
                type: test_dns_type,
                name: test_dns_name,
                content: test_dns_content1,
            } as const;
            if (Records.length) {
                id = Records[0].id;

                const updated = await UpdateDNSRecord({
                    APIToken: test_api_token,
                    zone_id: test_zone_id,
                    id: id,
                    record,
                });
                console.log(updated);
                assertEquals(id, updated.id);
            } else {
                const created = await CreateDNSRecord({
                    APIToken: test_api_token,
                    zone_id: test_zone_id,
                    record: record,
                });
                console.log(created);
                id = created.id;
            }
            assert(typeof id === "string");
        },
    );
    assert(typeof id === "string");
    await context.step("ListDNSRecords-all", async () => {
        const Records = await ListDNSRecords({
            APIToken: test_api_token,
            zone_id: test_zone_id,
        });
        assert(Array.isArray(Records));
        assert(Records.length);
        console.log(Records);
    });

    await context.step("DNSRecordDetails", async () => {
        assert(typeof id === "string");
        const details = (await DNSRecordDetails({
            APIToken: test_api_token,
            zone_id: test_zone_id,
            id: id,
        })) as AAAARecord;
        console.log(details);
        assertEquals(id, details.id);
        assertEquals(details.type, test_dns_type);
        assertEquals(details.name, test_dns_name);
        assertEquals(details.content, test_dns_content1);
    });
    await context.step("ListDNSRecords-filter-name-type", async () => {
        const Records = await ListDNSRecords({
            APIToken: test_api_token,
            zone_id: test_zone_id,
            parameters: { name: test_dns_name, type: test_dns_type },
        });
        assert(Array.isArray(Records));
        assert(Records.length);
        console.log(Records);
        assert(
            Records.some(
                (record) =>
                    record.name === test_dns_name &&
                    record.type === test_dns_type,
            ),
        );
    });
    await context.step("PatchDNSRecord", async () => {
        assert(typeof id === "string");
        const details = (await PatchDNSRecord({
            APIToken: test_api_token,
            zone_id: test_zone_id,
            id: id,
            record: { content: test_dns_content2 },
        })) as AAAARecord;
        console.log(details);
        assertEquals(id, details.id);
        assertEquals(details.type, test_dns_type);
        assertEquals(details.name, test_dns_name);
        assertEquals(details.content, test_dns_content2);
    });
    await context.step("DeleteDNSRecord", async () => {
        assert(typeof id === "string");
        const details = await DeleteDNSRecord({
            APIToken: test_api_token,
            zone_id: test_zone_id,
            id: id,
        });
        console.log(details);
        assertEquals(id, details.id);
    });
    await context.step("ListDNSRecords-filter-name-type", async () => {
        const Records = await ListDNSRecords({
            APIToken: test_api_token,
            zone_id: test_zone_id,
            parameters: { name: test_dns_name, type: test_dns_type },
        });
        assert(Array.isArray(Records));
        assertEquals(0, Records.length);
        console.log(Records);
    });
});
