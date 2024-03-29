/* tslint:disable */
/* eslint-disable */
/**
 * Trusted Twin API
 * TT API Gateway.
 *
 * The version of the OpenAPI document: 2.13.00
 * Contact: hello@trustedtwin.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { NewRoleStatement } from './NewRoleStatement';
import {
    NewRoleStatementFromJSON,
    NewRoleStatementFromJSONTyped,
    NewRoleStatementToJSON,
} from './NewRoleStatement';
import type { PostNewRoleRules } from './PostNewRoleRules';
import {
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
     * Role name (doesn't have to be unique), must conform to '^[0-9A-Za-z][0-9A-Za-z_ \-]{0,30}[0-9A-Za-z]$'
     * @type {string}
     * @memberof NewRole
     */
    name?: string;
    /**
     * Account UUID
     * @type {string}
     * @memberof NewRole
     */
    account?: string;
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

/**
 * Check if a given object implements the NewRole interface.
 */
export function instanceOfNewRole(value: object): boolean {
    let isInstance = true;

    return isInstance;
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
        'account': !exists(json, 'account') ? undefined : json['account'],
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
        'account': value.account,
        'statement': NewRoleStatementToJSON(value.statement),
        'rules': PostNewRoleRulesToJSON(value.rules),
        'created_ts': value.createdTs,
        'updated_ts': value.updatedTs,
    };
}

