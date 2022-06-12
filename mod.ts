import { AAAARecord } from "./AAAARecord.ts";
import { ARecord } from "./ARecord.ts";
import { CERTRecord } from "./CERTRecord.ts";
import {
    AuthorizationOptions,
    PaginationOptions,
    ZoneOptions,
} from "./cloudflare-DNS-Records-for-a-Zone.ts";
import { CNAMERecord } from "./CNAME-Record.ts";
import { CreateDNSRecord } from "./CreateDNSRecord.ts";
import { CreateOptions } from "./CreateOptions.ts";
import { DeleteDNSRecord } from "./DeleteDNSRecord.ts";
import { DNSDetailsOptions } from "./DNSDetailsOptions.ts";
import { DNSKEYRecord } from "./DNSKEYRecord.ts";
import { DNSRecord, DNSRecordType } from "./DNSRecord.ts";
import { DNSRecordDetails } from "./DNSRecordDetails.ts";
import { DSRecord } from "./DSRecord.ts";
import { HTTPSRecord } from "./HTTPSRecord.ts";
import { ListZoneOptions, ListZones } from "./List-Zones.ts";
import { ListDNSRecords } from "./ListDNSRecords.ts";
import { ListDNSOptions } from "./ListDNSOptions.ts";
import { LOCRecord } from "./LOC-Record.ts";
import { MXRecord } from "./MX-Record.ts";
import { NAPTRRecord } from "./NAPTRRecord.ts";
import { NSRecord } from "./NS-Record.ts";
import { PatchDNSRecord, PatchOptions } from "./PatchDNSRecord.ts";
import { SMIMEARecord } from "./SMIMEARecord.ts";
import { SRVRecord } from "./SRV-Record.ts";
import { SSHFPRecord } from "./SSHFPRecord.ts";
import { SVCBRecord } from "./SVCBRecord.ts";
import { TLSARecord } from "./TLSARecord.ts";
import { TXTRecord } from "./TXT-Record.ts";
import { UpdateDNSRecord, UpdateOptions } from "./UpdateDNSRecord.ts";
import { URIRecord } from "./URI-Record.ts";
import { Zone } from "./Zone.ts";
import { ZoneDetails, ZoneDetailsOptions } from "./Zone-Details.ts";
export {
    CreateDNSRecord,
    DeleteDNSRecord,
    DNSRecordDetails,
    ListDNSRecords,
    ListZones,
    PatchDNSRecord,
    UpdateDNSRecord,
    ZoneDetails,
};
export type { DNSRecordType, ZoneDetailsOptions };
export type { Zone };
export type { ListZoneOptions };
export type { PaginationOptions };
export type { AuthorizationOptions, ZoneOptions };
export type { CreateOptions };
export type { DNSDetailsOptions };
export type { ListDNSOptions };
export type { PatchOptions, UpdateOptions };
export type {
    AAAARecord,
    ARecord,
    CERTRecord,
    CNAMERecord,
    DNSKEYRecord,
    DNSRecord,
    DSRecord,
    HTTPSRecord,
    LOCRecord,
    MXRecord,
    NAPTRRecord,
    NSRecord,
    SMIMEARecord,
    SRVRecord,
    SSHFPRecord,
    SVCBRecord,
    TLSARecord,
    TXTRecord,
    URIRecord,
};
