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
 * @interface TerminationCertificate
 */
export interface TerminationCertificate {
    /**
     * Account UUID of Account terminating the Twin
     * @type {string}
     * @memberof TerminationCertificate
     */
    readonly issuer?: string;
    /**
     * UTC timestamp denoting when Twin was terminated
     * @type {number}
     * @memberof TerminationCertificate
     */
    readonly terminatedTs?: number;
}

/**
 * Check if a given object implements the TerminationCertificate interface.
 */
export function instanceOfTerminationCertificate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TerminationCertificateFromJSON(json: any): TerminationCertificate {
    return TerminationCertificateFromJSONTyped(json, false);
}

export function TerminationCertificateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TerminationCertificate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'issuer': !exists(json, 'issuer') ? undefined : json['issuer'],
        'terminatedTs': !exists(json, 'terminated_ts') ? undefined : json['terminated_ts'],
    };
}

export function TerminationCertificateToJSON(value?: TerminationCertificate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}

