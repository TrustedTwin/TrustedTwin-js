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
/**
 * 
 * @export
 * @interface PostNewRoleStatement
 */
export interface PostNewRoleStatement {
    /**
     * allow
     * @type {string}
     * @memberof PostNewRoleStatement
     */
    effect?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PostNewRoleStatement
     */
    actions?: Array<string>;
}

export function PostNewRoleStatementFromJSON(json: any): PostNewRoleStatement {
    return PostNewRoleStatementFromJSONTyped(json, false);
}

export function PostNewRoleStatementFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostNewRoleStatement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'effect': !exists(json, 'effect') ? undefined : json['effect'],
        'actions': !exists(json, 'actions') ? undefined : json['actions'],
    };
}

export function PostNewRoleStatementToJSON(value?: PostNewRoleStatement | null): any {
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

