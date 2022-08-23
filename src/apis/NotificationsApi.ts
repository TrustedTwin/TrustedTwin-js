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


import * as runtime from '../runtime';
import {
    ErrorObject,
    ErrorObjectFromJSON,
    ErrorObjectToJSON,
    WebhookRefreshSubscription,
    WebhookRefreshSubscriptionFromJSON,
    WebhookRefreshSubscriptionToJSON,
    WebhookRefreshSubscriptionResponse,
    WebhookRefreshSubscriptionResponseFromJSON,
    WebhookRefreshSubscriptionResponseToJSON,
    WebhookSubscribe,
    WebhookSubscribeFromJSON,
    WebhookSubscribeToJSON,
    WebhookSubscribeResponse,
    WebhookSubscribeResponseFromJSON,
    WebhookSubscribeResponseToJSON,
    WebhookUnsubscribeResponse,
    WebhookUnsubscribeResponseFromJSON,
    WebhookUnsubscribeResponseToJSON,
} from '../models';

export interface NotificationsApiWebhookConfirmSubscriptionRequest {
    account: string;
    token: string;
}

export interface NotificationsApiWebhookRefreshSubscriptionRequest {
    account: string;
    token: string;
    webhookRefreshSubscription?: WebhookRefreshSubscription;
}

export interface NotificationsApiWebhookSubscribeRequest {
    webhookSubscribe?: WebhookSubscribe;
}

export interface NotificationsApiWebhookUnsubscribeRequest {
    account: string;
    token: string;
}

/**
 * 
 */
export class NotificationsApi extends runtime.BaseAPI {

    /**
     * Confirm notification subscription
     */
    async webhookConfirmSubscriptionRaw(requestParameters: NotificationsApiWebhookConfirmSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.account === null || requestParameters.account === undefined) {
            throw new runtime.RequiredError('account','Required parameter requestParameters.account was null or undefined when calling webhookConfirmSubscription.');
        }

        if (requestParameters.token === null || requestParameters.token === undefined) {
            throw new runtime.RequiredError('token','Required parameter requestParameters.token was null or undefined when calling webhookConfirmSubscription.');
        }

        const queryParameters: any = {};

        if (requestParameters.token !== undefined) {
            queryParameters['token'] = requestParameters.token;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/notifications/webhooks/{account}`.replace(`{${"account"}}`, encodeURIComponent(String(requestParameters.account))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Confirm notification subscription
     */
    async webhookConfirmSubscription(requestParameters: NotificationsApiWebhookConfirmSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.webhookConfirmSubscriptionRaw(requestParameters, initOverrides);
    }

    /**
     * Refresh notification subscription
     */
    async webhookRefreshSubscriptionRaw(requestParameters: NotificationsApiWebhookRefreshSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<WebhookRefreshSubscriptionResponse>> {
        if (requestParameters.account === null || requestParameters.account === undefined) {
            throw new runtime.RequiredError('account','Required parameter requestParameters.account was null or undefined when calling webhookRefreshSubscription.');
        }

        if (requestParameters.token === null || requestParameters.token === undefined) {
            throw new runtime.RequiredError('token','Required parameter requestParameters.token was null or undefined when calling webhookRefreshSubscription.');
        }

        const queryParameters: any = {};

        if (requestParameters.token !== undefined) {
            queryParameters['token'] = requestParameters.token;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/notifications/webhooks/{account}`.replace(`{${"account"}}`, encodeURIComponent(String(requestParameters.account))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: WebhookRefreshSubscriptionToJSON(requestParameters.webhookRefreshSubscription),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookRefreshSubscriptionResponseFromJSON(jsonValue));
    }

    /**
     * Refresh notification subscription
     */
    async webhookRefreshSubscription(requestParameters: NotificationsApiWebhookRefreshSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<WebhookRefreshSubscriptionResponse> {
        const response = await this.webhookRefreshSubscriptionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create subscription to webhook notifications
     */
    async webhookSubscribeRaw(requestParameters: NotificationsApiWebhookSubscribeRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<WebhookSubscribeResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/notifications/webhooks`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WebhookSubscribeToJSON(requestParameters.webhookSubscribe),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookSubscribeResponseFromJSON(jsonValue));
    }

    /**
     * Create subscription to webhook notifications
     */
    async webhookSubscribe(requestParameters: NotificationsApiWebhookSubscribeRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<WebhookSubscribeResponse> {
        const response = await this.webhookSubscribeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Unsubscribe from webhooks notification system
     */
    async webhookUnsubscribeRaw(requestParameters: NotificationsApiWebhookUnsubscribeRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<WebhookUnsubscribeResponse>> {
        if (requestParameters.account === null || requestParameters.account === undefined) {
            throw new runtime.RequiredError('account','Required parameter requestParameters.account was null or undefined when calling webhookUnsubscribe.');
        }

        if (requestParameters.token === null || requestParameters.token === undefined) {
            throw new runtime.RequiredError('token','Required parameter requestParameters.token was null or undefined when calling webhookUnsubscribe.');
        }

        const queryParameters: any = {};

        if (requestParameters.token !== undefined) {
            queryParameters['token'] = requestParameters.token;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/notifications/webhooks/{account}`.replace(`{${"account"}}`, encodeURIComponent(String(requestParameters.account))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookUnsubscribeResponseFromJSON(jsonValue));
    }

    /**
     * Unsubscribe from webhooks notification system
     */
    async webhookUnsubscribe(requestParameters: NotificationsApiWebhookUnsubscribeRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<WebhookUnsubscribeResponse> {
        const response = await this.webhookUnsubscribeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
