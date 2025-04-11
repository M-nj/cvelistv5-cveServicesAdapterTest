/// <reference types="node" resolution-mode="require"/>
import axios from 'axios';
import https from 'https';
import { ApiResponse, Client } from '@opensearch-project/opensearch';
import { SearchAdapterOptions, SearchEngineInfo } from './SearchAdapter.js';
/** Reader purpose adapter for OpenSearch
 *  Note that each SearchReader you instantiate represents
 *  a connection to a single domain/index, so if you need
 *  access to 2 indices, even if they are in the same OpenSearch
 *  instance, you will need to have 2 SearchReader instances.
*/
export declare class SearchReader {
    /** the domain/endpoint for this adapter */
    _openSearchDomainEndpoint: string;
    /** the index (catalog) for this adapter */
    _cveIndex: string;
    /** options for SearchAdapter */
    _options: SearchAdapterOptions;
    /** the OpenSearch javascript/typescript client */
    _client: Client;
    /** https agent, needed to ignore ssl cert errors when there are no local certs */
    _httpsAgent: https.Agent;
    /** constructor that returns a SearchAdapter object for a specific openSearch index
     *  @param cveIndex optional openSearch index name (defaults to environment variable `OpenSearchCveIndex`)
    */
    constructor(searchNode?: string, cveIndex?: string, options?: SearchAdapterOptions);
    /** using opensearch client, get information about the running
     *  search engine
     *
     * @returns a SearchEngineInfo object containing info about the running search engine
     */
    info(): Promise<SearchEngineInfo>;
    /** using axios, GET from a rest endpoint
     *  useful for inspecting properties
     * @todo this probably should be in a RestAdapter class
     * @deprecated use @opensearch-project/opensearch's client utilities where possible
     */
    get(endpoint?: string): Promise<axios.AxiosResponse<any, any>>;
    search(body: any): Promise<void | ApiResponse<Record<string, any>, unknown>>;
}
