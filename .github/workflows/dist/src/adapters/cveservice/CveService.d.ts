/// <reference types="node" resolution-mode="require"/>
import { CveServiceCredSet } from './CveServiceCredSet.js';
import { CveServiceBaseUrl } from './CveServiceBaseUrl.js';
export declare const fetchRetry: (input: string | URL | Request, init?: import("fetch-retry").RequestInitWithRetry<typeof fetch>) => Promise<Response>;
/**
 * Keeps track of creds to use for some arbitrary Cve Services endpoint.
 */
export declare abstract class CveService {
    _fetchRetry: (input: string | URL | Request, init?: import("fetch-retry").RequestInitWithRetry<typeof fetch>) => Promise<Response>;
    /** The Cve Service Base Url for this instance. */
    endpoint: CveServiceBaseUrl;
    /** The Cve Service Credential set to use for this instance. */
    protected credset: CveServiceCredSet;
    /** Default max retry attempts (after the first) for HTTP Read requests. */
    MAX_READ_RETRY: number;
    /**
     * Intialize Cve Services with a specific endpoint and credential set.
     * @param url The Cve Service Base Url for this instance.
     * @param credset The Cve Service Credential set to use for this instance.
     */
    constructor(url: CveServiceBaseUrl, credset: CveServiceCredSet);
    /** Dynamically generates a fetch-retry `retryOn` function that retries on 429 or 5xx status codes, or other thrown errors and logs the activity to console.
     * @note uses this.MAX_READ_RETRY for the maximum number of retry attempts.
     * @param url the url we attempted to get.
     * @param failFast true if you dont want to allow any retry, false if you do want to allow for retry.
     * @returns a function you can use for fetch-retry's retryOn
     */
    generateRetryOnFunc(url: string, failFast: boolean): (attempt: number, error: Error, response: Response) => Promise<boolean>;
    /**
     * Retry delay gives the milliseconds you should wait before attempting another retry.
     * When rate limited, it will wait for the rate limit to reset.
     * Otherwise it will do an exponential backoff based on the attempt number.
     * @returns a funcion you can use for fetch-retry's retryDelay
     */
    generateRetryDelayFunc(): (attempt: number, error: Error, response: Response) => number;
}
