import { CveService } from './CveService.js';
import { CveServiceCredSet } from './CveServiceCredSet.js';
import { CveRecord } from '../../core/CveRecord.js';
import { CveRecordV5 } from '../../generated/quicktools/CveRecordV5.js';
/** TS object mirroring the return schema from Cve Services GET /api/cve */
export declare type CveServiceGETCveRawEndpointReturnSchema = {
    totalCount: number;
    itemsPerPage: number;
    pageCount: number;
    currentPage: number;
    prevPage: number;
    nextPage: number;
    cveRecords: CveRecord[] | CveRecordV5[] | any;
};
/** TS object mirroring the return schema from Cve Services GET /api/cve/{cve-id}. */
export declare type CveServicesGETCveWithIdArgEndpointReturnSchema = CveRecordV5;
/** TS object mirroring the return schema from Cve Services GET /api/cve or /api/cve/{cve-id} but an error occured. */
export declare type CveServicesGETErrorEndpointReturnSchema = {
    message: string;
    error: string;
};
/**
 * Main class that provides functional READ access to the /cve CVE Services API
 * Note that the url of the CVE Services API, username, password, tokens, etc., all need to be
 *  set in the project's .env file.
 *
 * @DEV: This class requires that ALL outbound read requests be routed through the protected `getCve` function!
 */
export declare class CveServiceCveReader extends CveService {
    /** Initalize a CVE Service Reader for the /api/cve endpoint using the given host and cred set.
     * @param host The host url to use for CVE Services (Example: 'http://localhost:3000', 'https://cveawg.mitre.org')
     * @param credSet The credential set to use when reading from this endpoint.
    */
    constructor(host: string, credSet: CveServiceCredSet);
    /** async method that returns an array of CVE Records that have been modified inside a time window.
     * @param start ISO-date-like string to start from
     * @param stop ISO-date-like string to end at
     * @returns Array of CVE Records that were last modified inside (exclusive) the given time window.
     */
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
     * @throws an error if the CVE ID is invalid as per CveId::isValidCveId.
     * @deprecated use `cveGetSingle` instead.
     */
    getCveUsingId(id: string): Promise<CveRecord>;
    /**
     * Wrapper for `/cve?{queryString}`.
     * @param queryString query string corresponding to any of the query parameters allowed by the /cve endpoint (e.g., page=5)
     * @throws Error if failure to retreive records for any reason!
     */
    cveGetFiltered(queryString?: string): Promise<CveServiceGETCveRawEndpointReturnSchema | CveServicesGETErrorEndpointReturnSchema>;
    /**
     * Wrapper for `/cve/{id}`
     * @param id the CVE ID to retreive
     * @returns the resulting CveRecord
     * @throws Error if failure to retreive record for any reason!
     */
    cveGetSingle(id?: string): Promise<CveRecord>;
    /**
     * The root function to send a request to the `/cve` endpoint.
     *
     * Note, this is where the fetch retry comes in to play.
     *
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
