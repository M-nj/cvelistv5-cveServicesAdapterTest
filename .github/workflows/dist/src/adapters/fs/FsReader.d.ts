/**
 *  FsReader performs synchronous local file system operations in read-only mode with no side effects
 */
export declare type FsAdapterType = "RO" | "Mutating";
export declare class FsReader {
    private _relfilepath;
    get relFilepath(): string;
    /** constructor
     *  @param filepath the relative path this adapter will work with
     *  Note that in this class, once the relfilepath is set, it should not be modified
     *  If you need to modify it, create a new one of the new relfilepath
     */
    constructor(relfilepath: any);
    /** always returns false for this class */
    canMutate(): boolean;
    /**
     * synchronously returns whether this path exists
     * @returns true iff the specified path exists
     */
    exists(): boolean;
    /** synchronously reads a string from a file
     *  @param data the data preformatted as a string (this means any formatting must be done before the call)
    */
    readAll(): string;
    /**
     * synchronously returns whether the path exists
     * (very thin wrapper for fs.existsSync which is NOT deprecated, unlike fs.exists)
     * @param path the full or partial path to test
     * @returns true iff the specified path exists
     */
    static exists(path: string): boolean;
}
