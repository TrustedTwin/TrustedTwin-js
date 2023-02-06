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
import {
    StickersListStickersInner,
    StickersListStickersInnerFromJSON,
    StickersListStickersInnerFromJSONTyped,
    StickersListStickersInnerToJSON,
} from './StickersListStickersInner';

/**
 * 
 * @export
 * @interface StickersList
 */
export interface StickersList {
    /**
     * 
     * @type {Array<StickersListStickersInner>}
     * @memberof StickersList
     */
    stickers?: Array<StickersListStickersInner>;
}

export function StickersListFromJSON(json: any): StickersList {
    return StickersListFromJSONTyped(json, false);
}

export function StickersListFromJSONTyped(json: any, ignoreDiscriminator: boolean): StickersList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stickers': !exists(json, 'stickers') ? undefined : ((json['stickers'] as Array<any>).map(StickersListStickersInnerFromJSON)),
    };
}

export function StickersListToJSON(value?: StickersList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stickers': value.stickers === undefined ? undefined : ((value.stickers as Array<any>).map(StickersListStickersInnerToJSON)),
    };
}

