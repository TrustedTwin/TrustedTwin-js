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
import {
    Description,
    DescriptionFromJSON,
    DescriptionFromJSONTyped,
    DescriptionToJSON,
} from './Description';
import {
    TwinCreationCertificate,
    TwinCreationCertificateFromJSON,
    TwinCreationCertificateFromJSONTyped,
    TwinCreationCertificateToJSON,
} from './TwinCreationCertificate';

/**
 * 
 * @export
 * @interface TwinAlive
 */
export interface TwinAlive {
    /**
     * Current Twin status
     * @type {string}
     * @memberof TwinAlive
     */
    readonly status?: TwinAliveStatusEnum;
    /**
     * Account UUID of current Twin owner
     * @type {string}
     * @memberof TwinAlive
     */
    readonly owner?: string;
    /**
     * 
     * @type {Description}
     * @memberof TwinAlive
     */
    description?: Description;
    /**
     * 
     * @type {TwinCreationCertificate}
     * @memberof TwinAlive
     */
    creationCertificate?: TwinCreationCertificate;
}


/**
 * @export
 */
export const TwinAliveStatusEnum = {
    Alive: 'alive',
    Terminated: 'terminated'
} as const;
export type TwinAliveStatusEnum = typeof TwinAliveStatusEnum[keyof typeof TwinAliveStatusEnum];


export function TwinAliveFromJSON(json: any): TwinAlive {
    return TwinAliveFromJSONTyped(json, false);
}

export function TwinAliveFromJSONTyped(json: any, ignoreDiscriminator: boolean): TwinAlive {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'description': !exists(json, 'description') ? undefined : DescriptionFromJSON(json['description']),
        'creationCertificate': !exists(json, 'creation_certificate') ? undefined : TwinCreationCertificateFromJSON(json['creation_certificate']),
    };
}

export function TwinAliveToJSON(value?: TwinAlive | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': DescriptionToJSON(value.description),
        'creation_certificate': TwinCreationCertificateToJSON(value.creationCertificate),
    };
}

