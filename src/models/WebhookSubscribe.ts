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
 * @interface WebhookSubscribe
 */
export interface WebhookSubscribe {
    /**
     * Callback URL called each time event occurs on a given topic
     * @type {string}
     * @memberof WebhookSubscribe
     */
    callbackUrl?: string;
    /**
     * Topic name to which subscribe
     * @type {string}
     * @memberof WebhookSubscribe
     */
    topic?: string;
    /**
     * If provided, this value will be used as a part of key to hashing function
     * @type {number}
     * @memberof WebhookSubscribe
     */
    clientSecret?: number;
    /**
     * Time in seconds when subscription should expire (time since subscription)
     * @type {number}
     * @memberof WebhookSubscribe
     */
    expires?: number;
}

export function WebhookSubscribeFromJSON(json: any): WebhookSubscribe {
    return WebhookSubscribeFromJSONTyped(json, false);
}

export function WebhookSubscribeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookSubscribe {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'callbackUrl': !exists(json, 'callback_url') ? undefined : json['callback_url'],
        'topic': !exists(json, 'topic') ? undefined : json['topic'],
        'clientSecret': !exists(json, 'client_secret') ? undefined : json['client_secret'],
        'expires': !exists(json, 'expires') ? undefined : json['expires'],
    };
}

export function WebhookSubscribeToJSON(value?: WebhookSubscribe | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'callback_url': value.callbackUrl,
        'topic': value.topic,
        'client_secret': value.clientSecret,
        'expires': value.expires,
    };
}

