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
    IndexColumns,
    IndexColumnsFromJSON,
    IndexColumnsFromJSONTyped,
    IndexColumnsToJSON,
} from './IndexColumns';
import {
    IndexTableResponseStats,
    IndexTableResponseStatsFromJSON,
    IndexTableResponseStatsFromJSONTyped,
    IndexTableResponseStatsToJSON,
} from './IndexTableResponseStats';
import {
    IndexTemplates,
    IndexTemplatesFromJSON,
    IndexTemplatesFromJSONTyped,
    IndexTemplatesToJSON,
} from './IndexTemplates';

/**
 * 
 * @export
 * @interface IndexTableResponse
 */
export interface IndexTableResponse {
    /**
     * 
     * @type {IndexTableResponseStats}
     * @memberof IndexTableResponse
     */
    stats: IndexTableResponseStats;
    /**
     * Rule
     * @type {string}
     * @memberof IndexTableResponse
     */
    rule: string;
    /**
     * 
     * @type {IndexColumns}
     * @memberof IndexTableResponse
     */
    properties: IndexColumns;
    /**
     * 
     * @type {IndexTemplates}
     * @memberof IndexTableResponse
     */
    templates: IndexTemplates;
}

export function IndexTableResponseFromJSON(json: any): IndexTableResponse {
    return IndexTableResponseFromJSONTyped(json, false);
}

export function IndexTableResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IndexTableResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stats': IndexTableResponseStatsFromJSON(json['stats']),
        'rule': json['rule'],
        'properties': IndexColumnsFromJSON(json['properties']),
        'templates': IndexTemplatesFromJSON(json['templates']),
    };
}

export function IndexTableResponseToJSON(value?: IndexTableResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stats': IndexTableResponseStatsToJSON(value.stats),
        'rule': value.rule,
        'properties': IndexColumnsToJSON(value.properties),
        'templates': IndexTemplatesToJSON(value.templates),
    };
}

