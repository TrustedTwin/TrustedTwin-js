/* tslint:disable */
/* eslint-disable */
/**
 * Trusted Twin API
 * This documentation describes API endpoints of the Trusted Twin platform.
 *
 * The version of the OpenAPI document: 2.05.02
 * Contact: hello@trustedtwin.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface NewRoleStatement
 */
export interface NewRoleStatement {
    /**
     * allow
     * @type {string}
     * @memberof NewRoleStatement
     */
    effect?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof NewRoleStatement
     */
    actions?: Array<string>;
}

export function NewRoleStatementFromJSON(json: any): NewRoleStatement {
    return NewRoleStatementFromJSONTyped(json, false);
}

export function NewRoleStatementFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewRoleStatement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'effect': !exists(json, 'effect') ? undefined : json['effect'],
        'actions': !exists(json, 'actions') ? undefined : json['actions'],
    };
}

export function NewRoleStatementToJSON(value?: NewRoleStatement | null): any {
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

