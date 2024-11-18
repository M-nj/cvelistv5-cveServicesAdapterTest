/**
 *  reader for CveRecords
 *
 */
import { CveId } from '../../core/CveId.js';
import { CveRecord } from '../../core/CveRecord.js';
export declare class CveFsReader {
    static kDefaultCvesBaseDir: string;
    /** constructs a CveRecord by reading in the associateed JSON file at relpath
     *  @param relpath relative  to file
     *  @returns the hydrated CVE Record, or undefined if it does not exist in relpath
    */
    static readFromFile(relpath: string): CveRecord;
    /** constructs a CveRecord by reading in the associateed JSON file for the CVE ID
     *  optionally reading from a different location than the default /cves
     *  @param cveId the CVE ID to read in
     *  @param cvesPath optional path /cves, default is specified in environment variable
     *  @returns the hydrated CVE Record, or undefined if it does not exist in /cves
    */
    static read(cveId: CveId | string, cvesPath?: string): CveRecord | undefined;
}
