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

import { exists, mapValues } from '../runtime';
import {
    NewRoleStatement,
    NewRoleStatementFromJSON,
    NewRoleStatementFromJSONTyped,
    NewRoleStatementToJSON,
} from './NewRoleStatement';
import {
    PostNewRoleRules,
    PostNewRoleRulesFromJSON,
    PostNewRoleRulesFromJSONTyped,
    PostNewRoleRulesToJSON,
} from './PostNewRoleRules';

/**
 * 
 * @export
 * @interface GetRole
 */
export interface GetRole {
    /**
     * Role UUID
     * @type {string}
     * @memberof GetRole
     */
    uuid?: string;
    /**
     * Role name (doesn't have to be unique), must conform to '^[0-9A-Za-z][0-9A-Za-z_ \-]{0,30}[0-9A-Za-z]*$'
     * @type {string}
     * @memberof GetRole
     */
    name?: string;
    /**
     * Account UUID associated with given Role
     * @type {string}
     * @memberof GetRole
     */
    account?: string;
    /**
     * 
     * @type {NewRoleStatement}
     * @memberof GetRole
     */
    statement?: NewRoleStatement;
    /**
     * 
     * @type {PostNewRoleRules}
     * @memberof GetRole
     */
    rules?: PostNewRoleRules;
    /**
     * UTC timestamp denoting when the Role was created
     * @type {number}
     * @memberof GetRole
     */
    createdTs?: number;
    /**
     * UTC timestamp denoting when the Role was last updated
     * @type {number}
     * @memberof GetRole
     */
    updatedTs?: number;
}

export function GetRoleFromJSON(json: any): GetRole {
    return GetRoleFromJSONTyped(json, false);
}

export function GetRoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRole {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'account': !exists(json, 'account') ? undefined : json['account'],
        'statement': !exists(json, 'statement') ? undefined : NewRoleStatementFromJSON(json['statement']),
        'rules': !exists(json, 'rules') ? undefined : PostNewRoleRulesFromJSON(json['rules']),
        'createdTs': !exists(json, 'created_ts') ? undefined : json['created_ts'],
        'updatedTs': !exists(json, 'updated_ts') ? undefined : json['updated_ts'],
    };
}

export function GetRoleToJSON(value?: GetRole | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': value.name,
        'account': value.account,
        'statement': NewRoleStatementToJSON(value.statement),
        'rules': PostNewRoleRulesToJSON(value.rules),
        'created_ts': value.createdTs,
        'updated_ts': value.updatedTs,
    };
}

