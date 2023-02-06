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
    PostLedgerEntriesEntriesValue,
    PostLedgerEntriesEntriesValueFromJSON,
    PostLedgerEntriesEntriesValueFromJSONTyped,
    PostLedgerEntriesEntriesValueToJSON,
} from './PostLedgerEntriesEntriesValue';

/**
 * 
 * @export
 * @interface PostLedgerEntries
 */
export interface PostLedgerEntries {
    /**
     * 
     * @type {{ [key: string]: PostLedgerEntriesEntriesValue; }}
     * @memberof PostLedgerEntries
     */
    entries?: { [key: string]: PostLedgerEntriesEntriesValue; };
}

export function PostLedgerEntriesFromJSON(json: any): PostLedgerEntries {
    return PostLedgerEntriesFromJSONTyped(json, false);
}

export function PostLedgerEntriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostLedgerEntries {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entries': !exists(json, 'entries') ? undefined : (mapValues(json['entries'], PostLedgerEntriesEntriesValueFromJSON)),
    };
}

export function PostLedgerEntriesToJSON(value?: PostLedgerEntries | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entries': value.entries === undefined ? undefined : (mapValues(value.entries, PostLedgerEntriesEntriesValueToJSON)),
    };
}

