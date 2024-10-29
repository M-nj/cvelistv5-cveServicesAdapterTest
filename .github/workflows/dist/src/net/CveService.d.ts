import { ApiBaseService } from './ApiBaseService.js';
import { CveRecord } from '../core/CveRecord.js';
/**
 * @deprecated use src\adapters\cveservice\CveService instead.
 * options that can be used with the generic cve() method
 * Note that special CVE Services privileges on special CVE Services accounts may be needed
 * to fully use all functionality
 */
export interface CveApiOptions {
    /** set id to access specific CVE by CVE ID */
    id?: string;
    /** a query string corresponding to any of the query parameters allowed by the /cve endpoint
     *  (e.g., page=5)
    */
    queryString?: string;
}
/**
 * @deprecated use src\adapters\cveservice\CveService instead.
 * Main class that provides functional access to the /cve Services API
 *  Note that the url of the CVE Services API, username, password, tokens, etc., all need to be
 *    set in the project's .env file.
 *  - CVE Service endpoint specified in .env file (main.ts must call config() to set this up before this class can be used)
 */
export declare class CveService extends ApiBaseService {
    /** @deprecated use src\adapters\cveservice\CveService instead. */
    constructor();
    /**
     * @deprecated use src\adapters\cveservice\CveServiceCveReader::getCveSummary instead.
     * async method that returns some information about the the CVE Services API
     * Note:  Avoid using this since it is expensive and can run as long as 15 seconds
     * @return an object with information about the CVE Services API
     */
    getCveSummary(): Promise<unknown>;
    /**
     * @deprecated use src\adapters\cveservice\CveServiceCveReader::getCveUsingId instead.
     * async method that returns the CVE Record associated with a given CVE id
     * @param id the CVE id string to retrieve
     * @return a CveRecord representing the record associated with a given CVE id
     */
    getCveUsingId(id: string): Promise<CveRecord>;
    /**
     * @deprecated use src\adapters\cveservice\CveServiceCveReader::getAllCvesChangedInTimeFrame instead.
     * returns array of CVE that has been added/modified/deleted since timestamp window */
    getAllCvesChangedInTimeFrame(start: string, stop: string): Promise<CveRecord[]>;
    /**
     * @deprecated use src\adapters\cveservice\CveServiceCveReader instead.
     * wrapper for /cve
     *  Note: avoid using this directly if one of the methods above can provide the functionality
    */
    cve(option: CveApiOptions): Promise<any>;
}
