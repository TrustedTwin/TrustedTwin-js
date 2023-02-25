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
 * @interface Description
 */
export interface Description {
    /**
     * Custom defined variables
     * @type {{ [key: string]: string; }}
     * @memberof Description
     */
    description?: { [key: string]: string; };
}

/**
 * Check if a given object implements the Description interface.
 */
export function instanceOfDescription(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DescriptionFromJSON(json: any): Description {
    return DescriptionFromJSONTyped(json, false);
}

export function DescriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Description {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function DescriptionToJSON(value?: Description | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
    };
}

