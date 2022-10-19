/* tslint:disable */
/* eslint-disable */
/**
 * Trusted Twin API
 * TT API Gateway.
 *
 * The version of the OpenAPI document: 2.07.00
 * Contact: hello@trustedtwin.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface UserSecretResponse
 */
export interface UserSecretResponse {
  /**
   *
   * @type {string}
   * @memberof UserSecretResponse
   */
  account?: string;
  /**
   *
   * @type {string}
   * @memberof UserSecretResponse
   */
  user?: string;
  /**
   *
   * @type {string}
   * @memberof UserSecretResponse
   */
  secret?: string;
  /**
   * UTC timestamp denoting validity of the User Secret
   * @type {number}
   * @memberof UserSecretResponse
   */
  validityTs?: number;
  /**
   * UTC timestamp denoting when the User Secret was created
   * @type {number}
   * @memberof UserSecretResponse
   */
  createdTs?: number;
  /**
   * UTC timestamp denoting when the User Secret was last updated
   * @type {number}
   * @memberof UserSecretResponse
   */
  updatedTs?: number;
}

export function UserSecretResponseFromJSON(json: any): UserSecretResponse {
  return UserSecretResponseFromJSONTyped(json, false);
}

export function UserSecretResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UserSecretResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    account: !exists(json, "account") ? undefined : json["account"],
    user: !exists(json, "user") ? undefined : json["user"],
    secret: !exists(json, "secret") ? undefined : json["secret"],
    validityTs: !exists(json, "validity_ts") ? undefined : json["validity_ts"],
    createdTs: !exists(json, "created_ts") ? undefined : json["created_ts"],
    updatedTs: !exists(json, "updated_ts") ? undefined : json["updated_ts"],
  };
}

export function UserSecretResponseToJSON(
  value?: UserSecretResponse | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    account: value.account,
    user: value.user,
    secret: value.secret,
    validity_ts: value.validityTs,
    created_ts: value.createdTs,
    updated_ts: value.updatedTs,
  };
}
