/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
/// <reference types="c:/users/njaffe/documents/dev-team/cve-utils-branches/features/cveservices-adapter/node_modules/fetch-retry/index.js" />
import { CveService } from './CveService.js';
import { CveServiceCredSet } from './CveServiceCredSet.js';
import { CveRecord } from '../../core/CveRecord.js';
import { CveRecordInfo, CveServicesCveRecordInfo } from '../../core/CveRecordInfo.js';
declare type CveServiceGETCveIdRawEndpointReturnSchema = {
    totalCount: number;
    itemsPerPage: number;
    pageCount: number;
    currentPage: number;
    prevPage: number;
    nextPage: number;
    cve_ids: CveServicesCveRecordInfo[];
};
declare type CveServicesGETErrorEndpointReturnSchema = {
    message: string;
    error: string;
    details?: [
        {
            msg: string;
            param: string;
            location: any;
        }
    ];
};
/**
 * Main class that provides functional READ access to the /cve-id Services API
 * Note that the url of the CVE Services API, username, password, tokens, etc., all need to be
 * set in the project's .env file.
 *
 */
export declare class CveServiceCveIdReader extends CveService {
    /** This is only publicly accessable so that proper testing can be done. */
    readonly _fetchRetry: (input: string | URL | Request, init?: import("fetch-retry").RequestInitWithRetry<typeof fetch>) => Promise<Response>;
    protected MAX_READ_RETRY: number;
    constructor(host: string, credSet: CveServiceCredSet);
    getAllCvesChangedInTimeFrame(start: string, stop: string): Promise<CveRecord[]>;
    /** async method that returns some information about the the CVE Services API
     * Note:  Avoid using this since it is expensive and can run as long as 15 seconds
     * @return an object with information about the CVE Services API
     */
    getCveSummary(): Promise<{
        totalCves: number;
        totalCvePages: number;
        cvesPerPage: number;
    }>;
    /**
     * Wrapper for `/cve-id`
     * @param queryString query string corresponding to any of the query parameters allowed by the /cve endpoint (e.g., page=5)
     * @throws Error if failure to retreive records for any reason!
     */
    cveGetFiltered(queryString?: string): Promise<CveServiceGETCveIdRawEndpointReturnSchema | CveServicesGETErrorEndpointReturnSchema>;
    /**
     * Wrapper for `/cve-id/{id}`
     * @param id
     * @returns the resulting CveRecord
     * @throws Error if failure to retreive record for any reason!
     */
    cveIdGetSingle(id?: string): Promise<CveServiceGETCveIdRawEndpointReturnSchema | CveRecordInfo | CveServicesGETErrorEndpointReturnSchema | Error>;
    /**
     * Wrapper for /cve
     * @param id optional ID if we are getting single cve record
     * @param queryString query string corresponding to any of the query parameters allowed by the /cve endpoint (e.g., page=5)
     * @param failFast true if it should not use retry.
     * @returns parsed json of result, or the error if any occured
    */
    protected getCveId(opts: {
        id?: string;
        queryString?: string;
        failFast?: boolean;
    }): Promise<CveServiceGETCveIdRawEndpointReturnSchema | CveServicesCveRecordInfo | CveServicesGETErrorEndpointReturnSchema | Error>;
}
export {};
