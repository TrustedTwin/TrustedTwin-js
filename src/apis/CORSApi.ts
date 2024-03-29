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


import * as runtime from '../runtime';

export interface CORSApiSecretsAccountPinOptionsRequest {
    account: string;
    pin: string;
}

/**
 * 
 */
export class CORSApi extends runtime.BaseAPI {

    /**
     * Enable CORS by returning correct headers 
     * CORS support
     */
    async secretsAccountPinOptionsRaw(requestParameters: CORSApiSecretsAccountPinOptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.account === null || requestParameters.account === undefined) {
            throw new runtime.RequiredError('account','Required parameter requestParameters.account was null or undefined when calling secretsAccountPinOptions.');
        }

        if (requestParameters.pin === null || requestParameters.pin === undefined) {
            throw new runtime.RequiredError('pin','Required parameter requestParameters.pin was null or undefined when calling secretsAccountPinOptions.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/secrets/{account}/{pin}`.replace(`{${"account"}}`, encodeURIComponent(String(requestParameters.account))).replace(`{${"pin"}}`, encodeURIComponent(String(requestParameters.pin))),
            method: 'OPTIONS',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Enable CORS by returning correct headers 
     * CORS support
     */
    async secretsAccountPinOptions(requestParameters: CORSApiSecretsAccountPinOptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.secretsAccountPinOptionsRaw(requestParameters, initOverrides);
    }

}
