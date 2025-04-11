import { CveResult } from '../result/CveResult.js';
import { SearchReader } from '../../adapters/search/SearchReader.js';
/** specifications for the search provider
 *  with reasonable defaults when specified in the constructor */
export declare class SearchProviderInfo {
    providerEndpoint: string;
    index: string;
}
/** options when using search() */
export declare class SearchOptions {
    useCache: boolean;
    track_total_hits: boolean;
    default_operator: "AND" | "OR";
    metadataOnly: boolean;
    fields: string[];
}
/** generic result from any search query using ElasticSearch or OpenSearch
 *  - same output as curl and dashboard console, but typed
 *  - specified here in this way to make VSCode intelliSense
 *  work better
*/
export declare type SearchResultData = {
    took: number;
    timed_out: boolean;
    _shards?: {
        total: number;
        successful: number;
        skipped: number;
        failed: number;
    };
    hits: {
        total: {
            value: number;
            relation: 'eq' | 'gte';
        };
        max_score: number;
        hits: {}[];
    };
    aggregations?: unknown;
};
/** A manager class that provides basic search capabilities
 *  including a flexible search() that provides consistent
 *  search behavior among apps (e.g., WebSearch and SearchAPI)
*/
export declare class BasicSearchManager {
    _searchReader: SearchReader;
    /** constructor that sets up provider information
     *  @param searchProviderInfo optional specifications providing provider information
     *                            default is to read it from environment variables
     */
    constructor(searchProviderInfo?: SearchProviderInfo);
    /** search for text at provider
     *  @param text the text string to search for
     *  @param options options to specify how to search, with well-defined defaults
     */
    search(text: string, options?: Partial<SearchOptions>): Promise<CveResult>;
}
