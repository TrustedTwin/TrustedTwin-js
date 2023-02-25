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
import type { ServicesDatabaseUserAccessCommand } from './ServicesDatabaseUserAccessCommand';
import {
    ServicesDatabaseUserAccessCommandFromJSON,
    ServicesDatabaseUserAccessCommandFromJSONTyped,
    ServicesDatabaseUserAccessCommandToJSON,
} from './ServicesDatabaseUserAccessCommand';

/**
 * 
 * @export
 * @interface ServicesDatabaseUsersAccess
 */
export interface ServicesDatabaseUsersAccess {
    /**
     * Users and their Timeseries access type
     * @type {{ [key: string]: ServicesDatabaseUserAccessCommand; }}
     * @memberof ServicesDatabaseUsersAccess
     */
    users?: { [key: string]: ServicesDatabaseUserAccessCommand; };
}

/**
 * Check if a given object implements the ServicesDatabaseUsersAccess interface.
 */
export function instanceOfServicesDatabaseUsersAccess(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ServicesDatabaseUsersAccessFromJSON(json: any): ServicesDatabaseUsersAccess {
    return ServicesDatabaseUsersAccessFromJSONTyped(json, false);
}

export function ServicesDatabaseUsersAccessFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServicesDatabaseUsersAccess {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'users': !exists(json, 'users') ? undefined : (mapValues(json['users'], ServicesDatabaseUserAccessCommandFromJSON)),
    };
}

export function ServicesDatabaseUsersAccessToJSON(value?: ServicesDatabaseUsersAccess | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'users': value.users === undefined ? undefined : (mapValues(value.users, ServicesDatabaseUserAccessCommandToJSON)),
    };
}

