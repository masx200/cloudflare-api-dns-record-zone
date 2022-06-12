import { AAAARecord } from "./AAAARecord.ts";
import { ARecord } from "./ARecord.ts";
import { CERTRecord } from "./CERTRecord.ts";
import { CNAMERecord } from "./CNAME-Record.ts";
import { HTTPSRecord } from "./HTTPSRecord.ts";
import { LOCRecord } from "./LOC-Record.ts";
import { MXRecord } from "./MX-Record.ts";
import { NSRecord } from "./NS-Record.ts";
import { SRVRecord } from "./SRV-Record.ts";
import { SSHFPRecord } from "./SSHFPRecord.ts";
import { SVCBRecord } from "./SVCBRecord.ts";
import { TLSARecord } from "./TLSARecord.ts";
import { TXTRecord } from "./TXT-Record.ts";
import { URIRecord } from "./URI-Record.ts";
import { DNSKEYRecord } from "./DNSKEYRecord.ts";
import { DSRecord } from "./DSRecord.ts";
import { NAPTRRecord } from "./NAPTRRecord.ts";
import { SMIMEARecord } from "./SMIMEARecord.ts";

export type DNSRecord =
    | SMIMEARecord
    | NAPTRRecord
    | DSRecord
    | DNSKEYRecord
    | SVCBRecord
    | TLSARecord
    | URIRecord
    | SRVRecord
    | LOCRecord
    | MXRecord
    | AAAARecord
    | ARecord
    | CNAMERecord
    | TXTRecord
    | HTTPSRecord
    | NSRecord
    | CERTRecord
    | SSHFPRecord;
export type DNSRecordType = DNSRecord["type"];
