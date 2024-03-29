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
  AttachTwinDocument,
  AttachTwinDocumentResponse,
  ErrorObject,
  FileAddResponse,
  GetDoc,
  InvalidateHandlerResponse,
  TwinDocs,
  UpdateTwinDoc,
} from '../models';
import {
    AttachTwinDocumentFromJSON,
    AttachTwinDocumentToJSON,
    AttachTwinDocumentResponseFromJSON,
    AttachTwinDocumentResponseToJSON,
    ErrorObjectFromJSON,
    ErrorObjectToJSON,
    FileAddResponseFromJSON,
    FileAddResponseToJSON,
    GetDocFromJSON,
    GetDocToJSON,
    InvalidateHandlerResponseFromJSON,
    InvalidateHandlerResponseToJSON,
    TwinDocsFromJSON,
    TwinDocsToJSON,
    UpdateTwinDocFromJSON,
    UpdateTwinDocToJSON,
} from '../models';

export interface DocsApiAttachTwinDocRequest {
    twin: string;
    attachTwinDocument?: AttachTwinDocument;
}

export interface DocsApiDeleteTwinDocRequest {
    twin: string;
    docName: string;
}

export interface DocsApiDeleteTwinDocsRequest {
    twin: string;
}

export interface DocsApiDownloadDocRequest {
    account: string;
    handler: string;
}

export interface DocsApiGetTwinDocRequest {
    twin: string;
    docName: string;
    download?: boolean;
}

export interface DocsApiGetTwinDocsRequest {
    twin: string;
}

export interface DocsApiInvalidateUploadUrlRequest {
    handler: string;
}

export interface DocsApiUpdateTwinDocRequest {
    twin: string;
    docName: string;
    updateTwinDoc?: UpdateTwinDoc;
}

/**
 * 
 */
export class DocsApi extends runtime.BaseAPI {

