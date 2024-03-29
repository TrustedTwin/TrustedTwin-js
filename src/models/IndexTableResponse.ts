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
import type { IndexColumns } from './IndexColumns';
import {
    IndexColumnsFromJSON,
    IndexColumnsFromJSONTyped,
    IndexColumnsToJSON,
} from './IndexColumns';
import type { IndexTableResponseStats } from './IndexTableResponseStats';
import {
    IndexTableResponseStatsFromJSON,
    IndexTableResponseStatsFromJSONTyped,
    IndexTableResponseStatsToJSON,
} from './IndexTableResponseStats';
import type { IndexTemplates } from './IndexTemplates';
import {
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

/**
 * Check if a given object implements the IndexTableResponse interface.
 */
export function instanceOfIndexTableResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "stats" in value;
    isInstance = isInstance && "rule" in value;
    isInstance = isInstance && "properties" in value;
    isInstance = isInstance && "templates" in value;

    return isInstance;
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

