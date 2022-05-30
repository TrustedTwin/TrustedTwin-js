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
 * @interface TwinDocs
 */
export interface TwinDocs {
    /**
     * 
     * @type {object}
     * @memberof TwinDocs
     */
    docs?: object;
}

export function TwinDocsFromJSON(json: any): TwinDocs {
    return TwinDocsFromJSONTyped(json, false);
}

export function TwinDocsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TwinDocs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'docs': !exists(json, 'docs') ? undefined : json['docs'],
    };
}

export function TwinDocsToJSON(value?: TwinDocs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'docs': value.docs,
    };
}

