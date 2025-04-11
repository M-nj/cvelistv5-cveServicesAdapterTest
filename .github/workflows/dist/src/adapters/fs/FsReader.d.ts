/**
 *  FsReader performs synchronous local file system operations in read-only mode with no side effects
 */
/// <reference types="node" resolution-mode="require"/>
import fs from 'fs';
export declare type FsAdapterType = "RO" | "Mutating";
export declare class FsReader {
    static readdirSync: typeof fs.readdirSync;
    static readFileSync: typeof fs.readFileSync;
    static pathJoin: (...paths: string[]) => string;
    static isFile: (filepath: string) => boolean;
    static isDirectory: (filepath: string) => boolean;
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
    /** synchronously reads in the content of the file
     *  @returns a string representation of the file
    */
    readAll(): string;
    /**
     * synchronously returns whether the path exists
     * (very thin wrapper for fs.existsSync which is NOT deprecated, unlike fs.exists)
     * @param path the full or partial path to test
     * @returns true iff the specified path exists
     */
    static exists(path: string): boolean;
    /**
     * @param pattern glob pattern or cve id to match
     * @param localDir the local directory to start from
     * @returns list of file paths that match the given glob.
     */
    static findMatchingGlobbedPaths(pattern: string, localDir: string): string[];
}
