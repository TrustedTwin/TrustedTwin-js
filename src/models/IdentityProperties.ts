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
/**
 * 
 * @export
 * @interface IdentityProperties
 */
export interface IdentityProperties {
    /**
     * UTC timestamp denoting validity of the Identity
     * @type {number}
     * @memberof IdentityProperties
     */
    validityTs?: number;
    /**
     * Visibility of the Identity
     * @type {string}
     * @memberof IdentityProperties
     */
    visibility?: string;
}

export function IdentityPropertiesFromJSON(json: any): IdentityProperties {
    return IdentityPropertiesFromJSONTyped(json, false);
}

export function IdentityPropertiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityProperties {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'validityTs': !exists(json, 'validity_ts') ? undefined : json['validity_ts'],
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
    };
}

export function IdentityPropertiesToJSON(value?: IdentityProperties | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'validity_ts': value.validityTs,
        'visibility': value.visibility,
    };
}

