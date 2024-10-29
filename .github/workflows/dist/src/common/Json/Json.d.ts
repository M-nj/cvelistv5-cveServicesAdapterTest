/** Set of Typescript types and classes and utilities to make it easier to work with JSON */
export declare class Json {
    /** JSON.stringify replacer function to make properties
     *  in object be alphabetically sorted, so that JSON files
     *  from different sources can be deterministically compared
     *
     *  @note:  modified version from https://stackoverflow.com/a/43636793
     *  @note:  this function relies on 2 esoteric features of Javascript
     *          as clarified by Nate Anderson in the comments
     *          1. Stringifying an object visits properties "using the same algorithm as Object.keys(), which has a well-defined order"
     *          2. Object.keys() uses the "same order that a normal loop would"... (for...in) 3) for...in loops string keys "...in ascending chronological order of property creation."
     */
    static normalizingReplacer: (_: any, value: any) => any;
}
