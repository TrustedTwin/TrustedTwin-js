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
    ValueEntry,
    ValueEntryFromJSON,
    ValueEntryFromJSONTyped,
    ValueEntryToJSON,
} from './ValueEntry';

/**
 * 
 * @export
 * @interface PostForeignLedger
 */
export interface PostForeignLedger {
    /**
     * 
     * @type {{ [key: string]: ValueEntry; }}
     * @memberof PostForeignLedger
     */
    entries?: { [key: string]: ValueEntry; };
}

export function PostForeignLedgerFromJSON(json: any): PostForeignLedger {
    return PostForeignLedgerFromJSONTyped(json, false);
}

export function PostForeignLedgerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostForeignLedger {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entries': !exists(json, 'entries') ? undefined : (mapValues(json['entries'], ValueEntryFromJSON)),
    };
}

export function PostForeignLedgerToJSON(value?: PostForeignLedger | null): any {
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

