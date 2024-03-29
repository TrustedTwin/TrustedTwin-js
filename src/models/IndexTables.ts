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
import type { IndexTable } from './IndexTable';
import {
    IndexTableFromJSON,
    IndexTableFromJSONTyped,
    IndexTableToJSON,
} from './IndexTable';

/**
 * 
 * @export
 * @interface IndexTables
 */
export interface IndexTables {
    /**
     * 
     * @type {{ [key: string]: IndexTable; }}
     * @memberof IndexTables
     */
    indexes?: { [key: string]: IndexTable; };
}

/**
 * Check if a given object implements the IndexTables interface.
 */
export function instanceOfIndexTables(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IndexTablesFromJSON(json: any): IndexTables {
    return IndexTablesFromJSONTyped(json, false);
}

export function IndexTablesFromJSONTyped(json: any, ignoreDiscriminator: boolean): IndexTables {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'indexes': !exists(json, 'indexes') ? undefined : (mapValues(json['indexes'], IndexTableFromJSON)),
    };
}

export function IndexTablesToJSON(value?: IndexTables | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'indexes': value.indexes === undefined ? undefined : (mapValues(value.indexes, IndexTableToJSON)),
    };
}

