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
import type { Description } from './Description';
import {
    DescriptionFromJSON,
    DescriptionFromJSONTyped,
    DescriptionToJSON,
} from './Description';
import type { TerminationCertificate } from './TerminationCertificate';
import {
    TerminationCertificateFromJSON,
    TerminationCertificateFromJSONTyped,
    TerminationCertificateToJSON,
} from './TerminationCertificate';
import type { TwinCreationCertificate } from './TwinCreationCertificate';
import {
    TwinCreationCertificateFromJSON,
    TwinCreationCertificateFromJSONTyped,
    TwinCreationCertificateToJSON,
} from './TwinCreationCertificate';

/**
 * 
 * @export
 * @interface TwinTerminated
 */
export interface TwinTerminated {
    /**
     * Current Twin status
     * @type {string}
     * @memberof TwinTerminated
     */
    readonly status?: TwinTerminatedStatusEnum;
    /**
     * Account UUID of current Twin owner
     * @type {string}
     * @memberof TwinTerminated
     */
    readonly owner?: string;
    /**
     * UTC timestamp denoting when the Twin was last updated
     * @type {number}
     * @memberof TwinTerminated
     */
    readonly updatedTs?: number;
    /**
     * 
     * @type {Description}
     * @memberof TwinTerminated
     */
    description?: Description;
    /**
     * 
     * @type {TwinCreationCertificate}
     * @memberof TwinTerminated
     */
    creationCertificate?: TwinCreationCertificate;
    /**
     * 
     * @type {TerminationCertificate}
     * @memberof TwinTerminated
     */
    terminationCertificate?: TerminationCertificate;
}


/**
 * @export
 */
export const TwinTerminatedStatusEnum = {
    Alive: 'alive',
    Terminated: 'terminated'
} as const;
export type TwinTerminatedStatusEnum = typeof TwinTerminatedStatusEnum[keyof typeof TwinTerminatedStatusEnum];


/**
 * Check if a given object implements the TwinTerminated interface.
 */
export function instanceOfTwinTerminated(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TwinTerminatedFromJSON(json: any): TwinTerminated {
    return TwinTerminatedFromJSONTyped(json, false);
}

export function TwinTerminatedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TwinTerminated {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'updatedTs': !exists(json, 'updated_ts') ? undefined : json['updated_ts'],
        'description': !exists(json, 'description') ? undefined : DescriptionFromJSON(json['description']),
        'creationCertificate': !exists(json, 'creation_certificate') ? undefined : TwinCreationCertificateFromJSON(json['creation_certificate']),
        'terminationCertificate': !exists(json, 'termination_certificate') ? undefined : TerminationCertificateFromJSON(json['termination_certificate']),
    };
}

export function TwinTerminatedToJSON(value?: TwinTerminated | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': DescriptionToJSON(value.description),
        'creation_certificate': TwinCreationCertificateToJSON(value.creationCertificate),
        'termination_certificate': TerminationCertificateToJSON(value.terminationCertificate),
    };
}
