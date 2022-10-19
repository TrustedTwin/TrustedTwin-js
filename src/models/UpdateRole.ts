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
  PostNewRoleRules,
  PostNewRoleRulesFromJSON,
  PostNewRoleRulesFromJSONTyped,
  PostNewRoleRulesToJSON,
} from "./PostNewRoleRules";
import {
  UpdateRoleStatement,
  UpdateRoleStatementFromJSON,
  UpdateRoleStatementFromJSONTyped,
  UpdateRoleStatementToJSON,
} from "./UpdateRoleStatement";

/**
 *
 * @export
 * @interface UpdateRole
 */
export interface UpdateRole {
  /**
   * Role name (doesn't have to be unique), must conform to '^[0-9A-Za-z][0-9A-Za-z_ \-]{0,30}[0-9A-Za-z]*$'
   * @type {string}
   * @memberof UpdateRole
   */
  name?: string;
  /**
   *
   * @type {UpdateRoleStatement}
   * @memberof UpdateRole
   */
  statement?: UpdateRoleStatement;
  /**
   *
   * @type {PostNewRoleRules}
   * @memberof UpdateRole
   */
  rules?: PostNewRoleRules;
}

export function UpdateRoleFromJSON(json: any): UpdateRole {
  return UpdateRoleFromJSONTyped(json, false);
}

export function UpdateRoleFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateRole {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: !exists(json, "name") ? undefined : json["name"],
    statement: !exists(json, "statement")
      ? undefined
      : UpdateRoleStatementFromJSON(json["statement"]),
    rules: !exists(json, "rules")
      ? undefined
      : PostNewRoleRulesFromJSON(json["rules"]),
  };
}

export function UpdateRoleToJSON(value?: UpdateRole | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    statement: UpdateRoleStatementToJSON(value.statement),
    rules: PostNewRoleRulesToJSON(value.rules),
  };
}
