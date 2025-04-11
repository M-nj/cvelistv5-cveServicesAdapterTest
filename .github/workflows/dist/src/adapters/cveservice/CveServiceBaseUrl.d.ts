/** Class that holds information regarding a Cve Services endpoint. */
export declare class CveServiceBaseUrl {
    private hostdomain;
    private rootpath;
    /**
     * Initalize a base url for a cve service with the given host and endpoint.
     * @param url The host domain url (e.g. 'http://localhost:3000' or 'https://cveawg.mitre.org')
     * @param rootpath [Optional] the root path for this url (e.g. '/api/cve', '/api/health-check')
     */
    constructor(url: string, rootpath?: string);
    /**
     * We dont want the host url to ever change after being initialized, so enforce encapsulation.
     * @returns the host url (full domain)
     */
    getUrl(): string;
    /**
     * justification for this function is to allow development to do a soft check to ensure they never hit the prod host during development.
     * @returns if the host domain is the production url.
     */
    isProd(): boolean;
}
