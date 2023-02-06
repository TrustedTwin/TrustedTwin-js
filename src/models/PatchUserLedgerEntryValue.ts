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
    ValueEntry,
    ValueEntryFromJSON,
    ValueEntryFromJSONTyped,
    ValueEntryToJSON,
} from './ValueEntry';

/**
 * 
 * @export
 * @interface PatchUserLedgerEntryValue
 */
export interface PatchUserLedgerEntryValue {
    /**
     * 
     * @type {{ [key: string]: ValueEntry; }}
     * @memberof PatchUserLedgerEntryValue
     */
    entries?: { [key: string]: ValueEntry; };
}

export function PatchUserLedgerEntryValueFromJSON(json: any): PatchUserLedgerEntryValue {
    return PatchUserLedgerEntryValueFromJSONTyped(json, false);
}

export function PatchUserLedgerEntryValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchUserLedgerEntryValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entries': !exists(json, 'entries') ? undefined : (mapValues(json['entries'], ValueEntryFromJSON)),
    };
}

export function PatchUserLedgerEntryValueToJSON(value?: PatchUserLedgerEntryValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entries': value.entries === undefined ? undefined : (mapValues(value.entries, ValueEntryToJSON)),
    };
}

