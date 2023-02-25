/* tslint:disable */
/* eslint-disable */
/**
 * Trusted Twin API
 * TT API Gateway.
 *
 * The version of the OpenAPI document: 2.13.00
 * Contact: hello@trustedtwin.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface IndexTableResponseStats
 */
export interface IndexTableResponseStats {
    /**
     * Table size in bytes
     * @type {number}
     * @memberof IndexTableResponseStats
     */
    tableSize?: number;
    /**
     * Indexes size in bytes
     * @type {number}
     * @memberof IndexTableResponseStats
     */
    indexSize?: number;
    /**
     * TOAST size in bytes
     * @type {number}
     * @memberof IndexTableResponseStats
     */
    toastSize?: number;
    /**
     * Total table size
     * @type {number}
     * @memberof IndexTableResponseStats
     */
    totalSize?: number;
}

/**
 * Check if a given object implements the IndexTableResponseStats interface.
 */
export function instanceOfIndexTableResponseStats(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IndexTableResponseStatsFromJSON(json: any): IndexTableResponseStats {
    return IndexTableResponseStatsFromJSONTyped(json, false);
}

export function IndexTableResponseStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): IndexTableResponseStats {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tableSize': !exists(json, 'table_size') ? undefined : json['table_size'],
        'indexSize': !exists(json, 'index_size') ? undefined : json['index_size'],
        'toastSize': !exists(json, 'toast_size') ? undefined : json['toast_size'],
        'totalSize': !exists(json, 'total_size') ? undefined : json['total_size'],
    };
}

export function IndexTableResponseStatsToJSON(value?: IndexTableResponseStats | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'table_size': value.tableSize,
        'index_size': value.indexSize,
        'toast_size': value.toastSize,
        'total_size': value.totalSize,
    };
}

