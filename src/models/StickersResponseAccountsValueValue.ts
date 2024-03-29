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
 * @interface StickersResponseAccountsValueValue
 */
export interface StickersResponseAccountsValueValue {
    /**
     * 
     * @type {string}
     * @memberof StickersResponseAccountsValueValue
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof StickersResponseAccountsValueValue
     */
    validityTs?: number;
    /**
     * 
     * @type {number}
     * @memberof StickersResponseAccountsValueValue
     */
    createdTs?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof StickersResponseAccountsValueValue
     */
    publish?: Array<StickersResponseAccountsValueValuePublishEnum>;
}


/**
 * @export
 */
export const StickersResponseAccountsValueValuePublishEnum = {
    Put: 'on_put',
    Remove: 'on_remove',
    Expire: 'on_expire'
} as const;
export type StickersResponseAccountsValueValuePublishEnum = typeof StickersResponseAccountsValueValuePublishEnum[keyof typeof StickersResponseAccountsValueValuePublishEnum];


/**
 * Check if a given object implements the StickersResponseAccountsValueValue interface.
 */
export function instanceOfStickersResponseAccountsValueValue(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StickersResponseAccountsValueValueFromJSON(json: any): StickersResponseAccountsValueValue {
    return StickersResponseAccountsValueValueFromJSONTyped(json, false);
}

export function StickersResponseAccountsValueValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): StickersResponseAccountsValueValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
        'validityTs': !exists(json, 'validity_ts') ? undefined : json['validity_ts'],
        'createdTs': !exists(json, 'created_ts') ? undefined : json['created_ts'],
        'publish': !exists(json, 'publish') ? undefined : json['publish'],
    };
}

export function StickersResponseAccountsValueValueToJSON(value?: StickersResponseAccountsValueValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'validity_ts': value.validityTs,
        'created_ts': value.createdTs,
        'publish': value.publish,
    };
}

