import { ListZones } from "./List-Zones.ts";
import { test_api_token } from "./test-data/test_api_token.ts";
import {
    assert,
    assertEquals,
    assertRejects,
} from "https://deno.land/std@0.143.0/testing/asserts.ts";
import { test_zone_name } from "./test-data/test_zone_name.ts";
import { ZoneDetails } from "./Zone-Details.ts";
import { test_zone_id } from "./test-data/test_zone_id.ts";
import { ListDNSRecords } from "./ListDNSRecords.ts";

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
Deno.test("ListDNSRecords-all", async () => {
    const Records = await ListDNSRecords({
        APIToken: test_api_token,
        zone_id: test_zone_id,
    });
    assert(Array.isArray(Records));
    assert(Records.length);
    console.log(Records);
});
