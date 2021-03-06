/* tslint:disable */
/* eslint-disable */
/**
 * Trusted Twin API
 * This documentation describes API endpoints of the Trusted Twin platform.
 *
 * The version of the OpenAPI document: 2.03.01
 * Contact: api@trustedtwin.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Represents Timeseries details
 * @export
 * @interface LedgerEntryTimeseries
 */
export interface LedgerEntryTimeseries {
    /**
     * 
     * @type {string}
     * @memberof LedgerEntryTimeseries
     */
    measurement?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof LedgerEntryTimeseries
     */
    dimensions?: { [key: string]: string; };
}

export function LedgerEntryTimeseriesFromJSON(json: any): LedgerEntryTimeseries {
    return LedgerEntryTimeseriesFromJSONTyped(json, false);
}

export function LedgerEntryTimeseriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): LedgerEntryTimeseries {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'measurement': !exists(json, 'measurement') ? undefined : json['measurement'],
        'dimensions': !exists(json, 'dimensions') ? undefined : json['dimensions'],
    };
}

export function LedgerEntryTimeseriesToJSON(value?: LedgerEntryTimeseries | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'measurement': value.measurement,
        'dimensions': value.dimensions,
    };
}

