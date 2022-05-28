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
/**
 * Table statistics
 * @export
 * @interface TimeseriesDatabaseTableDetails
 */
export interface TimeseriesDatabaseTableDetails {
    /**
     * Table size in bytes
     * @type {number}
     * @memberof TimeseriesDatabaseTableDetails
     */
    tableSize?: number;
    /**
     * Indexes size in bytes
     * @type {number}
     * @memberof TimeseriesDatabaseTableDetails
     */
    indexSize?: number;
    /**
     * TOAST size in bytes
     * @type {number}
     * @memberof TimeseriesDatabaseTableDetails
     */
    toastSize?: number;
    /**
     * Total table size
     * @type {number}
     * @memberof TimeseriesDatabaseTableDetails
     */
    totalSize?: number;
}

export function TimeseriesDatabaseTableDetailsFromJSON(json: any): TimeseriesDatabaseTableDetails {
    return TimeseriesDatabaseTableDetailsFromJSONTyped(json, false);
}

export function TimeseriesDatabaseTableDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeseriesDatabaseTableDetails {
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

export function TimeseriesDatabaseTableDetailsToJSON(value?: TimeseriesDatabaseTableDetails | null): any {
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

