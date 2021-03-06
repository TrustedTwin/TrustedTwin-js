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
import {
    PostLedgerEntriesEntriesValue,
    PostLedgerEntriesEntriesValueFromJSON,
    PostLedgerEntriesEntriesValueFromJSONTyped,
    PostLedgerEntriesEntriesValueToJSON,
} from './PostLedgerEntriesEntriesValue';

/**
 * 
 * @export
 * @interface ForeignLedger
 */
export interface ForeignLedger {
    /**
     * UTC timestamp denoting when the Entry was created
     * @type {number}
     * @memberof ForeignLedger
     */
    readonly entryCreatedTs?: number;
    /**
     * UTC timestamp denoting when the Entry was last updated
     * @type {number}
     * @memberof ForeignLedger
     */
    readonly entryUpdatedTs?: number;
    /**
     * UTC timestamp denoting when the Entry value was last changed
     * @type {number}
     * @memberof ForeignLedger
     */
    readonly valueChangedTs?: number;
    /**
     * 
     * @type {{ [key: string]: PostLedgerEntriesEntriesValue; }}
     * @memberof ForeignLedger
     */
    entries?: { [key: string]: PostLedgerEntriesEntriesValue; };
}

export function ForeignLedgerFromJSON(json: any): ForeignLedger {
    return ForeignLedgerFromJSONTyped(json, false);
}

export function ForeignLedgerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ForeignLedger {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entryCreatedTs': !exists(json, 'entry_created_ts') ? undefined : json['entry_created_ts'],
        'entryUpdatedTs': !exists(json, 'entry_updated_ts') ? undefined : json['entry_updated_ts'],
        'valueChangedTs': !exists(json, 'value_changed_ts') ? undefined : json['value_changed_ts'],
        'entries': !exists(json, 'entries') ? undefined : (mapValues(json['entries'], PostLedgerEntriesEntriesValueFromJSON)),
    };
}

export function ForeignLedgerToJSON(value?: ForeignLedger | null): any {
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

