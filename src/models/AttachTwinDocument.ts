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
 * @interface AttachTwinDocument
 */
export interface AttachTwinDocument {
    /**
     * name of a file to be attached
     * @type {string}
     * @memberof AttachTwinDocument
     */
    name?: string;
    /**
     * handler generated by `/cache` endpoint
     * @type {string}
     * @memberof AttachTwinDocument
     */
    handler?: string;
    /**
     * Custom defined variables
     * @type {{ [key: string]: string; }}
     * @memberof AttachTwinDocument
     */
    description?: { [key: string]: string; };
    /**
     * Storage class of the Doc, default is 'access_optimized'
     * @type {string}
     * @memberof AttachTwinDocument
     */
    storageClass?: AttachTwinDocumentStorageClassEnum;
    /**
     * hash of a Doc
     * @type {string}
     * @memberof AttachTwinDocument
     */
    hash?: string;
}

/**
* @export
* @enum {string}
*/
export enum AttachTwinDocumentStorageClassEnum {
    AccessOptimized = 'access_optimized',
    CostOptimized = 'cost_optimized'
}

export function AttachTwinDocumentFromJSON(json: any): AttachTwinDocument {
    return AttachTwinDocumentFromJSONTyped(json, false);
}

export function AttachTwinDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttachTwinDocument {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'handler': !exists(json, 'handler') ? undefined : json['handler'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'storageClass': !exists(json, 'storage_class') ? undefined : json['storage_class'],
        'hash': !exists(json, 'hash') ? undefined : json['hash'],
    };
}

export function AttachTwinDocumentToJSON(value?: AttachTwinDocument | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'handler': value.handler,
        'description': value.description,
        'storage_class': value.storageClass,
        'hash': value.hash,
    };
}

