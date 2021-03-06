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
 * Database statistics and information
 * @export
 * @interface TimeseriesDatabaseDetails
 */
export interface TimeseriesDatabaseDetails {
    /**
     * Timeseries service status
     * @type {string}
     * @memberof TimeseriesDatabaseDetails
     */
    status?: TimeseriesDatabaseDetailsStatusEnum;
    /**
     * Database size in bytes
     * @type {number}
     * @memberof TimeseriesDatabaseDetails
     */
    databaseSize?: number;
}


/**
 * @export
 */
export const TimeseriesDatabaseDetailsStatusEnum = {
    Running: 'running',
    Pending: 'pending',
    Service: 'service'
} as const;
export type TimeseriesDatabaseDetailsStatusEnum = typeof TimeseriesDatabaseDetailsStatusEnum[keyof typeof TimeseriesDatabaseDetailsStatusEnum];


export function TimeseriesDatabaseDetailsFromJSON(json: any): TimeseriesDatabaseDetails {
    return TimeseriesDatabaseDetailsFromJSONTyped(json, false);
}

export function TimeseriesDatabaseDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeseriesDatabaseDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'databaseSize': !exists(json, 'database_size') ? undefined : json['database_size'],
    };
}

export function TimeseriesDatabaseDetailsToJSON(value?: TimeseriesDatabaseDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'database_size': value.databaseSize,
    };
}

