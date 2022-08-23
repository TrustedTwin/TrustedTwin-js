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
    IdentityProperties,
    IdentityPropertiesFromJSON,
    IdentityPropertiesToJSON,
    IdentityRemovalProperties,
    IdentityRemovalPropertiesFromJSON,
    IdentityRemovalPropertiesToJSON,
    PatchIdentityProperties,
    PatchIdentityPropertiesFromJSON,
    PatchIdentityPropertiesToJSON,
    PostTwinIdentities,
    PostTwinIdentitiesFromJSON,
    PostTwinIdentitiesToJSON,
    ResolvedIdentities,
    ResolvedIdentitiesFromJSON,
    ResolvedIdentitiesToJSON,
} from '../models';

export interface IdentitiesApiCreateTwinIdentityRequest {
    twin: string;
    postTwinIdentities: PostTwinIdentities;
}

export interface IdentitiesApiDeleteTwinIdentityRequest {
    twin: string;
    identity: string;
}

export interface IdentitiesApiGetTwinIdentitiesRequest {
    twin: string;
    showExpired?: boolean;
    showValid?: boolean;
    showForeign?: boolean;
    showPublic?: boolean;
    showPrivate?: boolean;
    showPersonal?: boolean;
}

export interface IdentitiesApiGetTwinIdentityRequest {
    twin: string;
    identity: string;
}

export interface IdentitiesApiResolveTwinIdentityRequest {
    identity: string;
    context?: string;
}

export interface IdentitiesApiUpdateTwinIdentityRequest {
    twin: string;
    identity: string;
    patchIdentityProperties: PatchIdentityProperties;
}

/**
 * 
 */
export class IdentitiesApi extends runtime.BaseAPI {

    /**
     * Create one or more Identities and attach them to the given Twin
     */
    async createTwinIdentityRaw(requestParameters: IdentitiesApiCreateTwinIdentityRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters.twin === null || requestParameters.twin === undefined) {
            throw new runtime.RequiredError('twin','Required parameter requestParameters.twin was null or undefined when calling createTwinIdentity.');
        }

