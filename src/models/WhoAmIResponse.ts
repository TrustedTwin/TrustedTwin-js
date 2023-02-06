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
 * @interface WhoAmIResponse
 */
export interface WhoAmIResponse {
    /**
     * Account UUID
     * @type {string}
     * @memberof WhoAmIResponse
     */
    account?: string;
    /**
     * User UUID
     * @type {string}
     * @memberof WhoAmIResponse
     */
    user?: string;
    /**
     * Role UUID
     * @type {string}
     * @memberof WhoAmIResponse
     */
    role?: string;
}

export function WhoAmIResponseFromJSON(json: any): WhoAmIResponse {
    return WhoAmIResponseFromJSONTyped(json, false);
}

export function WhoAmIResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WhoAmIResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'account': !exists(json, 'account') ? undefined : json['account'],
        'user': !exists(json, 'user') ? undefined : json['user'],
        'role': !exists(json, 'role') ? undefined : json['role'],
    };
}

export function WhoAmIResponseToJSON(value?: WhoAmIResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account': value.account,
        'user': value.user,
        'role': value.role,
    };
}

