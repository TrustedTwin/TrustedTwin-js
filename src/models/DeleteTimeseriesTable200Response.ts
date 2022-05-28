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
    LedgerTimeseries,
    LedgerTimeseriesFromJSON,
    LedgerTimeseriesFromJSONTyped,
    LedgerTimeseriesToJSON,
} from './LedgerTimeseries';
import {
    TimeseriesColumns,
    TimeseriesColumnsFromJSON,
    TimeseriesColumnsFromJSONTyped,
    TimeseriesColumnsToJSON,
} from './TimeseriesColumns';
import {
    TimeseriesTableResponse,
    TimeseriesTableResponseFromJSON,
    TimeseriesTableResponseFromJSONTyped,
    TimeseriesTableResponseToJSON,
} from './TimeseriesTableResponse';
import {
    TimeseriesTableResponseStats,
    TimeseriesTableResponseStatsFromJSON,
    TimeseriesTableResponseStatsFromJSONTyped,
    TimeseriesTableResponseStatsToJSON,
} from './TimeseriesTableResponseStats';

/**
 * 
 * @export
 * @interface DeleteTimeseriesTable200Response
 */
export interface DeleteTimeseriesTable200Response {
    /**
     * 
     * @type {TimeseriesTableResponseStats}
     * @memberof DeleteTimeseriesTable200Response
     */
    stats: TimeseriesTableResponseStats;
    /**
     * 
     * @type {TimeseriesColumns}
     * @memberof DeleteTimeseriesTable200Response
     */
    dimensions: TimeseriesColumns;
    /**
     * 
     * @type {TimeseriesColumns}
     * @memberof DeleteTimeseriesTable200Response
     */
    measurements: TimeseriesColumns;
    /**
     * 
     * @type {LedgerTimeseries}
     * @memberof DeleteTimeseriesTable200Response
     */
    defaults?: LedgerTimeseries;
    /**
     * 
     * @type {string}
     * @memberof DeleteTimeseriesTable200Response
     */
    retention?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeleteTimeseriesTable200Response
     */
    chunk?: string | null;
}

export function DeleteTimeseriesTable200ResponseFromJSON(json: any): DeleteTimeseriesTable200Response {
    return DeleteTimeseriesTable200ResponseFromJSONTyped(json, false);
}

export function DeleteTimeseriesTable200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteTimeseriesTable200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stats': TimeseriesTableResponseStatsFromJSON(json['stats']),
        'dimensions': TimeseriesColumnsFromJSON(json['dimensions']),
        'measurements': TimeseriesColumnsFromJSON(json['measurements']),
        'defaults': !exists(json, 'defaults') ? undefined : LedgerTimeseriesFromJSON(json['defaults']),
        'retention': !exists(json, 'retention') ? undefined : json['retention'],
        'chunk': !exists(json, 'chunk') ? undefined : json['chunk'],
    };
}

export function DeleteTimeseriesTable200ResponseToJSON(value?: DeleteTimeseriesTable200Response | null): any {
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
        'defaults': LedgerTimeseriesToJSON(value.defaults),
        'retention': value.retention,
        'chunk': value.chunk,
    };
}
