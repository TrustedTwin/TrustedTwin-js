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
 * @interface InvalidateHandlerResponse
 */
export interface InvalidateHandlerResponse {
    /**
     * file identifier which has to be provided in payload for attach_twin_doc API function
     * @type {string}
     * @memberof InvalidateHandlerResponse
     */
    handler?: string;
}

export function InvalidateHandlerResponseFromJSON(json: any): InvalidateHandlerResponse {
    return InvalidateHandlerResponseFromJSONTyped(json, false);
}

export function InvalidateHandlerResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvalidateHandlerResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'handler': !exists(json, 'handler') ? undefined : json['handler'],
    };
}

export function InvalidateHandlerResponseToJSON(value?: InvalidateHandlerResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'handler': value.handler,
    };
}

