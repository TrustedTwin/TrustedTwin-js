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
import type {
  ErrorObject,
} from '../models';
import {
    ErrorObjectFromJSON,
    ErrorObjectToJSON,
} from '../models';

/**
 * 
 */
export class TraceApi extends runtime.BaseAPI {

    /**
     * Trace a dummy task through the entire system for logging purposes
     */
    async traceRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/trace`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Trace a dummy task through the entire system for logging purposes
     */
    async trace(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.traceRaw(initOverrides);
    }

}
