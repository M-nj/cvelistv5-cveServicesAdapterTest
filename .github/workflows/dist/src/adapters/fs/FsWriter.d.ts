/**
 *  FsWriter performs synchronous operations that mutates the file system
 */
import { FsAdapterType } from './FsReader.js';
export { FsAdapterType };
export declare class FsWriter {
    private _relfilepath;
    get relFilepath(): string;
    /** constructor
     *  @param filepath the relative path this adapter will work with
     *  Note that in this class, once the relfilepath is set, it should not be modified
     *  If you need to modify it, create a new one of the new relfilepath
     */
    constructor(relfilepath: any);
    /** always returns true for this class */
    canMutate(): boolean;
    /** synchronousllly writes a string to an output file, overwriting it
     *  @param data the data preformatted as a string (this means any formatting must be done before the call)
    */
    writeString(data: string): FsWriter;
    /**
     * synchronously returns whether this path exists
     * @returns true iff the specified path exists
     */
    exists(): boolean;
    /** synchronousllly copies a file or directory to a destination
     *  @param srcPath the path where the source file or directory is
     *  @param destPath the path to copy srcPath to
    */
    cp(srcPath: string, destPath: string): void;
    /**
     * synchronously removes this file iff it exists
     * @returns true if the file was removed, false if it did not exist in the first place
     */
    rm(): boolean;
    /**
     * synchronously returns whether the path exists
     * (very thin wrapper for fs.existsSync which is NOT deprecated, unlike fs.exists)
     * @param path the full or partial path to test
     * @returns true iff the specified path exists
     */
    static exists(path: string): boolean;
    /**
     * synchronously removes the specified file iff it exists
     * @param path
     * @returns true if the file was removed, false if it did not exist in the first place
     */
    static rm(path: string): boolean;
}
