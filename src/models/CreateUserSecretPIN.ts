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
/**
 * 
 * @export
 * @interface CreateUserSecretPIN
 */
export interface CreateUserSecretPIN {
    /**
     * UTC timestamp denoting validity of the User Secret
     * @type {number}
     * @memberof CreateUserSecretPIN
     */
    validityTs?: number;
}

export function CreateUserSecretPINFromJSON(json: any): CreateUserSecretPIN {
    return CreateUserSecretPINFromJSONTyped(json, false);
}

export function CreateUserSecretPINFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateUserSecretPIN {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'validityTs': !exists(json, 'validity_ts') ? undefined : json['validity_ts'],
    };
}

export function CreateUserSecretPINToJSON(value?: CreateUserSecretPIN | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'validity_ts': value.validityTs,
    };
}

