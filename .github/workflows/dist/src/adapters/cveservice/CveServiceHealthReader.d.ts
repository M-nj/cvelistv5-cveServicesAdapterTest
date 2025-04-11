import { CveService } from './CveService.js';
import { CveServiceCredSet } from './CveServiceCredSet.js';
export declare class CveServiceHealthReader extends CveService {
    constructor(host: string, credset?: CveServiceCredSet);
    /**
     * @param [logError=true] optional to disable logging errors to console (when logError is false).
     * @returns boolean, true if health check returned with status 200, otherwise false.
     */
    isHealthy(logError?: boolean): Promise<boolean>;
}
