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
import {
    TimeseriesTable,
    TimeseriesTableFromJSON,
    TimeseriesTableFromJSONTyped,
    TimeseriesTableToJSON,
} from './TimeseriesTable';

/**
 * 
 * @export
 * @interface TimeseriesTables
 */
export interface TimeseriesTables {
    /**
     * 
     * @type {{ [key: string]: TimeseriesTable; }}
     * @memberof TimeseriesTables
     */
    timeseries?: { [key: string]: TimeseriesTable; };
}

export function TimeseriesTablesFromJSON(json: any): TimeseriesTables {
    return TimeseriesTablesFromJSONTyped(json, false);
}

export function TimeseriesTablesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeseriesTables {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'timeseries': !exists(json, 'timeseries') ? undefined : (mapValues(json['timeseries'], TimeseriesTableFromJSON)),
    };
}

export function TimeseriesTablesToJSON(value?: TimeseriesTables | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'timeseries': value.timeseries === undefined ? undefined : (mapValues(value.timeseries, TimeseriesTableToJSON)),
    };
}

