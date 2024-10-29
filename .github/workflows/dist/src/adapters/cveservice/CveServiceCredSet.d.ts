/**
 * Keeps track of a credential set.
 */
export declare class CveServiceCredSet {
    private org;
    private user;
    private key;
    constructor(org: string, user: string, key: string);
    getAsHeader(): {
        "Content-Type": string;
        "CVE-API-ORG": string;
        "CVE-API-USER": string;
        "CVE-API-KEY": string;
        redirect: string;
    };
}
