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
 * @interface Sticker
 */
export interface Sticker {
  /**
   *
   * @type {string}
   * @memberof Sticker
   */
  message?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof Sticker
   */
  recipients?: Array<string>;
  /**
   *
   * @type {number}
   * @memberof Sticker
   */
  validityTs?: number;
  /**
   *
   * @type {number}
   * @memberof Sticker
   */
  createdTs?: number;
  /**
   *
   * @type {number}
   * @memberof Sticker
   */
  updatedTs?: number;
}

export function StickerFromJSON(json: any): Sticker {
  return StickerFromJSONTyped(json, false);
}

export function StickerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Sticker {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    message: !exists(json, "message") ? undefined : json["message"],
    recipients: !exists(json, "recipients") ? undefined : json["recipients"],
    validityTs: !exists(json, "validity_ts") ? undefined : json["validity_ts"],
    createdTs: !exists(json, "created_ts") ? undefined : json["created_ts"],
    updatedTs: !exists(json, "updated_ts") ? undefined : json["updated_ts"],
  };
}

export function StickerToJSON(value?: Sticker | null): any {
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
  };
}
