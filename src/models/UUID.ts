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
 * @interface UUID
 */
export interface UUID {
    /**
     * UUID
     * @type {string}
     * @memberof UUID
     */
    readonly uuid?: string;
}

export function UUIDFromJSON(json: any): UUID {
    return UUIDFromJSONTyped(json, false);
}

export function UUIDFromJSONTyped(json: any, ignoreDiscriminator: boolean): UUID {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
    };
}

export function UUIDToJSON(value?: UUID | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}
