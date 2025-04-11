import { CveResult } from "../result/CveResult.js";
import { SearchOptions } from "./BasicSearchManager.js";
export declare const SearchRequestType: {
    readonly SEARCH_STRING_UNKNOWN_TYPE: "search text type is unknown or has not yet been evaluated";
    readonly SEARCH_STRING_CANNOT_CONTAIN_RESERVED_CHARACTERS: "search text cannot contain reserved characters ('{}', '{{}}')";
    readonly SEARCH_STRING_NOT_SUPPORTED: "search text cannot be used because it has an error";
    readonly SEARCH_STRING_ERROR: "search text cannot be used because it has a semantic error";
    readonly WILDCARD_ASTERISK_SEARCH_NOT_SUPPORTED: "does not support wildcard character '*'";
    readonly WILDCARD_QUESTION_SEARCH_NOT_SUPPORTED: "does not support wildcard character '?'";
    readonly WILDCARD_PERCENT_SEARCH_NOT_SUPPORTED: "does not support wildcard character '%'";
    readonly SEARCH_GENERAL_TEXT: "general search text string";
    readonly SEARCH_AS_URL: "search text is a URL";
    readonly SEARCH_AS_CVE_ID: "search text is a CVE ID";
    readonly SEARCH_AS_CVE_YEAR: "search text is a CVE ID year series";
    readonly SEARCH_AS_CWE_ID: "search text is a CWE ID";
    readonly SEARCH_AS_CAPEC_ID: "search text is a CAPEC ID";
    readonly SEARCH_AS_IPv4: "search text is an IP v4 address";
    readonly SEARCH_AS_IPv6: "search text is an IP v6 address";
    readonly SEARCH_AS_VERSION: "search text is a version string";
    readonly SEARCH_PHRASE: "search text is a phrase (surrounded by double quotes)";
    readonly SEARCH_STRING_MULTIPLE_TYPES: "search text is made up of multiple request types";
};
export declare type SearchRequestTypeId = Extract<keyof typeof SearchRequestType, string>;
/** SearchRequest has 2 goals:
 *    1. an instance that stores all user inputs (query text, options, etc.)
 *    2. a search builder that can build a proper search request for OpenSearch
 *       using those user inputs and CVE search business logic
 */
export declare class SearchRequest {
    /** the user entered text */
    _searchText: string;
    /** search options when validating input and building query string */
    _searchOptions: SearchOptions;
    /** constructor
     *  @param searchText the text string that the user entered
     *  @param options options for configuring the builder, with reasonable defaults if not specified
     */
    constructor(searchText: string, options?: Partial<SearchOptions>);
    /** validate and process the searchText (set in constructor)
     *  The resulting CveResult will only contain a data element
     *  if the searchText is useable by OpenSearch.  The data element
     *  will be of the following format:
     *  {
     *    searchTextType: SearchRequestTypeId,
     *    processedSearchText: string (copy of this._searchText)
     *  }
     *
     *  All errors found while processing will be in the CveResult.errors
     *  and CveResult.notes
     */
    processSearchText(): CveResult;
    /**
     * builds an OpenSearch query after processing the search text specified in the constructor
     * @returns
     */
    buildRequest(): CveResult;
    /** tests if a string is a version string
     * @param searchText the single word search text string (i.e., assumes that tokenizeSearchText()
     *                   has already been called)
     * Note that this is a function because there are multiple places
     * where a version string can be matched (e.g., when looking for '.' or '-')
     * @returns true iff the search text is a version string
     */
    static isVersionString(searchText: string): boolean;
    /** tests if a string is an IPv4 string
     * @param searchText the single word search text string (i.e., assumes that tokenizeSearchText()
     *                   has already been called)
     * Note that this is a function because there are multiple places
     * where an IPv4 string can be matched
     * @returns true iff the search text is an IPv4 string
     */
    static isIpV4String(searchText: string): boolean;
    /** tests if a string is a domain name
     * @param searchText the single word search text string (i.e., assumes that tokenizeSearchText()
     *                   has already been called)
     * Note that this is a function because there are multiple places
     * where a domain name can be matched
     * @returns true iff the search text is a domain name
     */
    static isDomainName(searchText: string): boolean;
    /**
     *  determine the SearchReuestTypeId based on searchText
     *  @param searchText the search text
     */
    static findSearchRequestType(searchText: string): SearchRequestTypeId;
    /** separates searchText into individual tokens
     *  @param searchText the text to tokenize
     */
    static tokenizeSearchText(searchText: string): string[];
}
