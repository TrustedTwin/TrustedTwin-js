/* tslint:disable */
/* eslint-disable */
/**
 * Trusted Twin API
 * TT API Gateway.
 *
 * The version of the OpenAPI document: 2.07.00
 * Contact: hello@trustedtwin.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface WebhookRefreshSubscription
 */
export interface WebhookRefreshSubscription {
  /**
   * Topic name from which unsubscribe
   * @type {string}
   * @memberof WebhookRefreshSubscription
   */
  topic?: string;
  /**
   * Subscription uuid (optional, used to refresh subscription)
   * @type {string}
   * @memberof WebhookRefreshSubscription
   */
  subscription?: string;
}

export function WebhookRefreshSubscriptionFromJSON(
  json: any
): WebhookRefreshSubscription {
  return WebhookRefreshSubscriptionFromJSONTyped(json, false);
}

export function WebhookRefreshSubscriptionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): WebhookRefreshSubscription {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    topic: !exists(json, "topic") ? undefined : json["topic"],
    subscription: !exists(json, "subscription")
      ? undefined
      : json["subscription"],
  };
}

export function WebhookRefreshSubscriptionToJSON(
  value?: WebhookRefreshSubscription | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    topic: value.topic,
    subscription: value.subscription,
  };
}
