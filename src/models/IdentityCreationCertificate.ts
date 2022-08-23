/* tslint:disable */
/* eslint-disable */
/**
 * Trusted Twin API
 * This documentation describes API endpoints of the Trusted Twin platform.
 *
 * The version of the OpenAPI document: 2.05.02
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
 * @interface IdentityCreationCertificate
 */
export interface IdentityCreationCertificate {
    /**
     * timestamp when Identity was created
     * @type {number}
     * @memberof IdentityCreationCertificate
     */
    readonly createdTs?: number;
    /**
     * Account ID of creator
     * @type {string}
     * @memberof IdentityCreationCertificate
     */
    readonly creator?: string;
}

export function IdentityCreationCertificateFromJSON(json: any): IdentityCreationCertificate {
    return IdentityCreationCertificateFromJSONTyped(json, false);
}

export function IdentityCreationCertificateFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityCreationCertificate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdTs': !exists(json, 'created_ts') ? undefined : json['created_ts'],
        'creator': !exists(json, 'creator') ? undefined : json['creator'],
    };
}

export function IdentityCreationCertificateToJSON(value?: IdentityCreationCertificate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}

