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
import type { PostLedgerEntriesEntriesValue } from './PostLedgerEntriesEntriesValue';
import {
    PostLedgerEntriesEntriesValueFromJSON,
    PostLedgerEntriesEntriesValueFromJSONTyped,
    PostLedgerEntriesEntriesValueToJSON,
} from './PostLedgerEntriesEntriesValue';

/**
 * 
 * @export
 * @interface PatchedUserLedger
 */
export interface PatchedUserLedger {
    /**
     * UTC timestamp denoting when the Ledger was created
     * @type {number}
     * @memberof PatchedUserLedger
     */
    readonly entryCreatedTs?: number;
    /**
     * UTC timestamp denoting when an Entry in the Ledger was last updated
     * @type {number}
     * @memberof PatchedUserLedger
     */
    readonly entryUpdatedTs?: number;
    /**
     * UTC timestamp denoting when a value of an Entry in the Ledger was last changed
     * @type {number}
     * @memberof PatchedUserLedger
     */
    readonly valueChangedTs?: number;
    /**
     * 
     * @type {{ [key: string]: PostLedgerEntriesEntriesValue; }}
     * @memberof PatchedUserLedger
     */
    entries?: { [key: string]: PostLedgerEntriesEntriesValue; };
}

/**
 * Check if a given object implements the PatchedUserLedger interface.
 */
export function instanceOfPatchedUserLedger(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchedUserLedgerFromJSON(json: any): PatchedUserLedger {
    return PatchedUserLedgerFromJSONTyped(json, false);
}

export function PatchedUserLedgerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedUserLedger {
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

export function PatchedUserLedgerToJSON(value?: PatchedUserLedger | null): any {
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

