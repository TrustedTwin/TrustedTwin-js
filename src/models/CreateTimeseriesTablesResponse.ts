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
    CreateTimeseriesTablesResponseTimeseriesValue,
    CreateTimeseriesTablesResponseTimeseriesValueFromJSON,
    CreateTimeseriesTablesResponseTimeseriesValueFromJSONTyped,
    CreateTimeseriesTablesResponseTimeseriesValueToJSON,
} from './CreateTimeseriesTablesResponseTimeseriesValue';

/**
 * 
 * @export
 * @interface CreateTimeseriesTablesResponse
 */
export interface CreateTimeseriesTablesResponse {
    /**
     * 
     * @type {{ [key: string]: CreateTimeseriesTablesResponseTimeseriesValue; }}
     * @memberof CreateTimeseriesTablesResponse
     */
    timeseries?: { [key: string]: CreateTimeseriesTablesResponseTimeseriesValue; };
}

export function CreateTimeseriesTablesResponseFromJSON(json: any): CreateTimeseriesTablesResponse {
    return CreateTimeseriesTablesResponseFromJSONTyped(json, false);
}

export function CreateTimeseriesTablesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTimeseriesTablesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'timeseries': !exists(json, 'timeseries') ? undefined : (mapValues(json['timeseries'], CreateTimeseriesTablesResponseTimeseriesValueFromJSON)),
    };
}

export function CreateTimeseriesTablesResponseToJSON(value?: CreateTimeseriesTablesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'timeseries': value.timeseries === undefined ? undefined : (mapValues(value.timeseries, CreateTimeseriesTablesResponseTimeseriesValueToJSON)),
    };
}

