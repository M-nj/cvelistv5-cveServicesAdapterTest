import { CveService } from './CveService.js';
import { CveServiceCredSet } from './CveServiceCredSet.js';
export declare class CveServiceHealthReader extends CveService {
    constructor(host: string, credset?: CveServiceCredSet);
    /**
     * @returns boolean, true if health check returned with status 200, otherwise false.
     */
    isHealthy(): Promise<boolean>;
}
