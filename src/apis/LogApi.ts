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
  GetLogResponse,
} from '../models';
import {
    ErrorObjectFromJSON,
    ErrorObjectToJSON,
    GetLogResponseFromJSON,
    GetLogResponseToJSON,
} from '../models';

export interface LogApiGetLogRequest {
    fragment?: string;
}

/**
 * 
 */
export class LogApi extends runtime.BaseAPI {

    /**
     * Gets user\'s logs
     */
    async getLogRaw(requestParameters: LogApiGetLogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetLogResponse>> {
        const queryParameters: any = {};

        if (requestParameters.fragment !== undefined) {
            queryParameters['fragment'] = requestParameters.fragment;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/log`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetLogResponseFromJSON(jsonValue));
    }

    /**
     * Gets user\'s logs
     */
    async getLog(requestParameters: LogApiGetLogRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetLogResponse> {
        const response = await this.getLogRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
