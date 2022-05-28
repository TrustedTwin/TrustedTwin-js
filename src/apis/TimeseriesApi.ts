/* tslint:disable */
/* eslint-disable */
/**
 * Trusted Twin API
 * This documentation describes API endpoints of the Trusted Twin platform.
 *
 * The version of the OpenAPI document: 2.02.00
 * Contact: api@trustedtwin.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    CreateTimeseriesTable200Response,
    CreateTimeseriesTable200ResponseFromJSON,
    CreateTimeseriesTable200ResponseToJSON,
    DeleteTimeseriesTable200Response,
    DeleteTimeseriesTable200ResponseFromJSON,
    DeleteTimeseriesTable200ResponseToJSON,
    ErrorObject,
    ErrorObjectFromJSON,
    ErrorObjectToJSON,
    GetTimeseriesTablesResponse,
    GetTimeseriesTablesResponseFromJSON,
    GetTimeseriesTablesResponseToJSON,
    TimeseriesTableResponse,
    TimeseriesTableResponseFromJSON,
    TimeseriesTableResponseToJSON,
    TimeseriesTableUpdate,
    TimeseriesTableUpdateFromJSON,
    TimeseriesTableUpdateToJSON,
    TimeseriesTables,
    TimeseriesTablesFromJSON,
    TimeseriesTablesToJSON,
    TimeseriesUsersAccess,
    TimeseriesUsersAccessFromJSON,
    TimeseriesUsersAccessToJSON,
    TruncateTimeseriesTable200Response,
    TruncateTimeseriesTable200ResponseFromJSON,
    TruncateTimeseriesTable200ResponseToJSON,
    UpdateTimeseriesTable200Response,
    UpdateTimeseriesTable200ResponseFromJSON,
    UpdateTimeseriesTable200ResponseToJSON,
} from '../models';

export interface TimeseriesApiCreateTimeseriesTableRequest {
    timeseriesTables?: TimeseriesTables;
}

export interface TimeseriesApiDeleteTimeseriesTableRequest {
    timeseries: string;
}

export interface TimeseriesApiGetTimeseriesTableRequest {
    timeseries: string;
}

export interface TimeseriesApiTruncateTimeseriesTableRequest {
    timeseries: string;
}

export interface TimeseriesApiUpdateTimeseriesAccessRequest {
    timeseriesUsersAccess?: TimeseriesUsersAccess;
}

export interface TimeseriesApiUpdateTimeseriesTableRequest {
    timeseries: string;
    timeseriesTableUpdate?: TimeseriesTableUpdate;
}

/**
 * 
 */
export class TimeseriesApi extends runtime.BaseAPI {

    /**
     * Create Timeseries tables
     */
    async createTimeseriesTableRaw(requestParameters: TimeseriesApiCreateTimeseriesTableRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateTimeseriesTable200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/account/services/timeseries`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TimeseriesTablesToJSON(requestParameters.timeseriesTables),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateTimeseriesTable200ResponseFromJSON(jsonValue));
    }

    /**
     * Create Timeseries tables
     */
    async createTimeseriesTable(requestParameters: TimeseriesApiCreateTimeseriesTableRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateTimeseriesTable200Response> {
        const response = await this.createTimeseriesTableRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete timeseries table
     */
    async deleteTimeseriesTableRaw(requestParameters: TimeseriesApiDeleteTimeseriesTableRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteTimeseriesTable200Response>> {
        if (requestParameters.timeseries === null || requestParameters.timeseries === undefined) {
            throw new runtime.RequiredError('timeseries','Required parameter requestParameters.timeseries was null or undefined when calling deleteTimeseriesTable.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/account/services/timeseries/{timeseries}`.replace(`{${"timeseries"}}`, encodeURIComponent(String(requestParameters.timeseries))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteTimeseriesTable200ResponseFromJSON(jsonValue));
    }

