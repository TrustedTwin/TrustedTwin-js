/* tslint:disable */
/* eslint-disable */
/**
 * Trusted Twin API
 * This documentation describes API endpoints of the Trusted Twin platform.
 *
 * The version of the OpenAPI document: 2.03.01
 * Contact: api@trustedtwin.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    LedgerEntryTimeseries,
    LedgerEntryTimeseriesFromJSON,
    LedgerEntryTimeseriesFromJSONTyped,
    LedgerEntryTimeseriesToJSON,
} from './LedgerEntryTimeseries';
import {
    LedgerReference,
    LedgerReferenceFromJSON,
    LedgerReferenceFromJSONTyped,
    LedgerReferenceToJSON,
} from './LedgerReference';
import {
    ReferenceEntry,
    ReferenceEntryFromJSON,
    ReferenceEntryFromJSONTyped,
    ReferenceEntryToJSON,
} from './ReferenceEntry';
import {
    ValueEntry,
    ValueEntryFromJSON,
    ValueEntryFromJSONTyped,
    ValueEntryToJSON,
} from './ValueEntry';

/**
 * 
 * @export
 * @interface PostLedgerEntriesEntriesValue
 */
export interface PostLedgerEntriesEntriesValue {
    /**
     * 
     * @type {LedgerReference}
     * @memberof PostLedgerEntriesEntriesValue
     */
    ref?: LedgerReference;
    /**
     * value for corresponding Key
     * @type {string}
     * @memberof PostLedgerEntriesEntriesValue
     */
    value?: string;
    /**
     * Visibility of the Entry
     * @type {string}
     * @memberof PostLedgerEntriesEntriesValue
     */
    visibility?: string;
    /**
     * UTC timestamp denoting when the Entry was created
     * @type {number}
     * @memberof PostLedgerEntriesEntriesValue
     */
    readonly entryCreatedTs?: number;
    /**
     * UTC timestamp denoting when the Entry was last updated
     * @type {number}
     * @memberof PostLedgerEntriesEntriesValue
     */
    readonly entryUpdatedTs?: number;
    /**
     * UTC timestamp denoting when the Entry's value was last changed
     * @type {number}
     * @memberof PostLedgerEntriesEntriesValue
     */
    readonly valueChangedTs?: number;
    /**
     * type of value
     * @type {string}
     * @memberof PostLedgerEntriesEntriesValue
     */
    type?: PostLedgerEntriesEntriesValueTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PostLedgerEntriesEntriesValue
     */
    history?: string | null;
    /**
     * 
     * @type {LedgerEntryTimeseries}
     * @memberof PostLedgerEntriesEntriesValue
     */
    timeseries?: LedgerEntryTimeseries;
}


/**
 * @export
 */
export const PostLedgerEntriesEntriesValueTypeEnum = {
    String: 'string',
    Integer: 'integer',
    Datetime: 'datetime'
} as const;
export type PostLedgerEntriesEntriesValueTypeEnum = typeof PostLedgerEntriesEntriesValueTypeEnum[keyof typeof PostLedgerEntriesEntriesValueTypeEnum];


export function PostLedgerEntriesEntriesValueFromJSON(json: any): PostLedgerEntriesEntriesValue {
    return PostLedgerEntriesEntriesValueFromJSONTyped(json, false);
}

export function PostLedgerEntriesEntriesValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostLedgerEntriesEntriesValue {
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
        'type': !exists(json, 'type') ? undefined : json['type'],
        'history': !exists(json, 'history') ? undefined : json['history'],
        'timeseries': !exists(json, 'timeseries') ? undefined : LedgerEntryTimeseriesFromJSON(json['timeseries']),
    };
}

export function PostLedgerEntriesEntriesValueToJSON(value?: PostLedgerEntriesEntriesValue | null): any {
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
        'type': value.type,
        'history': value.history,
        'timeseries': LedgerEntryTimeseriesToJSON(value.timeseries),
    };
}

