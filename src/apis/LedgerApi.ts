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

import * as runtime from "../runtime";
import {
  ErrorObject,
  ErrorObjectFromJSON,
  ErrorObjectToJSON,
  LedgerAlias,
  LedgerAliasFromJSON,
  LedgerAliasToJSON,
  LedgerEntriesHistory,
  LedgerEntriesHistoryFromJSON,
  LedgerEntriesHistoryToJSON,
  PatchUserLedger,
  PatchUserLedgerFromJSON,
  PatchUserLedgerToJSON,
  PatchedUserLedger,
  PatchedUserLedgerFromJSON,
  PatchedUserLedgerToJSON,
  PostLedgerEntries,
  PostLedgerEntriesFromJSON,
  PostLedgerEntriesToJSON,
  UserLedger,
  UserLedgerFromJSON,
  UserLedgerToJSON,
  GetTwinLedgerEntryLedgerParameter,
} from "../models";

export interface LedgerApiAddTwinLedgerEntryRequest {
  twin: string;
  ledger: GetTwinLedgerEntryLedgerParameter;
  postLedgerEntries: PostLedgerEntries;
}

export interface LedgerApiDeleteTwinLedgerEntryRequest {
  twin: string;
  ledger: GetTwinLedgerEntryLedgerParameter;
  entries?: Array<string>;
}

export interface LedgerApiGetTwinLedgerEntryRequest {
  twin: string;
  ledger: GetTwinLedgerEntryLedgerParameter;
  showReferences?: boolean;
  showPublic?: boolean;
  showPrivate?: boolean;
  entries?: Array<string>;
}

export interface LedgerApiGetTwinLedgerEntryHistoryRequest {
  twin: string;
  ledger: GetTwinLedgerEntryLedgerParameter;
  le?: number;
  ge?: number;
  limit?: number;
  entries?: Array<string>;
}

export interface LedgerApiUpdateTwinLedgerEntryRequest {
  twin: string;
  ledger: GetTwinLedgerEntryLedgerParameter;
  patchUserLedger: PatchUserLedger;
}

/**
 *
 */
