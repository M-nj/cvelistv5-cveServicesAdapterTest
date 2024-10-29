import { IsoDateString } from '../../common/IsoDate/IsoDateString.js';
import { CveSignatureListing } from '../../core/CveSignatureListing.js';
export declare type ListOptions = {
    sha256?: boolean;
    start?: IsoDateString;
    stop?: IsoDateString;
    sortby_reversedDateUpdated?: boolean;
};
/** object that can generate various CveSignatureListings */
export declare class ListManager {
    private constructor();
    /** generates a CveSignatureListing for dir
     *  @param filepath full or partial path to cves directory
     *  @param ignoreSha optional boolean to not generate SHA256
     *  @returns returns a lexically sorted listing of filepath
     */
    static fromDir(filepath: string, opts?: ListOptions): {
        listing: CveSignatureListing;
        filesnames: string[];
        dirsTraversed: string[];
    };
}
