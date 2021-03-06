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
 * @interface UpdatedRoleRules
 */
export interface UpdatedRoleRules {
    /**
     * Rule to control access to a Twin
     * @type {string}
     * @memberof UpdatedRoleRules
     */
    twinRule?: string;
    /**
     * Rule to control access to a Ledger's Entry
     * @type {string}
     * @memberof UpdatedRoleRules
     */
    entryRule?: string;
}

export function UpdatedRoleRulesFromJSON(json: any): UpdatedRoleRules {
    return UpdatedRoleRulesFromJSONTyped(json, false);
}

export function UpdatedRoleRulesFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdatedRoleRules {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'twinRule': !exists(json, 'twin_rule') ? undefined : json['twin_rule'],
        'entryRule': !exists(json, 'entry_rule') ? undefined : json['entry_rule'],
    };
}

export function UpdatedRoleRulesToJSON(value?: UpdatedRoleRules | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'twin_rule': value.twinRule,
        'entry_rule': value.entryRule,
    };
}

