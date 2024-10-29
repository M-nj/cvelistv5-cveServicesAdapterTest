/**
 *  DeltaFs performs file system operations for Delta.
 *
 *  When making zip files, this class copies CVE JSON files from /cves to a directory, and zip that, so the /cves directory
 *  needs to be in the current directory
 */
import { Delta } from './Delta.js';
export declare type IsoDate = string;
export declare class DeltaFs extends Delta {
    constructor(delta?: Delta);
    /** writes the delta to a JSON file
     *  @param relFilepath relative path from current directory
    */
    writeFile(relFilepath?: string): void;
    /**
     * Copies delta CVEs to a specified directory, and optionally zip the resulting directory
     * @param relDir optional relative path from current directory to write the delta CVEs, default is `deltas` directory
     * @param zipFile optional relative path from the current directory to write the zip file, default is NOT to write to zip
     */
    writeCves(relDir?: string | undefined, zipFile?: string | undefined): void;
    writeTextFile(relFilepath?: string): void;
    /**
     * Synchronously generate a zip file from an array of files (no directories)
     * @param filepaths array of filenames to be zipped
     * @param resultFilepath filepath for resulting zip file
     * @param zipVirtualDir dir name in zip, defaults to `files`
     *                      (for example, if you want to add all the files
     *                       into a zip folder called abc,
     *                        you would pass 'abc' here)
     * @param dir path to directory where files are located
     */
    static generateZipfile(filepaths: string | string[], resultFilepath: string, zipVirtualDir?: string, dir?: string): void;
}
