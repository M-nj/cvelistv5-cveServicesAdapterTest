/**
 * A CveSignature is a terse representation of a specific version of a CVE Record.  It is intended
 *  to be used
 *    1. to identify a specific version of CVE content since a CVE is usually published
 *        and later updated, often multiple times
 *    2. to quickly and easily verify the CVE contents of 2 copies of any CVE, for example, to
 *        compare the content on cvelistV5 against the original content from CVE REST Services
 *    3. to list (a la `ls` in `bash`) the content of a repository in a useful form for further
 *        processing (e.g., using `jq` or grep)
 *    4. to update the `deltaLog.json` file with a richer and more useful listing when listed in reversed chronological order
 *
 * It is intended to be generated at point of use, for example, by an admin or
 * an end user to verify 2 repostories
 *
 * The full form is CVE-ID|dateUpdated|sha256-of-unformatted-CVE-content, but it is intended to
 * be useful in shorter forms and when insufficient data is present to generate the full form (see below).
 *
 * For example,
 *      CVE-1999-0001|2005-12-17T00|00:00|1c195f65ce0f2ae31b35dee3706cdf740eb3b8476074dcd839b14aeba91bb223
 * for the current version of CVE-1999-0001
 *
 *      - CVE ID is required
 *      - a timestamp is required, and must be an ISO date
 *          - default is cveMetadata.dateUpdated
 *          - where timezone is not specified, GMT is assumed and added (that is to say, all timestamps ends in Z)
 *          - if not present in record, use datePublished instead, prefixed with "published@"
 *              e.g.,
 *                  CVE-1999-0001|published@2005-12-17T00:00:00|1c195f65ce0f2ae31b35dee3706cdf740eb3b8476074dcd839b14aeba91bb223
 *      - sha256 of the unformatted json is optional for backwards compatibility as well as when performance is more important
 *
 * Acceptable forms:
 *      form 1:    CVE-1999-0001|2005-12-17T00:00:00|1c195f65ce0f2ae31b35dee3706cdf740eb3b8476074dcd839b14aeba91bb223
 *                 - full version, preferred where possible
 *      form 1p:   CVE-1999-0001|published@2005-12-17T00:00:00|1c195f65ce0f2ae31b35dee3706cdf740eb3b8476074dcd839b14aeba91bb223
 *                 - full version, preferred where possible
 *      form 2:    CVE-1999-0001|2005-12-17T00:00:00
 *                 - non-sha version for backwards compatibility and when performance/storage is more important
 *      form 2p:   CVE-1999-0001|published@2005-12-17T00:00:00
 *                 - when updated-date is not available, use published date
 *      form 3:    CVE-1999-0001|2005-12-17T00:00:00|upd:adp:xyz1234|1c195f65ce0f2ae31b35dee3706cdf740eb3b8476074dcd839b14aeba91bb223
 *                 - not implemented yet
 *                 - new full version, containing action:subaction:actor
 *                 - possibly replace existing full version
 *
 * Known bugs:
 *  1. There is an application that currently updates references in CVEs but does not change the dateUpdated field.
 *     These CVEs would be incorrectly listed since they would be listed by the dateUpdated timestamp that the CNA had updated the CVE.
 *     This bug will be fixed in summer of 2024.
 */
import { CveId } from './CveId.js';
import { IsoDateString } from '../common/IsoDate/IsoDateString.js';
export declare type TimestampForm = "dateUpdated" | "datePublished";
export declare class CveSignature {
    id: CveId;
    timestamp: IsoDateString;
    timestampForm: TimestampForm;
    sha256: string;
    constructor(id: CveId | string, timestamp: IsoDateString | string, timestampForm?: TimestampForm, sha256?: string);
    static fromJson(json: {}, sha256?: boolean): CveSignature;
    /**
     * Generates a CveSignture from a string representation of the CveSignature
     * @param signatureStr a string representation of a previously generated CveSignature
     * @returns a rehydrated CveSignature or undefined if an error
     */
    static fromCveSignatureString(signatureStr: string): CveSignature | undefined;
    /** returns a string representation of the CveSignature */
    toString(): string;
    /** returns a string representation for JSON.stringify() */
    toJSON(): string;
}
