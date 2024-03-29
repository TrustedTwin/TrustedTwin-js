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
import type { GetTimeseriesTablesResponseStats } from './GetTimeseriesTablesResponseStats';
import {
    GetTimeseriesTablesResponseStatsFromJSON,
    GetTimeseriesTablesResponseStatsFromJSONTyped,
    GetTimeseriesTablesResponseStatsToJSON,
} from './GetTimeseriesTablesResponseStats';
import type { ServicesDatabaseUserAccessCommand } from './ServicesDatabaseUserAccessCommand';
import {
    ServicesDatabaseUserAccessCommandFromJSON,
    ServicesDatabaseUserAccessCommandFromJSONTyped,
    ServicesDatabaseUserAccessCommandToJSON,
} from './ServicesDatabaseUserAccessCommand';

/**
 * 
 * @export
 * @interface GetTimeseriesTablesResponse
 */
export interface GetTimeseriesTablesResponse {
    /**
     * 
     * @type {GetTimeseriesTablesResponseStats}
     * @memberof GetTimeseriesTablesResponse
     */
    stats: GetTimeseriesTablesResponseStats;
    /**
     * Users and their Timeseries access type
     * @type {{ [key: string]: ServicesDatabaseUserAccessCommand; }}
     * @memberof GetTimeseriesTablesResponse
     */
    users?: { [key: string]: ServicesDatabaseUserAccessCommand; };
    /**
     * Timeseries tables
     * @type {Array<string>}
     * @memberof GetTimeseriesTablesResponse
     */
    timeseries?: Array<string>;
}

/**
 * Check if a given object implements the GetTimeseriesTablesResponse interface.
 */
export function instanceOfGetTimeseriesTablesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "stats" in value;

    return isInstance;
}

export function GetTimeseriesTablesResponseFromJSON(json: any): GetTimeseriesTablesResponse {
    return GetTimeseriesTablesResponseFromJSONTyped(json, false);
}

export function GetTimeseriesTablesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTimeseriesTablesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stats': GetTimeseriesTablesResponseStatsFromJSON(json['stats']),
        'users': !exists(json, 'users') ? undefined : (mapValues(json['users'], ServicesDatabaseUserAccessCommandFromJSON)),
        'timeseries': !exists(json, 'timeseries') ? undefined : json['timeseries'],
    };
}

export function GetTimeseriesTablesResponseToJSON(value?: GetTimeseriesTablesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stats': GetTimeseriesTablesResponseStatsToJSON(value.stats),
        'users': value.users === undefined ? undefined : (mapValues(value.users, ServicesDatabaseUserAccessCommandToJSON)),
        'timeseries': value.timeseries,
    };
}

