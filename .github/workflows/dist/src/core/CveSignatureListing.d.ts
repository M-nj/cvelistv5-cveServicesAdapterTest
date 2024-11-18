/**
 * a CveSignatureListing is a JavaScript Array of CveSignatures.  These are useful for
 *    - summarize a set of CVEs (e.g., cvelist, opensearch)
 *    - diff between 2 listings to show missing/obsolete CVEs
 */
import { CveSignature } from './CveSignature.js';
import { IsoDateString } from '../common/IsoDate/IsoDateString.js';
/** a sorted listing (array) of CveSignatures, which uniquely fingerprints a set of CVEs */
export declare type CveSignatureSorter = 'none' | 'dateUpdated' | 'lexical' | 'reversedDateUpdated';
export declare class CveSignatureListing extends Array<CveSignature> {
    /** sort by lexcial (i.e., by the full CveSignature as if it is a string)
     *  this is not the same as a sort by CVE ID, since CVE-1970-11000 comes before CVE-1970-2000
     */
    static sortLexical(a: CveSignature, b: CveSignature): number;
    /** sort by the 2nd part of a CveSignature, note that in the case
     *  where a dateUpdated is not available and a published@ prefix
     *  is added for the datePublished, the sort properly looks at the
     *  date and not the prefix
     */
    static sortByDateUpdated(a: CveSignature, b: CveSignature): number;
    /** reverse sort using the 2nd part of a CveSignature, note that in the case
     *  where a dateUpdated is not available and a published@ prefix
     *  is added for the datePublished, the sort properly looks at the
     *  date and not the prefix
     */
    static sortByReversedDateUpdated(a: CveSignature, b: CveSignature): number;
    /**
     * Builds a full CveSignatureListing from a parsed deltalog
     * @param log a parsed DeltaLog with proper Delta entries
     * @param sortBy optional sort algorithm (default is lexical+reversedDateUpdated)
     *  Note that if 2 CVEs have the same dateUpdated, they will be returned
     *    in the original order they appeared in log.  If you want to sort by dateUpdated
     *    and CVE ID, you will need to first sort by CVE ID, then by dateUpdated.
     * @param start: optional timestamp to trim the log (default is 1970-01-01,
     *                which effectively provides all entries in the deltaLog, which is about 30 days worth)
     * @todo should be Deltalog.toCveSignatureListing()
     */
    static fromDeltalog(log: unknown[], sortBy?: CveSignatureSorter, start?: IsoDateString): CveSignatureListing;
    static fromCveSignatureListingFile(relFilepath: string): CveSignatureListing;
    static fromCveSignatureListing(list: string[]): CveSignatureListing;
    /** removes all CveSignatures which differ only by timestamp, retaining only the most recent one */
    static collapseToLatestCvesOnly(listing: CveSignatureListing): CveSignatureListing;
    /**
     * returns this listing as a string[], useful for writing to a file or
     * for comparing 2 listings
     * @param options optional options
     *        excludeSha specifies whether to include the SHA, if a SHA exists
     *        if true, returns form 2
     *        else returns form 1 if possible, or form 2 if no SHA is available
     * @returns
     */
    toStringArray(options?: {
        excludeSha?: boolean;
    }): string[];
    /** trims and returns a new CveSignatureListing
     *  containing only entries between the specified dates (inclusive)
     *  @param startDate date to stop (inclusive)
     *  @param stopDate date to start (inclusive, and if not specified, defaults to now)
     */
    trimByDateUpdated(startDate: IsoDateString | string, stopDate?: IsoDateString | string): CveSignatureListing;
    /** returns a CveSignatureDiff object containing the differences between
     *  this object (lhs) and the rhs
     *  @param rhs the "right hand side" CveSignatureListing to compare with
     */
    diff(rhs: CveSignatureListing, options?: {
        ignoreSha?: boolean;
        sortBy?: CveSignatureSorter;
    }): CveSignatureDiff;
}
export declare class CveSignatureDiff {
    missingLeft: string[];
    missingRight: string[];
    constructor();
}
