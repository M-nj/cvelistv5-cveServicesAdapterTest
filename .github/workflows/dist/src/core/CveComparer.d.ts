/** class that provides CVE-specific comparers
 *  for sorting and diffing CVEs
 */
import { CveRecord } from './CveRecord.js';
import { ObjectComparison, compareOptions } from '../common/comparer/ObjectComparer.js';
export declare class CveComparer {
    /** compares 2 CVE Records (this can be 2 versions of the same CVE, or 2 different CVE Records)
     * @param lhs object to compare
     * @param rhs object to compare
     * @param options options for  when
     * @returns Object with three keys: added, removed, edited
     *  - each keys' value are arrays where each item is an array of the form [path,value]
     */
    static compare(lhs: CveRecord, rhs: CveRecord, options?: compareOptions): ObjectComparison;
    /**
     *
     * @param cve the CVE Record (in comparison, it should be the later of 2 compared)
     *            Note that this is really only needed when there are adp changes,
     *            so even though it is required, it can be undefined if you know the change
     *            is in metadata or cna
     * @param comparison the ObjectCompaison from a CveComparer.compare
     * @returns a list of categories
     */
    static findCategories(cve: CveRecord, comparison: ObjectComparison): string[];
}
