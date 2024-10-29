import { CveServiceCredSet } from './CveServiceCredSet.js';
import { CveServiceBaseUrl } from './CveServiceBaseUrl.js';
/**
 * Keeps track of creds to use for some arbitrary Cve Services endpoint.
 */
export declare abstract class CveService {
    endpoint: CveServiceBaseUrl;
    protected credset: CveServiceCredSet;
    constructor(url: CveServiceBaseUrl, credset: CveServiceCredSet);
}
