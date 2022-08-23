/* tslint:disable */
/* eslint-disable */
/**
 * Trusted Twin API
 * This documentation describes API endpoints of the Trusted Twin platform.
 *
 * The version of the OpenAPI document: 2.05.02
 * Contact: hello@trustedtwin.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    LedgerReference,
    LedgerReferenceFromJSON,
    LedgerReferenceFromJSONTyped,
    LedgerReferenceToJSON,
} from './LedgerReference';

/**
 * Ledger's reference key
 * @export
 * @interface ReferenceEntry
 */
export interface ReferenceEntry {
    /**
     * 
     * @type {LedgerReference}
     * @memberof ReferenceEntry
     */
    ref?: LedgerReference;
    /**
     * value from reference
     * @type {string}
     * @memberof ReferenceEntry
     */
    value?: string;
    /**
     * Visibility of the Entry
     * @type {string}
     * @memberof ReferenceEntry
     */
    visibility?: string;
    /**
     * UTC timestamp denoting when the Entry was created
     * @type {number}
     * @memberof ReferenceEntry
     */
    readonly entryCreatedTs?: number;
    /**
     * UTC timestamp denoting when the Entry was last updated
     * @type {number}
     * @memberof ReferenceEntry
     */
    readonly entryUpdatedTs?: number;
    /**
     * UTC timestamp denoting when the Entry's value was last changed
     * @type {number}
     * @memberof ReferenceEntry
     */
    readonly valueChangedTs?: number;
}

export function ReferenceEntryFromJSON(json: any): ReferenceEntry {
    return ReferenceEntryFromJSONTyped(json, false);
}

export function ReferenceEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferenceEntry {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ref': !exists(json, 'ref') ? undefined : LedgerReferenceFromJSON(json['ref']),
        'value': !exists(json, 'value') ? undefined : json['value'],
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
        'entryCreatedTs': !exists(json, 'entry_created_ts') ? undefined : json['entry_created_ts'],
        'entryUpdatedTs': !exists(json, 'entry_updated_ts') ? undefined : json['entry_updated_ts'],
        'valueChangedTs': !exists(json, 'value_changed_ts') ? undefined : json['value_changed_ts'],
    };
}

export function ReferenceEntryToJSON(value?: ReferenceEntry | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ref': LedgerReferenceToJSON(value.ref),
        'value': value.value,
        'visibility': value.visibility,
    };
}

