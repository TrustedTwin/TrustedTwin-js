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
 * @interface UserDefinitionAllOf
 */
export interface UserDefinitionAllOf {
    /**
     * User UUID
     * @type {string}
     * @memberof UserDefinitionAllOf
     */
    uuid?: string;
    /**
     * Role UUID
     * @type {string}
     * @memberof UserDefinitionAllOf
     */
    role?: string;
    /**
     * Account UUID
     * @type {string}
     * @memberof UserDefinitionAllOf
     */
    account?: string;
}

export function UserDefinitionAllOfFromJSON(json: any): UserDefinitionAllOf {
    return UserDefinitionAllOfFromJSONTyped(json, false);
}

export function UserDefinitionAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDefinitionAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'role': !exists(json, 'role') ? undefined : json['role'],
        'account': !exists(json, 'account') ? undefined : json['account'],
    };
}

export function UserDefinitionAllOfToJSON(value?: UserDefinitionAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'role': value.role,
        'account': value.account,
    };
}

