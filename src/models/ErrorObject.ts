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
 * @interface ErrorObject
 */
export interface ErrorObject {
    /**
     * human-readable description of issue
     * @type {string}
     * @memberof ErrorObject
     */
    description?: string;
    /**
     * ID of an error from the pool of all system-defined exceptions
     * @type {string}
     * @memberof ErrorObject
     */
    subcode?: string;
    /**
     * unique ID of an error for debugging purposes
     * @type {string}
     * @memberof ErrorObject
     */
    trace?: string;
    /**
     * URL to documentation with description of an error
     * @type {string}
     * @memberof ErrorObject
     */
    help?: string;
}

/**
 * Check if a given object implements the ErrorObject interface.
 */
export function instanceOfErrorObject(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ErrorObjectFromJSON(json: any): ErrorObject {
    return ErrorObjectFromJSONTyped(json, false);
}

export function ErrorObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'subcode': !exists(json, 'subcode') ? undefined : json['subcode'],
        'trace': !exists(json, 'trace') ? undefined : json['trace'],
        'help': !exists(json, 'help') ? undefined : json['help'],
    };
}

export function ErrorObjectToJSON(value?: ErrorObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'subcode': value.subcode,
        'trace': value.trace,
        'help': value.help,
    };
}

