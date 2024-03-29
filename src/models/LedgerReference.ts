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
 * @interface LedgerReference
 */
export interface LedgerReference {
    /**
     * Source path to the value that the Entry references
     * @type {string}
     * @memberof LedgerReference
     */
    source?: string;
    /**
     * Status of the reference
     * @type {string}
     * @memberof LedgerReference
     */
    status?: LedgerReferenceStatusEnum;
}


/**
 * @export
 */
export const LedgerReferenceStatusEnum = {
    NotFound: 'not_found',
    LoopDetected: 'loop_detected',
    TooManyHops: 'too_many_hops',
    Ok: 'ok',
    Created: 'created'
} as const;
export type LedgerReferenceStatusEnum = typeof LedgerReferenceStatusEnum[keyof typeof LedgerReferenceStatusEnum];


/**
 * Check if a given object implements the LedgerReference interface.
 */
export function instanceOfLedgerReference(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LedgerReferenceFromJSON(json: any): LedgerReference {
    return LedgerReferenceFromJSONTyped(json, false);
}

export function LedgerReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): LedgerReference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'source': !exists(json, 'source') ? undefined : json['source'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function LedgerReferenceToJSON(value?: LedgerReference | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'source': value.source,
        'status': value.status,
    };
}

