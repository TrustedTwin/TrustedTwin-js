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
/**
 * 
 * @export
 * @interface UpdateRoleStatement
 */
export interface UpdateRoleStatement {
    /**
     * allow
     * @type {string}
     * @memberof UpdateRoleStatement
     */
    effect?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateRoleStatement
     */
    actions?: Array<string>;
}

export function UpdateRoleStatementFromJSON(json: any): UpdateRoleStatement {
    return UpdateRoleStatementFromJSONTyped(json, false);
}

export function UpdateRoleStatementFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateRoleStatement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'effect': !exists(json, 'effect') ? undefined : json['effect'],
        'actions': !exists(json, 'actions') ? undefined : json['actions'],
    };
}

export function UpdateRoleStatementToJSON(value?: UpdateRoleStatement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'effect': value.effect,
        'actions': value.actions,
    };
}
