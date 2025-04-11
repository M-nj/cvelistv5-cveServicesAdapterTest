import { SearchResultData } from '../search/BasicSearchManager.js';
/** error codes for this library */
export declare const CveErrorCodes: {
    readonly 0: "Note";
    readonly 1: "Unknown error";
    readonly 1000: "Invalid CVE ID";
    readonly 9000: "Invalid search string for a \"query_string\" search";
    readonly 9001: "No validation was performed";
    readonly 9002: "No query string was specified";
    readonly 9003: "Search operation was not performed because search string contains unsupported characters";
    readonly 9004: "Search operation was not performed because search string contains reserved characters";
};
/** the error IDs (they are numbers, but are limited to only values defined in CveErrorCodes) */
export declare type CveErrorId = Extract<keyof typeof CveErrorCodes, number>;
/** an error in CveResult */
export declare class CveError {
    errid: CveErrorId;
    error: string;
    message: string;
    /** constructor
     *  @param errid one of the error IDs defined in CveErrorCodes
     *  @param message optional message in addition to the default error message defined in CveErrorCodes
     */
    constructor(errid: CveErrorId, message?: string);
}
/** the status of each Result
 *  'ok' status is for a result with no errors, but always with data and possibly notes
 *  'errors' status is for a result with errors (and possibly data and notes)
 *  'exception' status is for a result that resulted in an exception; the result can
 *              also have errors, data, and notes
 */
export declare type CveResultStatus = 'ok' | 'errors';
/** generic way to express results "body", used only in constructor since other functions
 *  now has more specific parameters and no longer needs this type
 */
export declare type CveResultBody = Pick<Partial<CveResult>, 'data' | 'notes' | 'errors'>;
/** specific data types for an OK result */
export declare type CveResultDataType = string | {} | SearchResultData;
/** specific errors type (note that it is always an array) */
export declare type CveResultErrorsType = CveError[];
/**
 * CveResult enhances function return values, by doing the following
 *  - differentiate between exceptions and errors
 *    - exceptions are problems that may require halting a process
 *      or a section of a process because it is not recoverable
 *      (e.g., network outage)
 *    - errors are recoverable problems that affects the app in a way that the app
 *      can recover (e.g., divide by zero errors that are recoverable,
 *      or user input errors)
 *    - in general, errors are cheaper to manage than exceptions in Typescript
 *    - errors are easier to manage in Jest testing than exceptions
 *  - enables multiple functions/classes to add errors as control flow goes through
 *    a pipeline (e.g., validation for search terms, skippable functions, etc.)
 *  - enables more than a boolean or data value for successful or failed function calls
 *  - enables notes to be added at each step (whether successful or failed operations)
 *  - store multiple exceptions encountered in a pipeline (not yet implemented)
 *  - lays the groundwork for branching based on data instead of if/then/switch
 */
export declare class CveResult {
    status: CveResultStatus;
    notes?: string[];
    data?: CveResultDataType;
    errors?: CveError[];
    /** generic, protected constructor */
    protected constructor(status: CveResultStatus, result: CveResultBody);
    /** factory method for building a result in an OK status
     *  Note that when this result is passed in a pipeline, it may be changed
     *  to an error status, but retain the CveResultDataType data
     */
    static ok(result: CveResultDataType, notes?: string[]): CveResult;
    /** factory method for building a result in an Error status */
    static error(err: CveResultErrorsType | CveError | CveErrorId, notes?: string[]): CveResult;
    /** returns true iff this represents an ok result */
    isOk(): boolean;
    /** returns true iff this result contains data
     *  Note that even results in an error condition may still
     *  contain data, since the result could have started in an
     *  ok state, and subsequently was pushed errors in a pipeline
     */
    hasData(): boolean;
    /** return true iff this represents a result with errors
     *  note there may still be data this result
     *  started out as an ok result, but errors are added to it
     *  subsequently in a pipeline
    */
    hasErrors(): boolean;
    hasNotes(): boolean;
    /** push error(s) to a result
     *  Note that if the result was originally in an ok state, it will be transitioned
     *  to an error state
    */
    pushErrors(err: CveResultErrorsType | CveError | CveErrorId, notes?: string[]): void;
    pushNotes(notes: string | string[]): void;
}
