export interface CveServicesCveRecordInfo {
    message?: string;
    cve_id: string;
    cve_year: string;
    owning_cna: string;
    state: "RESERVED";
    requested_by: {
        cna: string;
        user: string;
    };
    reserved: string;
    time: {
        created: string;
        modified: string;
    };
}
export declare class CveRecordInfo implements CveServicesCveRecordInfo {
    message?: string;
    cve_id: string;
    cve_year: string;
    owning_cna: string;
    state: 'RESERVED';
    requested_by: {
        cna: string;
        user: string;
    };
    reserved: string;
    time: {
        created: string;
        modified: string;
    };
    sourceObj: unknown;
    constructor(obj: CveServicesCveRecordInfo);
}
