export declare type SearchEngineInfo = {
    name: string;
    cluster_name: string;
    cluster_uuid: string;
    version: {
        distribution: string;
        number: string;
        build_type: string;
        build_hash: string;
        build_date: string;
        build_snapshot: boolean;
        lucene_version: string;
        minimum_wire_compatibility_version: string;
        minimum_index_compatibility_version: string;
    };
    tagline: string;
};
/** options to pass to SearchAdapter constructor
 *  that changes the behavior of SearchAdapter
 *
 */
export declare type SearchAdapterOptions = {
    ignore_ssl_cert_check_errors?: boolean;
};
