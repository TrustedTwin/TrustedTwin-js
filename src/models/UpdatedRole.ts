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
  UpdateRoleStatement,
  UpdateRoleStatementFromJSON,
  UpdateRoleStatementFromJSONTyped,
  UpdateRoleStatementToJSON,
} from "./UpdateRoleStatement";
import {
  UpdatedRoleRules,
  UpdatedRoleRulesFromJSON,
  UpdatedRoleRulesFromJSONTyped,
  UpdatedRoleRulesToJSON,
} from "./UpdatedRoleRules";

/**
 *
 * @export
 * @interface UpdatedRole
 */
export interface UpdatedRole {
  /**
   * Role UUID
   * @type {string}
   * @memberof UpdatedRole
   */
  uuid?: string;
  /**
   * Role name (doesn't have to be unique), must conform to '^[0-9A-Za-z][0-9A-Za-z_ \-]{0,30}[0-9A-Za-z]*$'
   * @type {string}
   * @memberof UpdatedRole
   */
  name?: string;
  /**
   *
   * @type {UpdateRoleStatement}
   * @memberof UpdatedRole
   */
  statement?: UpdateRoleStatement;
  /**
   *
   * @type {UpdatedRoleRules}
   * @memberof UpdatedRole
   */
  rules?: UpdatedRoleRules;
  /**
   * UTC timestamp denoting when Role was created
   * @type {number}
   * @memberof UpdatedRole
   */
  createdTs?: number;
  /**
   * UTC timestamp denoting when Role was last updated
   * @type {number}
   * @memberof UpdatedRole
   */
  updatedTs?: number;
}

export function UpdatedRoleFromJSON(json: any): UpdatedRole {
  return UpdatedRoleFromJSONTyped(json, false);
}

export function UpdatedRoleFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdatedRole {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    uuid: !exists(json, "uuid") ? undefined : json["uuid"],
    name: !exists(json, "name") ? undefined : json["name"],
    statement: !exists(json, "statement")
      ? undefined
      : UpdateRoleStatementFromJSON(json["statement"]),
    rules: !exists(json, "rules")
      ? undefined
      : UpdatedRoleRulesFromJSON(json["rules"]),
    createdTs: !exists(json, "created_ts") ? undefined : json["created_ts"],
    updatedTs: !exists(json, "updated_ts") ? undefined : json["updated_ts"],
  };
}

export function UpdatedRoleToJSON(value?: UpdatedRole | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    uuid: value.uuid,
    name: value.name,
    statement: UpdateRoleStatementToJSON(value.statement),
    rules: UpdatedRoleRulesToJSON(value.rules),
    created_ts: value.createdTs,
    updated_ts: value.updatedTs,
  };
}
