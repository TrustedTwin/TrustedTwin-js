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
 * @interface GetLogResponse
 */
export interface GetLogResponse {
    /**
     * ID to be returned by the next call to the endpoint
     * @type {string}
     * @memberof GetLogResponse
     */
    fragment?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetLogResponse
     */
    messages?: Array<string>;
}

/**
 * Check if a given object implements the GetLogResponse interface.
 */
export function instanceOfGetLogResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetLogResponseFromJSON(json: any): GetLogResponse {
    return GetLogResponseFromJSONTyped(json, false);
}

export function GetLogResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLogResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fragment': !exists(json, 'fragment') ? undefined : json['fragment'],
        'messages': !exists(json, 'messages') ? undefined : json['messages'],
    };
}

export function GetLogResponseToJSON(value?: GetLogResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fragment': value.fragment,
        'messages': value.messages,
    };
}

