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
 * @interface TwinCreationCertificateAllOf
 */
export interface TwinCreationCertificateAllOf {
    /**
     * UTC timestamp denoting when Twin was created
     * @type {number}
     * @memberof TwinCreationCertificateAllOf
     */
    readonly createdTs?: number;
    /**
     * Account UUID of Account creating the Twin
     * @type {string}
     * @memberof TwinCreationCertificateAllOf
     */
    readonly creator?: string;
}

export function TwinCreationCertificateAllOfFromJSON(json: any): TwinCreationCertificateAllOf {
    return TwinCreationCertificateAllOfFromJSONTyped(json, false);
}

export function TwinCreationCertificateAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): TwinCreationCertificateAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdTs': !exists(json, 'created_ts') ? undefined : json['created_ts'],
        'creator': !exists(json, 'creator') ? undefined : json['creator'],
    };
}

export function TwinCreationCertificateAllOfToJSON(value?: TwinCreationCertificateAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}

