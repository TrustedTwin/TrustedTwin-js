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
 * @interface TerminationCertificateAllOf
 */
export interface TerminationCertificateAllOf {
    /**
     * Account UUID of Account terminating the Twin
     * @type {string}
     * @memberof TerminationCertificateAllOf
     */
    readonly issuer?: string;
    /**
     * UTC timestamp denoting when Twin was terminated
     * @type {number}
     * @memberof TerminationCertificateAllOf
     */
    readonly terminatedTs?: number;
}

export function TerminationCertificateAllOfFromJSON(json: any): TerminationCertificateAllOf {
    return TerminationCertificateAllOfFromJSONTyped(json, false);
}

export function TerminationCertificateAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): TerminationCertificateAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'issuer': !exists(json, 'issuer') ? undefined : json['issuer'],
        'terminatedTs': !exists(json, 'terminated_ts') ? undefined : json['terminated_ts'],
    };
}

export function TerminationCertificateAllOfToJSON(value?: TerminationCertificateAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}
