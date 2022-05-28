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
    ErrorObject,
    ErrorObjectFromJSON,
    ErrorObjectToJSON,
    NewRole,
    NewRoleFromJSON,
    NewRoleToJSON,
    PostNewRole,
    PostNewRoleFromJSON,
    PostNewRoleToJSON,
    UpdateRole,
    UpdateRoleFromJSON,
    UpdateRoleToJSON,
    UpdatedRole,
    UpdatedRoleFromJSON,
    UpdatedRoleToJSON,
} from '../models';

export interface RolesApiCreateUserRoleRequest {
    postNewRole: PostNewRole;
}

export interface RolesApiDeleteUserRoleRequest {
    role: string;
}

export interface RolesApiGetUserRoleRequest {
    role: string;
}

export interface RolesApiUpdateUserRoleRequest {
    role: string;
    updateRole: UpdateRole;
}

/**
 * 
 */
export class RolesApi extends runtime.BaseAPI {

    /**
     * Create a new Role
     */
    async createUserRoleRaw(requestParameters: RolesApiCreateUserRoleRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<NewRole>> {
        if (requestParameters.postNewRole === null || requestParameters.postNewRole === undefined) {
            throw new runtime.RequiredError('postNewRole','Required parameter requestParameters.postNewRole was null or undefined when calling createUserRole.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/roles`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostNewRoleToJSON(requestParameters.postNewRole),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NewRoleFromJSON(jsonValue));
    }

    /**
     * Create a new Role
     */
    async createUserRole(requestParameters: RolesApiCreateUserRoleRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<NewRole> {
        const response = await this.createUserRoleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete given Role
     */
    async deleteUserRoleRaw(requestParameters: RolesApiDeleteUserRoleRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.role === null || requestParameters.role === undefined) {
            throw new runtime.RequiredError('role','Required parameter requestParameters.role was null or undefined when calling deleteUserRole.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/roles/{role}`.replace(`{${"role"}}`, encodeURIComponent(String(requestParameters.role))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete given Role
     */
    async deleteUserRole(requestParameters: RolesApiDeleteUserRoleRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.deleteUserRoleRaw(requestParameters, initOverrides);
    }

    /**
     * Get given Role
     */
    async getUserRoleRaw(requestParameters: RolesApiGetUserRoleRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.role === null || requestParameters.role === undefined) {
            throw new runtime.RequiredError('role','Required parameter requestParameters.role was null or undefined when calling getUserRole.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/roles/{role}`.replace(`{${"role"}}`, encodeURIComponent(String(requestParameters.role))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Get given Role
     */
    async getUserRole(requestParameters: RolesApiGetUserRoleRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.getUserRoleRaw(requestParameters, initOverrides);
    }

    /**
     * Get Roles
     */
    async getUserRolesRaw(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/roles`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Get Roles
     */
    async getUserRoles(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.getUserRolesRaw(initOverrides);
    }

    /**
     * Update requested Role
     */
    async updateUserRoleRaw(requestParameters: RolesApiUpdateUserRoleRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdatedRole>> {
        if (requestParameters.role === null || requestParameters.role === undefined) {
            throw new runtime.RequiredError('role','Required parameter requestParameters.role was null or undefined when calling updateUserRole.');
        }

        if (requestParameters.updateRole === null || requestParameters.updateRole === undefined) {
            throw new runtime.RequiredError('updateRole','Required parameter requestParameters.updateRole was null or undefined when calling updateUserRole.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/roles/{role}`.replace(`{${"role"}}`, encodeURIComponent(String(requestParameters.role))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateRoleToJSON(requestParameters.updateRole),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdatedRoleFromJSON(jsonValue));
    }

    /**
     * Update requested Role
     */
    async updateUserRole(requestParameters: RolesApiUpdateUserRoleRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdatedRole> {
        const response = await this.updateUserRoleRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
