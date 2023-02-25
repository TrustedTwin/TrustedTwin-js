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
 * @interface WebhookSubscription
 */
export interface WebhookSubscription {
    /**
     * Topic name to which subscribe
     * @type {string}
     * @memberof WebhookSubscription
     */
    topic?: string;
    /**
     * Account UUID
     * @type {string}
     * @memberof WebhookSubscription
     */
    account?: string;
    /**
     * UTC timestamp denoting validity of the Subscription
     * @type {number}
     * @memberof WebhookSubscription
     */
    validityTs?: number;
    /**
     * Unsubscribe URL, optional
     * @type {string}
     * @memberof WebhookSubscription
     */
    unsubscribeUrl?: string;
    /**
     * Unsubscribe URL, optional
     * @type {string}
     * @memberof WebhookSubscription
     */
    refreshUrl?: string;
}

/**
 * Check if a given object implements the WebhookSubscription interface.
 */
export function instanceOfWebhookSubscription(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WebhookSubscriptionFromJSON(json: any): WebhookSubscription {
    return WebhookSubscriptionFromJSONTyped(json, false);
}

export function WebhookSubscriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookSubscription {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'topic': !exists(json, 'topic') ? undefined : json['topic'],
        'account': !exists(json, 'account') ? undefined : json['account'],
        'validityTs': !exists(json, 'validity_ts') ? undefined : json['validity_ts'],
        'unsubscribeUrl': !exists(json, 'unsubscribe_url') ? undefined : json['unsubscribe_url'],
        'refreshUrl': !exists(json, 'refresh_url') ? undefined : json['refresh_url'],
    };
}

export function WebhookSubscriptionToJSON(value?: WebhookSubscription | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'topic': value.topic,
        'account': value.account,
        'validity_ts': value.validityTs,
        'unsubscribe_url': value.unsubscribeUrl,
        'refresh_url': value.refreshUrl,
    };
}

