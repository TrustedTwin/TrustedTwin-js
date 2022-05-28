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
 * @interface UpdateTwinDoc
 */
export interface UpdateTwinDoc {
    /**
     * Custom defined variables
     * @type {{ [key: string]: string; }}
     * @memberof UpdateTwinDoc
     */
    description?: { [key: string]: string; };
}

export function UpdateTwinDocFromJSON(json: any): UpdateTwinDoc {
    return UpdateTwinDocFromJSONTyped(json, false);
}

export function UpdateTwinDocFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateTwinDoc {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function UpdateTwinDocToJSON(value?: UpdateTwinDoc | null): any {
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
