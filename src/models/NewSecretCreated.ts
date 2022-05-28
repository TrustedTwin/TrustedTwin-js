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
 * @interface NewSecretCreated
 */
export interface NewSecretCreated {
    /**
     * Newly created User Secret
     * @type {string}
     * @memberof NewSecretCreated
     */
    secret?: string;
}

export function NewSecretCreatedFromJSON(json: any): NewSecretCreated {
    return NewSecretCreatedFromJSONTyped(json, false);
}

export function NewSecretCreatedFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewSecretCreated {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'secret': !exists(json, 'secret') ? undefined : json['secret'],
    };
}

export function NewSecretCreatedToJSON(value?: NewSecretCreated | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'secret': value.secret,
    };
}
