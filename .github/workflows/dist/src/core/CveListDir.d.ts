/// <reference types="node" resolution-mode="require"/>
import fs from 'fs';
/**
 * Callback signature for CveListDir.walkDir()
 */
export declare type CveListDirWalkDirCallback = (file: fs.Dirent, files: fs.Dirent[]) => void;
/** options for CveListDir.walkDir()
 *    - `recursive` recursively walks down a full hierarchy, default: true
 *    - `ignoreLinuxInvisible` ignores Linux/MacOSX invisible files
 *        - default: true
 *        - note: DOES NOT work on Windows
*/
export declare type CveListDirWalkDirOptions = {
    recursive?: boolean;
    ignoreLinuxInvisible?: boolean;
};
/**
 * Class for working with a directory of CVE listings
 */
export declare class CveListDir {
    /** walks a directory hierarchy to perform operations in callback
     *  Note that one odd behavior right now is that if there is an invisible directory with visible files,
     *    it will list the visible files even though it will ignore the invisible directory
     *  Note on Windows:  Currently, the ignoreInvisible flag is only for Linux/MacOSX,
     *    so all Windows files and directories will be included regardless of the ignoreLinuxInvisible setting
     *  @param path the path to walk
     *  @param callback function of the WalkDirCallback type to call after walking the path
     *  @param options optional options (see WalkDirOptions)
     */
    static walkDir: (path: string, callback: CveListDirWalkDirCallback, options?: CveListDirWalkDirOptions) => void;
}
