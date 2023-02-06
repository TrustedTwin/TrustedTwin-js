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
 * @interface RefreshTokenResponse
 */
export interface RefreshTokenResponse {
    /**
     * Refreshed Token
     * @type {string}
     * @memberof RefreshTokenResponse
     */
    userToken?: string;
    /**
     * UTC timestamp denoting validity of the refreshed Token
     * @type {number}
     * @memberof RefreshTokenResponse
     */
    validityTs?: number;
}

export function RefreshTokenResponseFromJSON(json: any): RefreshTokenResponse {
    return RefreshTokenResponseFromJSONTyped(json, false);
}

export function RefreshTokenResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefreshTokenResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userToken': !exists(json, 'user_token') ? undefined : json['user_token'],
        'validityTs': !exists(json, 'validity_ts') ? undefined : json['validity_ts'],
    };
}

export function RefreshTokenResponseToJSON(value?: RefreshTokenResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user_token': value.userToken,
        'validity_ts': value.validityTs,
    };
}

