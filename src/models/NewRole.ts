/* tslint:disable */
/* eslint-disable */
/**
 * Trusted Twin API
 * This documentation describes API endpoints of the Trusted Twin platform.
 *
 * The version of the OpenAPI document: 2.02.00
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
 * @interface NewRole
 */
export interface NewRole {
    /**
     * Role UUID
     * @type {string}
     * @memberof NewRole
     */
    uuid?: string;
    /**
     * Role name (doesn't have to be unique), must conform to '^[0-9A-Za-z][0-9A-Za-z_ \-]{0,30}[0-9A-Za-z]*$'
     * @type {string}
     * @memberof NewRole
     */
    name?: string;
    /**
     * 
     * @type {NewRoleStatement}
     * @memberof NewRole
     */
    statement?: NewRoleStatement;
    /**
     * 
     * @type {PostNewRoleRules}
     * @memberof NewRole
     */
    rules?: PostNewRoleRules;
    /**
     * UTC timestamp denoting when the Role was created
     * @type {number}
     * @memberof NewRole
     */
    createdTs?: number;
    /**
     * UTC timestamp denoting when the Role was last updated
     * @type {number}
     * @memberof NewRole
     */
    updatedTs?: number;
}

export function NewRoleFromJSON(json: any): NewRole {
    return NewRoleFromJSONTyped(json, false);
}

export function NewRoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewRole {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'statement': !exists(json, 'statement') ? undefined : NewRoleStatementFromJSON(json['statement']),
        'rules': !exists(json, 'rules') ? undefined : PostNewRoleRulesFromJSON(json['rules']),
        'createdTs': !exists(json, 'created_ts') ? undefined : json['created_ts'],
        'updatedTs': !exists(json, 'updated_ts') ? undefined : json['updated_ts'],
    };
}

export function NewRoleToJSON(value?: NewRole | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': value.name,
        'statement': NewRoleStatementToJSON(value.statement),
        'rules': PostNewRoleRulesToJSON(value.rules),
        'created_ts': value.createdTs,
        'updated_ts': value.updatedTs,
    };
}
