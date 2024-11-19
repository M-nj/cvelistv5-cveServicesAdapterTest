import { CveServiceCredSet } from './CveServiceCredSet.js';
import { CveServiceBaseUrl } from './CveServiceBaseUrl.js';
export declare const fetchRetry: (input: string | URL | Request, init?: import("fetch-retry").RequestInitWithRetry<typeof fetch>) => Promise<Response>;
/**
 * Keeps track of creds to use for some arbitrary Cve Services endpoint.
 */
export declare abstract class CveService {
    _fetchRetry: (input: string | URL | Request, init?: import("fetch-retry").RequestInitWithRetry<typeof fetch>) => Promise<Response>;
    endpoint: CveServiceBaseUrl;
    protected credset: CveServiceCredSet;
    constructor(url: CveServiceBaseUrl, credset: CveServiceCredSet);
}
