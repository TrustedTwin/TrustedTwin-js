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
import type { CreateStickersResponseStickersValueAnyOf } from './CreateStickersResponseStickersValueAnyOf';
import {
    CreateStickersResponseStickersValueAnyOfFromJSON,
    CreateStickersResponseStickersValueAnyOfFromJSONTyped,
    CreateStickersResponseStickersValueAnyOfToJSON,
} from './CreateStickersResponseStickersValueAnyOf';
import type { Sticker } from './Sticker';
import {
    StickerFromJSON,
    StickerFromJSONTyped,
    StickerToJSON,
} from './Sticker';

/**
 * 
 * @export
 * @interface CreateStickersResponseStickersValue
 */
export interface CreateStickersResponseStickersValue {
    /**
     * 
     * @type {string}
     * @memberof CreateStickersResponseStickersValue
     */
    message?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateStickersResponseStickersValue
     */
    recipients?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof CreateStickersResponseStickersValue
     */
    validityTs?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateStickersResponseStickersValue
     */
    createdTs?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateStickersResponseStickersValue
     */
    publish?: Array<CreateStickersResponseStickersValuePublishEnum>;
    /**
     * 
     * @type {string}
     * @memberof CreateStickersResponseStickersValue
     */
    error?: string;
}


/**
 * @export
 */
export const CreateStickersResponseStickersValuePublishEnum = {
    Put: 'on_put',
    Remove: 'on_remove',
    Expire: 'on_expire'
} as const;
export type CreateStickersResponseStickersValuePublishEnum = typeof CreateStickersResponseStickersValuePublishEnum[keyof typeof CreateStickersResponseStickersValuePublishEnum];


/**
 * Check if a given object implements the CreateStickersResponseStickersValue interface.
 */
export function instanceOfCreateStickersResponseStickersValue(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateStickersResponseStickersValueFromJSON(json: any): CreateStickersResponseStickersValue {
    return CreateStickersResponseStickersValueFromJSONTyped(json, false);
}

export function CreateStickersResponseStickersValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateStickersResponseStickersValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
        'recipients': !exists(json, 'recipients') ? undefined : json['recipients'],
        'validityTs': !exists(json, 'validity_ts') ? undefined : json['validity_ts'],
        'createdTs': !exists(json, 'created_ts') ? undefined : json['created_ts'],
        'publish': !exists(json, 'publish') ? undefined : json['publish'],
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function CreateStickersResponseStickersValueToJSON(value?: CreateStickersResponseStickersValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'recipients': value.recipients,
        'validity_ts': value.validityTs,
        'created_ts': value.createdTs,
        'publish': value.publish,
        'error': value.error,
    };
}