export class LedgerApi extends runtime.BaseAPI {
  /**
   * Add one or more Entries to Ledger
   */
  async addTwinLedgerEntryRaw(
    requestParameters: LedgerApiAddTwinLedgerEntryRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction
  ): Promise<runtime.ApiResponse<UserLedger>> {
    if (
      requestParameters.twin === null ||
      requestParameters.twin === undefined
    ) {
      throw new runtime.RequiredError(
        "twin",
        "Required parameter requestParameters.twin was null or undefined when calling addTwinLedgerEntry."
      );
    }

    if (
      requestParameters.ledger === null ||
      requestParameters.ledger === undefined
    ) {
      throw new runtime.RequiredError(
        "ledger",
        "Required parameter requestParameters.ledger was null or undefined when calling addTwinLedgerEntry."
      );
    }

    if (
      requestParameters.postLedgerEntries === null ||
      requestParameters.postLedgerEntries === undefined
    ) {
      throw new runtime.RequiredError(
        "postLedgerEntries",
        "Required parameter requestParameters.postLedgerEntries was null or undefined when calling addTwinLedgerEntry."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
    }

    const response = await this.request(
      {
        path: `/twins/{twin}/ledgers/{ledger}`
          .replace(
            `{${"twin"}}`,
            encodeURIComponent(String(requestParameters.twin))
          )
          .replace(
            `{${"ledger"}}`,
            encodeURIComponent(String(requestParameters.ledger))
          ),
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: PostLedgerEntriesToJSON(requestParameters.postLedgerEntries),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UserLedgerFromJSON(jsonValue)
    );
  }

  /**
   * Add one or more Entries to Ledger
   */
  async addTwinLedgerEntry(
    requestParameters: LedgerApiAddTwinLedgerEntryRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction
  ): Promise<UserLedger> {
    const response = await this.addTwinLedgerEntryRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Delete Entry from Ledger
   */
  async deleteTwinLedgerEntryRaw(
    requestParameters: LedgerApiDeleteTwinLedgerEntryRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.twin === null ||
      requestParameters.twin === undefined
    ) {
      throw new runtime.RequiredError(
        "twin",
        "Required parameter requestParameters.twin was null or undefined when calling deleteTwinLedgerEntry."
      );
    }

    if (
      requestParameters.ledger === null ||
      requestParameters.ledger === undefined
    ) {
      throw new runtime.RequiredError(
        "ledger",
        "Required parameter requestParameters.ledger was null or undefined when calling deleteTwinLedgerEntry."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.entries) {
      queryParameters["entries"] = requestParameters.entries.join(
        runtime.COLLECTION_FORMATS["csv"]
      );
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
    }

    const response = await this.request(
      {
        path: `/twins/{twin}/ledgers/{ledger}`
          .replace(
            `{${"twin"}}`,
            encodeURIComponent(String(requestParameters.twin))
          )
          .replace(
            `{${"ledger"}}`,
            encodeURIComponent(String(requestParameters.ledger))
          ),
        method: "DELETE",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Delete Entry from Ledger
   */
  async deleteTwinLedgerEntry(
    requestParameters: LedgerApiDeleteTwinLedgerEntryRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction
  ): Promise<void> {
    await this.deleteTwinLedgerEntryRaw(requestParameters, initOverrides);
  }

  /**
   * Get Entry from Ledger
   */
  async getTwinLedgerEntryRaw(
    requestParameters: LedgerApiGetTwinLedgerEntryRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction
  ): Promise<runtime.ApiResponse<UserLedger>> {
    if (
      requestParameters.twin === null ||
      requestParameters.twin === undefined
    ) {
      throw new runtime.RequiredError(
        "twin",
        "Required parameter requestParameters.twin was null or undefined when calling getTwinLedgerEntry."
      );
    }

    if (
      requestParameters.ledger === null ||
      requestParameters.ledger === undefined
    ) {
      throw new runtime.RequiredError(
        "ledger",
        "Required parameter requestParameters.ledger was null or undefined when calling getTwinLedgerEntry."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.showReferences !== undefined) {
      queryParameters["show_references"] = requestParameters.showReferences;
    }

    if (requestParameters.showPublic !== undefined) {
      queryParameters["show_public"] = requestParameters.showPublic;
    }

    if (requestParameters.showPrivate !== undefined) {
      queryParameters["show_private"] = requestParameters.showPrivate;
    }

    if (requestParameters.entries) {
      queryParameters["entries"] = requestParameters.entries.join(
        runtime.COLLECTION_FORMATS["csv"]
      );
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
    }

    const response = await this.request(
      {
        path: `/twins/{twin}/ledgers/{ledger}`
          .replace(
            `{${"twin"}}`,
            encodeURIComponent(String(requestParameters.twin))
          )
          .replace(
            `{${"ledger"}}`,
            encodeURIComponent(String(requestParameters.ledger))
          ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UserLedgerFromJSON(jsonValue)
    );
  }

  /**
   * Get Entry from Ledger
   */
  async getTwinLedgerEntry(
    requestParameters: LedgerApiGetTwinLedgerEntryRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction
  ): Promise<UserLedger> {
    const response = await this.getTwinLedgerEntryRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Get Ledger Entry History
   */
  async getTwinLedgerEntryHistoryRaw(
    requestParameters: LedgerApiGetTwinLedgerEntryHistoryRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction
  ): Promise<runtime.ApiResponse<LedgerEntriesHistory>> {
    if (
      requestParameters.twin === null ||
      requestParameters.twin === undefined
    ) {
      throw new runtime.RequiredError(
        "twin",
        "Required parameter requestParameters.twin was null or undefined when calling getTwinLedgerEntryHistory."
      );
    }

    if (
      requestParameters.ledger === null ||
      requestParameters.ledger === undefined
    ) {
      throw new runtime.RequiredError(
        "ledger",
        "Required parameter requestParameters.ledger was null or undefined when calling getTwinLedgerEntryHistory."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.le !== undefined) {
      queryParameters["le"] = requestParameters.le;
    }

    if (requestParameters.ge !== undefined) {
      queryParameters["ge"] = requestParameters.ge;
    }

    if (requestParameters.limit !== undefined) {
      queryParameters["limit"] = requestParameters.limit;
    }

    if (requestParameters.entries) {
      queryParameters["entries"] = requestParameters.entries.join(
        runtime.COLLECTION_FORMATS["csv"]
      );
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
    }

    const response = await this.request(
      {
        path: `/twins/{twin}/ledgers/{ledger}/history`
          .replace(
            `{${"twin"}}`,
            encodeURIComponent(String(requestParameters.twin))
          )
          .replace(
            `{${"ledger"}}`,
            encodeURIComponent(String(requestParameters.ledger))
          ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      LedgerEntriesHistoryFromJSON(jsonValue)
    );
  }

  /**
   * Get Ledger Entry History
   */
  async getTwinLedgerEntryHistory(
    requestParameters: LedgerApiGetTwinLedgerEntryHistoryRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction
  ): Promise<LedgerEntriesHistory> {
    const response = await this.getTwinLedgerEntryHistoryRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * PATCH one or more Entries in given Ledger
   */
  async updateTwinLedgerEntryRaw(
    requestParameters: LedgerApiUpdateTwinLedgerEntryRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction
  ): Promise<runtime.ApiResponse<PatchedUserLedger>> {
    if (
      requestParameters.twin === null ||
      requestParameters.twin === undefined
    ) {
      throw new runtime.RequiredError(
        "twin",
        "Required parameter requestParameters.twin was null or undefined when calling updateTwinLedgerEntry."
      );
    }

    if (
      requestParameters.ledger === null ||
      requestParameters.ledger === undefined
    ) {
      throw new runtime.RequiredError(
        "ledger",
        "Required parameter requestParameters.ledger was null or undefined when calling updateTwinLedgerEntry."
      );
    }

    if (
      requestParameters.patchUserLedger === null ||
      requestParameters.patchUserLedger === undefined
    ) {
      throw new runtime.RequiredError(
        "patchUserLedger",
        "Required parameter requestParameters.patchUserLedger was null or undefined when calling updateTwinLedgerEntry."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        this.configuration.apiKey("Authorization"); // RequestAuthorizer authentication
    }

    const response = await this.request(
      {
        path: `/twins/{twin}/ledgers/{ledger}`
          .replace(
            `{${"twin"}}`,
            encodeURIComponent(String(requestParameters.twin))
          )
          .replace(
            `{${"ledger"}}`,
            encodeURIComponent(String(requestParameters.ledger))
          ),
        method: "PATCH",
        headers: headerParameters,
        query: queryParameters,
        body: PatchUserLedgerToJSON(requestParameters.patchUserLedger),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PatchedUserLedgerFromJSON(jsonValue)
    );
  }

  /**
   * PATCH one or more Entries in given Ledger
   */
  async updateTwinLedgerEntry(
    requestParameters: LedgerApiUpdateTwinLedgerEntryRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction
  ): Promise<PatchedUserLedger> {
    const response = await this.updateTwinLedgerEntryRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }
}
