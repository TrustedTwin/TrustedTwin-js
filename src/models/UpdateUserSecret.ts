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
 * @interface UpdateUserSecret
 */
export interface UpdateUserSecret {
    /**
     * UTC timestamp denoting validity of the User Secret
     * @type {number}
     * @memberof UpdateUserSecret
     */
    validityTs?: number;
}

export function UpdateUserSecretFromJSON(json: any): UpdateUserSecret {
    return UpdateUserSecretFromJSONTyped(json, false);
}

export function UpdateUserSecretFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateUserSecret {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'validityTs': !exists(json, 'validity_ts') ? undefined : json['validity_ts'],
    };
}

export function UpdateUserSecretToJSON(value?: UpdateUserSecret | null): any {
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

