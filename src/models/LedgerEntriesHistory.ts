/* tslint:disable */
/* eslint-disable */
/**
 * Trusted Twin API
 * This documentation describes API endpoints of the Trusted Twin platform.
 *
 * The version of the OpenAPI document: 2.02.00
 * Contact: api@trustedtwin.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface LedgerEntriesHistory
 */
export interface LedgerEntriesHistory {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof LedgerEntriesHistory
     */
    entries?: { [key: string]: any; };
}

export function LedgerEntriesHistoryFromJSON(json: any): LedgerEntriesHistory {
    return LedgerEntriesHistoryFromJSONTyped(json, false);
}

export function LedgerEntriesHistoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): LedgerEntriesHistory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entries': !exists(json, 'entries') ? undefined : json['entries'],
    };
}

export function LedgerEntriesHistoryToJSON(value?: LedgerEntriesHistory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entries': value.entries,
    };
}

