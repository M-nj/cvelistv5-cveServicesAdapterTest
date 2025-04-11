/**
 * Keeps track of a Cve Services credential set.
 */
export declare class CveServiceCredSet {
    /** CVE-API-ORG */
    private org;
    /** CVE-API-USER */
    private user;
    /** CVE-API-KEY */
    private key;
    /**
     * Initalize a credential set with the given org, user, and key.
     * @param org (CVE-API-ORG) User's Org shortname
     * @param user (CVE-API-USER) User's username
     * @param key (CVE-API-KEY) User's key
     */
    constructor(org: string, user: string, key: string);
    getAsHeader(): {
        "Content-Type": "application/json";
        "CVE-API-ORG": string;
        "CVE-API-USER": string;
        "CVE-API-KEY": string;
        "redirect": "follow";
    };
}
