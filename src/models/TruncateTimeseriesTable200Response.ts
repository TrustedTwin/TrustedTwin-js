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
import type { LedgerEntryTimeseries } from './LedgerEntryTimeseries';
import {
    LedgerEntryTimeseriesFromJSON,
    LedgerEntryTimeseriesFromJSONTyped,
    LedgerEntryTimeseriesToJSON,
} from './LedgerEntryTimeseries';
import type { TimeseriesColumns } from './TimeseriesColumns';
import {
    TimeseriesColumnsFromJSON,
    TimeseriesColumnsFromJSONTyped,
    TimeseriesColumnsToJSON,
} from './TimeseriesColumns';
import type { TimeseriesTableResponseStats } from './TimeseriesTableResponseStats';
import {
    TimeseriesTableResponseStatsFromJSON,
    TimeseriesTableResponseStatsFromJSONTyped,
    TimeseriesTableResponseStatsToJSON,
} from './TimeseriesTableResponseStats';

/**
 * 
 * @export
 * @interface TruncateTimeseriesTable200Response
 */
export interface TruncateTimeseriesTable200Response {
    /**
     * 
     * @type {TimeseriesTableResponseStats}
     * @memberof TruncateTimeseriesTable200Response
     */
    stats: TimeseriesTableResponseStats;
    /**
     * 
     * @type {TimeseriesColumns}
     * @memberof TruncateTimeseriesTable200Response
     */
    dimensions: TimeseriesColumns;
    /**
     * 
     * @type {TimeseriesColumns}
     * @memberof TruncateTimeseriesTable200Response
     */
    measurements: TimeseriesColumns;
    /**
     * 
     * @type {LedgerEntryTimeseries}
     * @memberof TruncateTimeseriesTable200Response
     */
    defaults?: LedgerEntryTimeseries;
    /**
     * 
     * @type {string}
     * @memberof TruncateTimeseriesTable200Response
     */
    retention?: string;
    /**
     * 
     * @type {string}
     * @memberof TruncateTimeseriesTable200Response
     */
    chunk?: string;
}

/**
 * Check if a given object implements the TruncateTimeseriesTable200Response interface.
 */
export function instanceOfTruncateTimeseriesTable200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "stats" in value;
    isInstance = isInstance && "dimensions" in value;
    isInstance = isInstance && "measurements" in value;

    return isInstance;
}

export function TruncateTimeseriesTable200ResponseFromJSON(json: any): TruncateTimeseriesTable200Response {
    return TruncateTimeseriesTable200ResponseFromJSONTyped(json, false);
}

export function TruncateTimeseriesTable200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TruncateTimeseriesTable200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stats': TimeseriesTableResponseStatsFromJSON(json['stats']),
        'dimensions': TimeseriesColumnsFromJSON(json['dimensions']),
        'measurements': TimeseriesColumnsFromJSON(json['measurements']),
        'defaults': !exists(json, 'defaults') ? undefined : LedgerEntryTimeseriesFromJSON(json['defaults']),
        'retention': !exists(json, 'retention') ? undefined : json['retention'],
        'chunk': !exists(json, 'chunk') ? undefined : json['chunk'],
    };
}

export function TruncateTimeseriesTable200ResponseToJSON(value?: TruncateTimeseriesTable200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stats': TimeseriesTableResponseStatsToJSON(value.stats),
        'dimensions': TimeseriesColumnsToJSON(value.dimensions),
        'measurements': TimeseriesColumnsToJSON(value.measurements),
        'defaults': LedgerEntryTimeseriesToJSON(value.defaults),
        'retention': value.retention,
        'chunk': value.chunk,
    };
}

