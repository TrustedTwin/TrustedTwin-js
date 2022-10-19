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
import {
  CreateStickersResponseStickersValueAnyOf,
  CreateStickersResponseStickersValueAnyOfFromJSON,
  CreateStickersResponseStickersValueAnyOfFromJSONTyped,
  CreateStickersResponseStickersValueAnyOfToJSON,
} from "./CreateStickersResponseStickersValueAnyOf";
import {
  Sticker,
  StickerFromJSON,
  StickerFromJSONTyped,
  StickerToJSON,
} from "./Sticker";

/**
 *
 * @export
 * @interface CreateStickersResponseStickersValue
 */
export interface CreateStickersResponseStickersValue {
  /**
   *
   * @type {string}
   * @memberof CreateStickersResponseStickersValue
   */
  message?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof CreateStickersResponseStickersValue
   */
  recipients?: Array<string>;
  /**
   *
   * @type {number}
   * @memberof CreateStickersResponseStickersValue
   */
  validityTs?: number;
  /**
   *
   * @type {number}
   * @memberof CreateStickersResponseStickersValue
   */
  createdTs?: number;
  /**
   *
   * @type {number}
   * @memberof CreateStickersResponseStickersValue
   */
  updatedTs?: number;
  /**
   *
   * @type {string}
   * @memberof CreateStickersResponseStickersValue
   */
  error?: string;
}

export function CreateStickersResponseStickersValueFromJSON(
  json: any
): CreateStickersResponseStickersValue {
  return CreateStickersResponseStickersValueFromJSONTyped(json, false);
}

export function CreateStickersResponseStickersValueFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateStickersResponseStickersValue {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    message: !exists(json, "message") ? undefined : json["message"],
    recipients: !exists(json, "recipients") ? undefined : json["recipients"],
    validityTs: !exists(json, "validity_ts") ? undefined : json["validity_ts"],
    createdTs: !exists(json, "created_ts") ? undefined : json["created_ts"],
    updatedTs: !exists(json, "updated_ts") ? undefined : json["updated_ts"],
    error: !exists(json, "error") ? undefined : json["error"],
  };
}

export function CreateStickersResponseStickersValueToJSON(
  value?: CreateStickersResponseStickersValue | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    message: value.message,
    recipients: value.recipients,
    validity_ts: value.validityTs,
    created_ts: value.createdTs,
    updated_ts: value.updatedTs,
    error: value.error,
  };
}