/* tslint:disable */
/* eslint-disable */
/**
 * Trusted Twin API
 * This documentation describes API endpoints of the Trusted Twin platform.
 *
 * The version of the OpenAPI document: 2.02.00
 * Contact: api@trustedtwin.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    TimeseriesDatabaseTableDetails,
    TimeseriesDatabaseTableDetailsFromJSON,
    TimeseriesDatabaseTableDetailsFromJSONTyped,
    TimeseriesDatabaseTableDetailsToJSON,
} from './TimeseriesDatabaseTableDetails';

/**
 * 
 * @export
 * @interface TimeseriesTableResponseStats
 */
export interface TimeseriesTableResponseStats {
    /**
     * Table size in bytes
     * @type {number}
     * @memberof TimeseriesTableResponseStats
     */
    tableSize?: number;
    /**
     * Indexes size in bytes
     * @type {number}
     * @memberof TimeseriesTableResponseStats
     */
    indexSize?: number;
    /**
     * TOAST size in bytes
     * @type {number}
     * @memberof TimeseriesTableResponseStats
     */
    toastSize?: number;
    /**
     * Total table size
     * @type {number}
     * @memberof TimeseriesTableResponseStats
     */
    totalSize?: number;
}

export function TimeseriesTableResponseStatsFromJSON(json: any): TimeseriesTableResponseStats {
    return TimeseriesTableResponseStatsFromJSONTyped(json, false);
}

export function TimeseriesTableResponseStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeseriesTableResponseStats {
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

export function TimeseriesTableResponseStatsToJSON(value?: TimeseriesTableResponseStats | null): any {
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
