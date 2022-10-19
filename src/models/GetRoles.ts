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
  UserRoleEntry,
  UserRoleEntryFromJSON,
  UserRoleEntryFromJSONTyped,
  UserRoleEntryToJSON,
} from "./UserRoleEntry";

/**
 *
 * @export
 * @interface GetRoles
 */
export interface GetRoles {
  /**
   *
   * @type {{ [key: string]: UserRoleEntry; }}
   * @memberof GetRoles
   */
  roles?: { [key: string]: UserRoleEntry };
}

export function GetRolesFromJSON(json: any): GetRoles {
  return GetRolesFromJSONTyped(json, false);
}

export function GetRolesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetRoles {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    roles: !exists(json, "roles")
      ? undefined
      : mapValues(json["roles"], UserRoleEntryFromJSON),
  };
}

export function GetRolesToJSON(value?: GetRoles | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    roles:
      value.roles === undefined
        ? undefined
        : mapValues(value.roles, UserRoleEntryToJSON),
  };
}
