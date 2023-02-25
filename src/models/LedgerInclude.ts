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
 * @interface LedgerInclude
 */
export interface LedgerInclude {
    /**
     * Source path to the value that the Entry includes
     * @type {string}
     * @memberof LedgerInclude
     */
    source?: string;
}

/**
 * Check if a given object implements the LedgerInclude interface.
 */
export function instanceOfLedgerInclude(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LedgerIncludeFromJSON(json: any): LedgerInclude {
    return LedgerIncludeFromJSONTyped(json, false);
}

export function LedgerIncludeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LedgerInclude {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'source': !exists(json, 'source') ? undefined : json['source'],
    };
}

export function LedgerIncludeToJSON(value?: LedgerInclude | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'source': value.source,
    };
}

