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
 * @interface GetDocDownload
 */
export interface GetDocDownload {
    /**
     * path to Doc to download
     * @type {string}
     * @memberof GetDocDownload
     */
    url?: string;
    /**
     * UTC timestamp denoting validity of the provided download URL (60 minutes from when it was generated)
     * @type {number}
     * @memberof GetDocDownload
     */
    validityTs?: number;
}

/**
 * Check if a given object implements the GetDocDownload interface.
 */
export function instanceOfGetDocDownload(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetDocDownloadFromJSON(json: any): GetDocDownload {
    return GetDocDownloadFromJSONTyped(json, false);
}

export function GetDocDownloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetDocDownload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': !exists(json, 'url') ? undefined : json['url'],
        'validityTs': !exists(json, 'validity_ts') ? undefined : json['validity_ts'],
    };
}

export function GetDocDownloadToJSON(value?: GetDocDownload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
        'validity_ts': value.validityTs,
    };
}

