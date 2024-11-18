/** class that provides static standard comparison capabilities
 *  for sorters and object diff utilities
 */
export declare type DiffPathAndValue = [string, unknown];
export declare type DiffPathAndPrevAndCurrValue = [string, unknown, unknown];
export declare type ObjectComparison = {
    added: Array<DiffPathAndValue>;
    removed: Array<DiffPathAndValue>;
    edited: Array<DiffPathAndPrevAndCurrValue>;
};
export declare type compareOptions = {
    /** true: returns paths similar to Javascript
     *  false: returns paths delimited by '/', which is
     *         ofthen easier to separate a path into separate components
     */
    jsPath?: boolean;
    /** the current json diff library we use often will show
     *  a `sourcObj/...` path in addition to the normal path
     *  this option removes that
     */
    filterPathRootAsDuplicates?: string;
    /** by default, every change is specified in a separate tuple,
     *  by setting this to true, it filters all tuples that have a common parent
     *     resulting in a list that shows differences at the highest level
     */
    filterToCommonParent?: boolean;
};
export declare class ObjectComparer {
    /** compares any arbitary objects
     * @param lhs object to compare
     * @param rhs object to compare
     * @param options options for  when
     * @returns Object with three keys: added, removed, edited
     *  - each keys' value are arrays where each item is an array of the form [path,value]
     */
    static compare(lhs: unknown, rhs: unknown, options?: compareOptions): ObjectComparison;
    /** the current json diff library we use often will show
     *  a `sourcObj/...` path in addition to the normal path
     *  this option removes that
     */
    static filterDuplicatesInPlace(comparison: ObjectComparison, options: compareOptions): void;
}
