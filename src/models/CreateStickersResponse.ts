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
import type { CreateStickersResponseStickersValue } from './CreateStickersResponseStickersValue';
import {
    CreateStickersResponseStickersValueFromJSON,
    CreateStickersResponseStickersValueFromJSONTyped,
    CreateStickersResponseStickersValueToJSON,
} from './CreateStickersResponseStickersValue';

/**
 * 
 * @export
 * @interface CreateStickersResponse
 */
export interface CreateStickersResponse {
    /**
     * 
     * @type {{ [key: string]: CreateStickersResponseStickersValue; }}
     * @memberof CreateStickersResponse
     */
    stickers?: { [key: string]: CreateStickersResponseStickersValue; };
}

/**
 * Check if a given object implements the CreateStickersResponse interface.
 */
export function instanceOfCreateStickersResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateStickersResponseFromJSON(json: any): CreateStickersResponse {
    return CreateStickersResponseFromJSONTyped(json, false);
}

export function CreateStickersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateStickersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stickers': !exists(json, 'stickers') ? undefined : (mapValues(json['stickers'], CreateStickersResponseStickersValueFromJSON)),
    };
}

export function CreateStickersResponseToJSON(value?: CreateStickersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stickers': value.stickers === undefined ? undefined : (mapValues(value.stickers, CreateStickersResponseStickersValueToJSON)),
    };
}

