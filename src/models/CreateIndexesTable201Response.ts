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
    CreateIndexTablesResponse,
    CreateIndexTablesResponseFromJSON,
    CreateIndexTablesResponseFromJSONTyped,
    CreateIndexTablesResponseToJSON,
} from './CreateIndexTablesResponse';
import {
    CreateIndexTablesResponseIndexesValue,
    CreateIndexTablesResponseIndexesValueFromJSON,
    CreateIndexTablesResponseIndexesValueFromJSONTyped,
    CreateIndexTablesResponseIndexesValueToJSON,
} from './CreateIndexTablesResponseIndexesValue';

/**
 * 
 * @export
 * @interface CreateIndexesTable201Response
 */
export interface CreateIndexesTable201Response {
    /**
     * 
     * @type {{ [key: string]: CreateIndexTablesResponseIndexesValue; }}
     * @memberof CreateIndexesTable201Response
     */
    indexes?: { [key: string]: CreateIndexTablesResponseIndexesValue; };
}

export function CreateIndexesTable201ResponseFromJSON(json: any): CreateIndexesTable201Response {
    return CreateIndexesTable201ResponseFromJSONTyped(json, false);
}

export function CreateIndexesTable201ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateIndexesTable201Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'indexes': !exists(json, 'indexes') ? undefined : (mapValues(json['indexes'], CreateIndexTablesResponseIndexesValueFromJSON)),
    };
}

export function CreateIndexesTable201ResponseToJSON(value?: CreateIndexesTable201Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'indexes': value.indexes === undefined ? undefined : (mapValues(value.indexes, CreateIndexTablesResponseIndexesValueToJSON)),
    };
}

