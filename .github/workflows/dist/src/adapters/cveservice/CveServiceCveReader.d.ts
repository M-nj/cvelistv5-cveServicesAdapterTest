import { CveService } from './CveService.js';
import { CveServiceCredSet } from './CveServiceCredSet.js';
import { CveRecord } from '../../core/CveRecord.js';
declare type CveServiceGETCveRawEndpointReturnSchema = {
    totalCount: number;
    itemsPerPage: number;
    pageCount: number;
    currentPage: number;
    prevPage: number;
    nextPage: number;
    cveRecords: CveRecord[] | CveRecordV5[] | any;
};
declare type CveServicesGETCveWithIdArgEndpointReturnSchema = CveRecordV5;
declare type CveServicesGETErrorEndpointReturnSchema = {
    message: string;
    error: string;
};
import { CveRecordV5 } from '../../generated/quicktools/CveRecordV5.js';
/**
 * Main class that provides functional READ access to the /cve Services API
 * Note that the url of the CVE Services API, username, password, tokens, etc., all need to be
 *    set in the project's .env file.
 *
 * @DEV: This class requires that ALL outbound read requests be routed through the protected `getCve` function!
 */
export declare class CveServiceCveReader extends CveService {
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
    /** async method that returns the CVE Record associated with a given CVE id
     * @param id the CVE id string to retrieve
     * @return a CveRecord representing the record associated with a given CVE id
     */
    getCveUsingId(id: string): Promise<CveRecord>;
    /**
     * Wrapper for `/cve`
     * @param queryString query string corresponding to any of the query parameters allowed by the /cve endpoint (e.g., page=5)
     * @throws Error if failure to retreive records for any reason!
     */
    cveGetFiltered(queryString?: string): Promise<CveServiceGETCveRawEndpointReturnSchema | CveServicesGETErrorEndpointReturnSchema>;
    /**
     * Wrapper for `/cve/{id}`
     * @param id
     * @returns the resulting CveRecord
     * @throws Error if failure to retreive record for any reason!
     */
    cveGetSingle(id?: string): Promise<CveRecord>;
    /**
     * Wrapper for /cve
     * @param id optional ID if we are getting single cve record
     * @param queryString query string corresponding to any of the query parameters allowed by the /cve endpoint (e.g., page=5)
     * @param failFast true if it should not use retry.
     * @returns parsed json of result, or the error if any occured
    */
    protected getCve(opts: {
        id?: string;
        queryString?: string;
        failFast?: boolean;
    }): Promise<CveServiceGETCveRawEndpointReturnSchema | CveServicesGETCveWithIdArgEndpointReturnSchema | CveServicesGETErrorEndpointReturnSchema | Error>;
}
export {};
