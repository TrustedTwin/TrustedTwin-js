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
import {
    ServicesDatabaseColumnType,
    ServicesDatabaseColumnTypeFromJSON,
    ServicesDatabaseColumnTypeFromJSONTyped,
    ServicesDatabaseColumnTypeToJSON,
} from './ServicesDatabaseColumnType';

/**
 * Timeseries table columns definition
 * @export
 * @interface TimeseriesColumns
 */
export interface TimeseriesColumns {
    /**
     * 
     * @type {Array<string>}
     * @memberof TimeseriesColumns
     */
    names?: Array<string>;
    /**
     * 
     * @type {Array<ServicesDatabaseColumnType>}
     * @memberof TimeseriesColumns
     */
    types?: Array<ServicesDatabaseColumnType>;
}

export function TimeseriesColumnsFromJSON(json: any): TimeseriesColumns {
    return TimeseriesColumnsFromJSONTyped(json, false);
}

export function TimeseriesColumnsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeseriesColumns {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'names': !exists(json, 'names') ? undefined : json['names'],
        'types': !exists(json, 'types') ? undefined : ((json['types'] as Array<any>).map(ServicesDatabaseColumnTypeFromJSON)),
    };
}

export function TimeseriesColumnsToJSON(value?: TimeseriesColumns | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'names': value.names,
        'types': value.types === undefined ? undefined : ((value.types as Array<any>).map(ServicesDatabaseColumnTypeToJSON)),
    };
}