    /**
     * Attach Doc to the Twin
     */
    async attachTwinDocRaw(requestParameters: DocsApiAttachTwinDocRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AttachTwinDocumentResponse>> {
        if (requestParameters.twin === null || requestParameters.twin === undefined) {
            throw new runtime.RequiredError('twin','Required parameter requestParameters.twin was null or undefined when calling attachTwinDoc.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/twins/{twin}/docs`.replace(`{${"twin"}}`, encodeURIComponent(String(requestParameters.twin))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AttachTwinDocumentToJSON(requestParameters.attachTwinDocument),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AttachTwinDocumentResponseFromJSON(jsonValue));
    }

    /**
     * Attach Doc to the Twin
     */
    async attachTwinDoc(requestParameters: DocsApiAttachTwinDocRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AttachTwinDocumentResponse> {
        const response = await this.attachTwinDocRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create Doc handler used to attach Doc to a Twin
     */
    async createUploadUrlRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FileAddResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/cache`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FileAddResponseFromJSON(jsonValue));
    }

    /**
     * Create Doc handler used to attach Doc to a Twin
     */
    async createUploadUrl(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FileAddResponse> {
        const response = await this.createUploadUrlRaw(initOverrides);
        return await response.value();
    }

    /**
     * Delete Doc attached to given Twin
     */
    async deleteTwinDocRaw(requestParameters: DocsApiDeleteTwinDocRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetDoc>> {
        if (requestParameters.twin === null || requestParameters.twin === undefined) {
            throw new runtime.RequiredError('twin','Required parameter requestParameters.twin was null or undefined when calling deleteTwinDoc.');
        }

        if (requestParameters.docName === null || requestParameters.docName === undefined) {
            throw new runtime.RequiredError('docName','Required parameter requestParameters.docName was null or undefined when calling deleteTwinDoc.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/twins/{twin}/docs/{doc_name}`.replace(`{${"twin"}}`, encodeURIComponent(String(requestParameters.twin))).replace(`{${"doc_name"}}`, encodeURIComponent(String(requestParameters.docName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetDocFromJSON(jsonValue));
    }

    /**
     * Delete Doc attached to given Twin
     */
    async deleteTwinDoc(requestParameters: DocsApiDeleteTwinDocRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetDoc> {
        const response = await this.deleteTwinDocRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete Docs attached to given Twin
     */
    async deleteTwinDocsRaw(requestParameters: DocsApiDeleteTwinDocsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetDoc>> {
        if (requestParameters.twin === null || requestParameters.twin === undefined) {
            throw new runtime.RequiredError('twin','Required parameter requestParameters.twin was null or undefined when calling deleteTwinDocs.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/twins/{twin}/docs`.replace(`{${"twin"}}`, encodeURIComponent(String(requestParameters.twin))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetDocFromJSON(jsonValue));
    }

    /**
     * Delete Docs attached to given Twin
     */
    async deleteTwinDocs(requestParameters: DocsApiDeleteTwinDocsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetDoc> {
        const response = await this.deleteTwinDocsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Download requested file
     */
    async downloadDocRaw(requestParameters: DocsApiDownloadDocRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.account === null || requestParameters.account === undefined) {
            throw new runtime.RequiredError('account','Required parameter requestParameters.account was null or undefined when calling downloadDoc.');
        }

        if (requestParameters.handler === null || requestParameters.handler === undefined) {
            throw new runtime.RequiredError('handler','Required parameter requestParameters.handler was null or undefined when calling downloadDoc.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/download/{account}/{handler}`.replace(`{${"account"}}`, encodeURIComponent(String(requestParameters.account))).replace(`{${"handler"}}`, encodeURIComponent(String(requestParameters.handler))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Download requested file
     */
    async downloadDoc(requestParameters: DocsApiDownloadDocRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.downloadDocRaw(requestParameters, initOverrides);
    }

    /**
     * Obtain URL to download attached Doc
     */
    async getTwinDocRaw(requestParameters: DocsApiGetTwinDocRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetDoc>> {
        if (requestParameters.twin === null || requestParameters.twin === undefined) {
            throw new runtime.RequiredError('twin','Required parameter requestParameters.twin was null or undefined when calling getTwinDoc.');
        }

        if (requestParameters.docName === null || requestParameters.docName === undefined) {
            throw new runtime.RequiredError('docName','Required parameter requestParameters.docName was null or undefined when calling getTwinDoc.');
        }

        const queryParameters: any = {};

        if (requestParameters.download !== undefined) {
            queryParameters['download'] = requestParameters.download;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/twins/{twin}/docs/{doc_name}`.replace(`{${"twin"}}`, encodeURIComponent(String(requestParameters.twin))).replace(`{${"doc_name"}}`, encodeURIComponent(String(requestParameters.docName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetDocFromJSON(jsonValue));
    }

    /**
     * Obtain URL to download attached Doc
     */
    async getTwinDoc(requestParameters: DocsApiGetTwinDocRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetDoc> {
        const response = await this.getTwinDocRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Docs attached to given Twin
     */
    async getTwinDocsRaw(requestParameters: DocsApiGetTwinDocsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TwinDocs>> {
        if (requestParameters.twin === null || requestParameters.twin === undefined) {
            throw new runtime.RequiredError('twin','Required parameter requestParameters.twin was null or undefined when calling getTwinDocs.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/twins/{twin}/docs`.replace(`{${"twin"}}`, encodeURIComponent(String(requestParameters.twin))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TwinDocsFromJSON(jsonValue));
    }

    /**
     * Get Docs attached to given Twin
     */
    async getTwinDocs(requestParameters: DocsApiGetTwinDocsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TwinDocs> {
        const response = await this.getTwinDocsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Invalidate Doc handler used to attach Doc to a Twin and remove uploaded Doc from temporary storage
     */
    async invalidateUploadUrlRaw(requestParameters: DocsApiInvalidateUploadUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvalidateHandlerResponse>> {
        if (requestParameters.handler === null || requestParameters.handler === undefined) {
            throw new runtime.RequiredError('handler','Required parameter requestParameters.handler was null or undefined when calling invalidateUploadUrl.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/cache/{handler}`.replace(`{${"handler"}}`, encodeURIComponent(String(requestParameters.handler))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvalidateHandlerResponseFromJSON(jsonValue));
    }

    /**
     * Invalidate Doc handler used to attach Doc to a Twin and remove uploaded Doc from temporary storage
     */
    async invalidateUploadUrl(requestParameters: DocsApiInvalidateUploadUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvalidateHandlerResponse> {
        const response = await this.invalidateUploadUrlRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Twin\'s Doc
     */
    async updateTwinDocRaw(requestParameters: DocsApiUpdateTwinDocRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetDoc>> {
        if (requestParameters.twin === null || requestParameters.twin === undefined) {
            throw new runtime.RequiredError('twin','Required parameter requestParameters.twin was null or undefined when calling updateTwinDoc.');
        }

        if (requestParameters.docName === null || requestParameters.docName === undefined) {
            throw new runtime.RequiredError('docName','Required parameter requestParameters.docName was null or undefined when calling updateTwinDoc.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
        }

        const response = await this.request({
            path: `/twins/{twin}/docs/{doc_name}`.replace(`{${"twin"}}`, encodeURIComponent(String(requestParameters.twin))).replace(`{${"doc_name"}}`, encodeURIComponent(String(requestParameters.docName))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateTwinDocToJSON(requestParameters.updateTwinDoc),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetDocFromJSON(jsonValue));
    }

    /**
     * Update Twin\'s Doc
     */
    async updateTwinDoc(requestParameters: DocsApiUpdateTwinDocRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetDoc> {
        const response = await this.updateTwinDocRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
