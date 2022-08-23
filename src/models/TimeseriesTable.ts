/* tslint:disable */
/* eslint-disable */
/**
 * Trusted Twin API
 * This documentation describes API endpoints of the Trusted Twin platform.
 *
 * The version of the OpenAPI document: 2.05.02
 * Contact: hello@trustedtwin.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    LedgerEntryTimeseries,
    LedgerEntryTimeseriesFromJSON,
    LedgerEntryTimeseriesFromJSONTyped,
    LedgerEntryTimeseriesToJSON,
} from './LedgerEntryTimeseries';
import {
    TimeseriesColumns,
    TimeseriesColumnsFromJSON,
    TimeseriesColumnsFromJSONTyped,
    TimeseriesColumnsToJSON,
} from './TimeseriesColumns';

/**
 * 
 * @export
 * @interface TimeseriesTable
 */
export interface TimeseriesTable {
    /**
     * 
     * @type {TimeseriesColumns}
     * @memberof TimeseriesTable
     */
    dimensions: TimeseriesColumns;
    /**
     * 
     * @type {TimeseriesColumns}
     * @memberof TimeseriesTable
     */
    measurements: TimeseriesColumns;
    /**
     * 
     * @type {LedgerEntryTimeseries}
     * @memberof TimeseriesTable
     */
    defaults?: LedgerEntryTimeseries;
    /**
     * 
     * @type {string}
     * @memberof TimeseriesTable
     */
    retention?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TimeseriesTable
     */
    chunk?: string | null;
}

export function TimeseriesTableFromJSON(json: any): TimeseriesTable {
    return TimeseriesTableFromJSONTyped(json, false);
}

export function TimeseriesTableFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeseriesTable {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dimensions': TimeseriesColumnsFromJSON(json['dimensions']),
        'measurements': TimeseriesColumnsFromJSON(json['measurements']),
        'defaults': !exists(json, 'defaults') ? undefined : LedgerEntryTimeseriesFromJSON(json['defaults']),
        'retention': !exists(json, 'retention') ? undefined : json['retention'],
        'chunk': !exists(json, 'chunk') ? undefined : json['chunk'],
    };
}

export function TimeseriesTableToJSON(value?: TimeseriesTable | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dimensions': TimeseriesColumnsToJSON(value.dimensions),
        'measurements': TimeseriesColumnsToJSON(value.measurements),
        'defaults': LedgerEntryTimeseriesToJSON(value.defaults),
        'retention': value.retention,
        'chunk': value.chunk,
    };
}

