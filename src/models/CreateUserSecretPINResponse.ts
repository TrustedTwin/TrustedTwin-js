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
 * @interface CreateUserSecretPINResponse
 */
export interface CreateUserSecretPINResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateUserSecretPINResponse
     */
    pin?: string;
}

export function CreateUserSecretPINResponseFromJSON(json: any): CreateUserSecretPINResponse {
    return CreateUserSecretPINResponseFromJSONTyped(json, false);
}

export function CreateUserSecretPINResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateUserSecretPINResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pin': !exists(json, 'pin') ? undefined : json['pin'],
    };
}

export function CreateUserSecretPINResponseToJSON(value?: CreateUserSecretPINResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pin': value.pin,
    };
}

