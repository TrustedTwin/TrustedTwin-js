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
/**
 * 
 * @export
 * @interface IndexTemplates
 */
export interface IndexTemplates {
    /**
     * Rules for mapping ledger entries to index properties
     * @type {{ [key: string]: string; }}
     * @memberof IndexTemplates
     */
    properties?: { [key: string]: string; };
}

/**
 * Check if a given object implements the IndexTemplates interface.
 */
export function instanceOfIndexTemplates(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IndexTemplatesFromJSON(json: any): IndexTemplates {
    return IndexTemplatesFromJSONTyped(json, false);
}

export function IndexTemplatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): IndexTemplates {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'properties': !exists(json, 'properties') ? undefined : json['properties'],
    };
}

export function IndexTemplatesToJSON(value?: IndexTemplates | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'properties': value.properties,
    };
}