    /**
     * Delete timeseries table
     */
    async deleteTimeseriesTable(requestParameters: TimeseriesApiDeleteTimeseriesTableRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteTimeseriesTable200Response> {
        const response = await this.deleteTimeseriesTableRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets details of a given Timeseries table
     */
    async getTimeseriesTableRaw(requestParameters: TimeseriesApiGetTimeseriesTableRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<TimeseriesTableResponse>> {
        if (requestParameters.timeseries === null || requestParameters.timeseries === undefined) {
            throw new runtime.RequiredError('timeseries','Required parameter requestParameters.timeseries was null or undefined when calling getTimeseriesTable.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/account/services/timeseries/{timeseries}`.replace(`{${"timeseries"}}`, encodeURIComponent(String(requestParameters.timeseries))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TimeseriesTableResponseFromJSON(jsonValue));
    }

    /**
     * Gets details of a given Timeseries table
     */
    async getTimeseriesTable(requestParameters: TimeseriesApiGetTimeseriesTableRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<TimeseriesTableResponse> {
        const response = await this.getTimeseriesTableRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets list of existing Timeseries tables + database information
     */
    async getTimeseriesTablesRaw(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<GetTimeseriesTablesResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/account/services/timeseries`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetTimeseriesTablesResponseFromJSON(jsonValue));
    }

    /**
     * Gets list of existing Timeseries tables + database information
     */
    async getTimeseriesTables(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<GetTimeseriesTablesResponse> {
        const response = await this.getTimeseriesTablesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Delete Timeseries table data
     */
    async truncateTimeseriesTableRaw(requestParameters: TimeseriesApiTruncateTimeseriesTableRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<TruncateTimeseriesTable200Response>> {
        if (requestParameters.timeseries === null || requestParameters.timeseries === undefined) {
            throw new runtime.RequiredError('timeseries','Required parameter requestParameters.timeseries was null or undefined when calling truncateTimeseriesTable.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/account/services/timeseries/{timeseries}/data`.replace(`{${"timeseries"}}`, encodeURIComponent(String(requestParameters.timeseries))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TruncateTimeseriesTable200ResponseFromJSON(jsonValue));
    }

    /**
     * Delete Timeseries table data
     */
    async truncateTimeseriesTable(requestParameters: TimeseriesApiTruncateTimeseriesTableRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<TruncateTimeseriesTable200Response> {
        const response = await this.truncateTimeseriesTableRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Timeseries serivice access
     */
    async updateTimeseriesAccessRaw(requestParameters: TimeseriesApiUpdateTimeseriesAccessRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<TimeseriesUsersAccess>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/account/services/timeseries`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: TimeseriesUsersAccessToJSON(requestParameters.timeseriesUsersAccess),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TimeseriesUsersAccessFromJSON(jsonValue));
    }

    /**
     * Update Timeseries serivice access
     */
    async updateTimeseriesAccess(requestParameters: TimeseriesApiUpdateTimeseriesAccessRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<TimeseriesUsersAccess> {
        const response = await this.updateTimeseriesAccessRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates timeseries table
     */
    async updateTimeseriesTableRaw(requestParameters: TimeseriesApiUpdateTimeseriesTableRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateTimeseriesTable200Response>> {
        if (requestParameters.timeseries === null || requestParameters.timeseries === undefined) {
            throw new runtime.RequiredError('timeseries','Required parameter requestParameters.timeseries was null or undefined when calling updateTimeseriesTable.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/account/services/timeseries/{timeseries}`.replace(`{${"timeseries"}}`, encodeURIComponent(String(requestParameters.timeseries))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: TimeseriesTableUpdateToJSON(requestParameters.timeseriesTableUpdate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateTimeseriesTable200ResponseFromJSON(jsonValue));
    }

    /**
     * Updates timeseries table
     */
    async updateTimeseriesTable(requestParameters: TimeseriesApiUpdateTimeseriesTableRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateTimeseriesTable200Response> {
        const response = await this.updateTimeseriesTableRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
