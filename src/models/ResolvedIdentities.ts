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
 * @interface ResolvedIdentities
 */
export interface ResolvedIdentities {
  /**
   * List of Twin UUIDs
   * @type {Array<string>}
   * @memberof ResolvedIdentities
   */
  twins?: Array<string>;
}

export function ResolvedIdentitiesFromJSON(json: any): ResolvedIdentities {
  return ResolvedIdentitiesFromJSONTyped(json, false);
}

export function ResolvedIdentitiesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ResolvedIdentities {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    twins: !exists(json, "twins") ? undefined : json["twins"],
  };
}

export function ResolvedIdentitiesToJSON(
  value?: ResolvedIdentities | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    twins: value.twins,
  };
}
