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
/**
 * 
 * @export
 * @interface PostNewRoleRules
 */
export interface PostNewRoleRules {
    /**
     * Rule applied to control access to a Twin
     * @type {string}
     * @memberof PostNewRoleRules
     */
    twinRule?: string;
    /**
     * Rule applied to control access to a Ledger's Entry
     * @type {string}
     * @memberof PostNewRoleRules
     */
    entryRule?: string;
    /**
     * Rule applied to control access to an Identity
     * @type {string}
     * @memberof PostNewRoleRules
     */
    identityRule?: string;
}

/**
 * Check if a given object implements the PostNewRoleRules interface.
 */
export function instanceOfPostNewRoleRules(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostNewRoleRulesFromJSON(json: any): PostNewRoleRules {
    return PostNewRoleRulesFromJSONTyped(json, false);
}

export function PostNewRoleRulesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostNewRoleRules {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'twinRule': !exists(json, 'twin_rule') ? undefined : json['twin_rule'],
        'entryRule': !exists(json, 'entry_rule') ? undefined : json['entry_rule'],
        'identityRule': !exists(json, 'identity_rule') ? undefined : json['identity_rule'],
    };
}

export function PostNewRoleRulesToJSON(value?: PostNewRoleRules | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'twin_rule': value.twinRule,
        'entry_rule': value.entryRule,
        'identity_rule': value.identityRule,
    };
}

