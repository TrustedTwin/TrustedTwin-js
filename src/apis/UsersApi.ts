/* tslint:disable */
/* eslint-disable */
/**
 * Trusted Twin API
 * This documentation describes API endpoints of the Trusted Twin platform.
 *
 * The version of the OpenAPI document: 2.03.01
 * Contact: api@trustedtwin.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    CreateUserSecret,
    CreateUserSecretFromJSON,
    CreateUserSecretToJSON,
    CreateUserSecretPINResponse,
    CreateUserSecretPINResponseFromJSON,
    CreateUserSecretPINResponseToJSON,
    DeleteUserSecretResponse,
    DeleteUserSecretResponseFromJSON,
    DeleteUserSecretResponseToJSON,
    ErrorObject,
    ErrorObjectFromJSON,
    ErrorObjectToJSON,
    PatchUser,
    PatchUserFromJSON,
    PatchUserToJSON,
    PostNewUser,
    PostNewUserFromJSON,
    PostNewUserToJSON,
    UpdateUserSecret,
    UpdateUserSecretFromJSON,
    UpdateUserSecretToJSON,
    UserDefinition,
    UserDefinitionFromJSON,
    UserDefinitionToJSON,
    UserSecretResponse,
    UserSecretResponseFromJSON,
    UserSecretResponseToJSON,
} from '../models';

export interface UsersApiCreateUserRequest {
    postNewUser: PostNewUser;
}

export interface UsersApiCreateUserSecretPINRequest {
    user: string;
    createUserSecret?: CreateUserSecret;
}

export interface UsersApiDeleteUserRequest {
    user: string;
}

export interface UsersApiDeleteUserSecretRequest {
    user: string;
}

export interface UsersApiGetUserRequest {
    user: string;
}

export interface UsersApiGetUserSecretRequest {
    user: string;
}

export interface UsersApiUpdateUserRequest {
    user: string;
    patchUser: PatchUser;
}

export interface UsersApiUpdateUserSecretRequest {
    user: string;
    updateUserSecret?: UpdateUserSecret;
}

/**
 * 
 */
export class UsersApi extends runtime.BaseAPI {

    /**
     * Create a User
     */
    async createUserRaw(requestParameters: UsersApiCreateUserRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UserDefinition>> {
        if (requestParameters.postNewUser === null || requestParameters.postNewUser === undefined) {
            throw new runtime.RequiredError('postNewUser','Required parameter requestParameters.postNewUser was null or undefined when calling createUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/users`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostNewUserToJSON(requestParameters.postNewUser),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDefinitionFromJSON(jsonValue));
    }

    /**
     * Create a User
     */
    async createUser(requestParameters: UsersApiCreateUserRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UserDefinition> {
        const response = await this.createUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a User Secret PIN required to create a new User Secret
     */
    async createUserSecretPINRaw(requestParameters: UsersApiCreateUserSecretPINRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateUserSecretPINResponse>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling createUserSecretPIN.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/users/{user}/secrets`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateUserSecretToJSON(requestParameters.createUserSecret),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateUserSecretPINResponseFromJSON(jsonValue));
    }

    /**
     * Create a User Secret PIN required to create a new User Secret
     */
    async createUserSecretPIN(requestParameters: UsersApiCreateUserSecretPINRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateUserSecretPINResponse> {
        const response = await this.createUserSecretPINRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete User
     */
    async deleteUserRaw(requestParameters: UsersApiDeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UserDefinition>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling deleteUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/users/{user}`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDefinitionFromJSON(jsonValue));
    }

    /**
     * Delete User
     */
    async deleteUser(requestParameters: UsersApiDeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UserDefinition> {
        const response = await this.deleteUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete User Secret
     */
    async deleteUserSecretRaw(requestParameters: UsersApiDeleteUserSecretRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteUserSecretResponse>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling deleteUserSecret.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/users/{user}/secrets`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteUserSecretResponseFromJSON(jsonValue));
    }

    /**
     * Delete User Secret
     */
    async deleteUserSecret(requestParameters: UsersApiDeleteUserSecretRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteUserSecretResponse> {
        const response = await this.deleteUserSecretRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get given User
     */
    async getUserRaw(requestParameters: UsersApiGetUserRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UserDefinition>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling getUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/users/{user}`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDefinitionFromJSON(jsonValue));
    }

    /**
     * Get given User
     */
    async getUser(requestParameters: UsersApiGetUserRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UserDefinition> {
        const response = await this.getUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Return User Secret definition
     */
    async getUserSecretRaw(requestParameters: UsersApiGetUserSecretRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UserSecretResponse>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling getUserSecret.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/users/{user}/secrets`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserSecretResponseFromJSON(jsonValue));
    }

    /**
     * Return User Secret definition
     */
    async getUserSecret(requestParameters: UsersApiGetUserSecretRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UserSecretResponse> {
        const response = await this.getUserSecretRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update given User
     */
    async updateUserRaw(requestParameters: UsersApiUpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<PatchUser>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling updateUser.');
        }

        if (requestParameters.patchUser === null || requestParameters.patchUser === undefined) {
            throw new runtime.RequiredError('patchUser','Required parameter requestParameters.patchUser was null or undefined when calling updateUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/users/{user}`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchUserToJSON(requestParameters.patchUser),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PatchUserFromJSON(jsonValue));
    }

    /**
     * Update given User
     */
    async updateUser(requestParameters: UsersApiUpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<PatchUser> {
        const response = await this.updateUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update User Secret validity
     */
    async updateUserSecretRaw(requestParameters: UsersApiUpdateUserSecretRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UserSecretResponse>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling updateUserSecret.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/users/{user}/secrets`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateUserSecretToJSON(requestParameters.updateUserSecret),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserSecretResponseFromJSON(jsonValue));
    }

    /**
     * Update User Secret validity
     */
    async updateUserSecret(requestParameters: UsersApiUpdateUserSecretRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UserSecretResponse> {
        const response = await this.updateUserSecretRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