        if (requestParameters.postTwinIdentities === null || requestParameters.postTwinIdentities === undefined) {
            throw new runtime.RequiredError('postTwinIdentities','Required parameter requestParameters.postTwinIdentities was null or undefined when calling createTwinIdentity.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/twins/{twin}/identities`.replace(`{${"twin"}}`, encodeURIComponent(String(requestParameters.twin))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostTwinIdentitiesToJSON(requestParameters.postTwinIdentities),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Create one or more Identities and attach them to the given Twin
     */
    async createTwinIdentity(requestParameters: IdentitiesApiCreateTwinIdentityRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<string>> {
        const response = await this.createTwinIdentityRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete Twin\'s Identity
     */
    async deleteTwinIdentityRaw(requestParameters: IdentitiesApiDeleteTwinIdentityRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<IdentityRemovalProperties>> {
        if (requestParameters.twin === null || requestParameters.twin === undefined) {
            throw new runtime.RequiredError('twin','Required parameter requestParameters.twin was null or undefined when calling deleteTwinIdentity.');
        }

        if (requestParameters.identity === null || requestParameters.identity === undefined) {
            throw new runtime.RequiredError('identity','Required parameter requestParameters.identity was null or undefined when calling deleteTwinIdentity.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/twins/{twin}/identities/{identity}`.replace(`{${"twin"}}`, encodeURIComponent(String(requestParameters.twin))).replace(`{${"identity"}}`, encodeURIComponent(String(requestParameters.identity))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IdentityRemovalPropertiesFromJSON(jsonValue));
    }

    /**
     * Delete Twin\'s Identity
     */
    async deleteTwinIdentity(requestParameters: IdentitiesApiDeleteTwinIdentityRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<IdentityRemovalProperties> {
        const response = await this.deleteTwinIdentityRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Identities of the given Twin
     */
    async getTwinIdentitiesRaw(requestParameters: IdentitiesApiGetTwinIdentitiesRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters.twin === null || requestParameters.twin === undefined) {
            throw new runtime.RequiredError('twin','Required parameter requestParameters.twin was null or undefined when calling getTwinIdentities.');
        }

        const queryParameters: any = {};

        if (requestParameters.showExpired !== undefined) {
            queryParameters['show_expired'] = requestParameters.showExpired;
        }

        if (requestParameters.showValid !== undefined) {
            queryParameters['show_valid'] = requestParameters.showValid;
        }

        if (requestParameters.showForeign !== undefined) {
            queryParameters['show_foreign'] = requestParameters.showForeign;
        }

        if (requestParameters.showPublic !== undefined) {
            queryParameters['show_public'] = requestParameters.showPublic;
        }

        if (requestParameters.showPrivate !== undefined) {
            queryParameters['show_private'] = requestParameters.showPrivate;
        }

        if (requestParameters.showPersonal !== undefined) {
            queryParameters['show_personal'] = requestParameters.showPersonal;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/twins/{twin}/identities`.replace(`{${"twin"}}`, encodeURIComponent(String(requestParameters.twin))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get Identities of the given Twin
     */
    async getTwinIdentities(requestParameters: IdentitiesApiGetTwinIdentitiesRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<string>> {
        const response = await this.getTwinIdentitiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Twin\'s Identity
     */
    async getTwinIdentityRaw(requestParameters: IdentitiesApiGetTwinIdentityRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<IdentityProperties>> {
        if (requestParameters.twin === null || requestParameters.twin === undefined) {
            throw new runtime.RequiredError('twin','Required parameter requestParameters.twin was null or undefined when calling getTwinIdentity.');
        }

        if (requestParameters.identity === null || requestParameters.identity === undefined) {
            throw new runtime.RequiredError('identity','Required parameter requestParameters.identity was null or undefined when calling getTwinIdentity.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/twins/{twin}/identities/{identity}`.replace(`{${"twin"}}`, encodeURIComponent(String(requestParameters.twin))).replace(`{${"identity"}}`, encodeURIComponent(String(requestParameters.identity))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IdentityPropertiesFromJSON(jsonValue));
    }

    /**
     * Get Twin\'s Identity
     */
    async getTwinIdentity(requestParameters: IdentitiesApiGetTwinIdentityRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<IdentityProperties> {
        const response = await this.getTwinIdentityRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Resolve Twin\'s Identity to system UUID
     */
    async resolveTwinIdentityRaw(requestParameters: IdentitiesApiResolveTwinIdentityRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ResolvedIdentities>> {
        if (requestParameters.identity === null || requestParameters.identity === undefined) {
            throw new runtime.RequiredError('identity','Required parameter requestParameters.identity was null or undefined when calling resolveTwinIdentity.');
        }

        const queryParameters: any = {};

        if (requestParameters.context !== undefined) {
            queryParameters['context'] = requestParameters.context;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/resolve/{identity}`.replace(`{${"identity"}}`, encodeURIComponent(String(requestParameters.identity))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResolvedIdentitiesFromJSON(jsonValue));
    }

    /**
     * Resolve Twin\'s Identity to system UUID
     */
    async resolveTwinIdentity(requestParameters: IdentitiesApiResolveTwinIdentityRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ResolvedIdentities> {
        const response = await this.resolveTwinIdentityRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Twin Identity
     */
    async updateTwinIdentityRaw(requestParameters: IdentitiesApiUpdateTwinIdentityRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<IdentityProperties>> {
        if (requestParameters.twin === null || requestParameters.twin === undefined) {
            throw new runtime.RequiredError('twin','Required parameter requestParameters.twin was null or undefined when calling updateTwinIdentity.');
        }

        if (requestParameters.identity === null || requestParameters.identity === undefined) {
            throw new runtime.RequiredError('identity','Required parameter requestParameters.identity was null or undefined when calling updateTwinIdentity.');
        }

        if (requestParameters.patchIdentityProperties === null || requestParameters.patchIdentityProperties === undefined) {
            throw new runtime.RequiredError('patchIdentityProperties','Required parameter requestParameters.patchIdentityProperties was null or undefined when calling updateTwinIdentity.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/twins/{twin}/identities/{identity}`.replace(`{${"twin"}}`, encodeURIComponent(String(requestParameters.twin))).replace(`{${"identity"}}`, encodeURIComponent(String(requestParameters.identity))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchIdentityPropertiesToJSON(requestParameters.patchIdentityProperties),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IdentityPropertiesFromJSON(jsonValue));
    }

    /**
     * Update Twin Identity
     */
    async updateTwinIdentity(requestParameters: IdentitiesApiUpdateTwinIdentityRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<IdentityProperties> {
        const response = await this.updateTwinIdentityRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
