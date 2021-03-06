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
 * @interface UserDefinitionAllOf1
 */
export interface UserDefinitionAllOf1 {
    /**
     * UTC timestamp denoting when User was created
     * @type {number}
     * @memberof UserDefinitionAllOf1
     */
    createdTs?: number;
    /**
     * UTC timestamp denoting when User was last updated
     * @type {number}
     * @memberof UserDefinitionAllOf1
     */
    updatedTs?: number;
}

export function UserDefinitionAllOf1FromJSON(json: any): UserDefinitionAllOf1 {
    return UserDefinitionAllOf1FromJSONTyped(json, false);
}

export function UserDefinitionAllOf1FromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDefinitionAllOf1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdTs': !exists(json, 'created_ts') ? undefined : json['created_ts'],
        'updatedTs': !exists(json, 'updated_ts') ? undefined : json['updated_ts'],
    };
}

export function UserDefinitionAllOf1ToJSON(value?: UserDefinitionAllOf1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_ts': value.createdTs,
        'updated_ts': value.updatedTs,
    };
}

