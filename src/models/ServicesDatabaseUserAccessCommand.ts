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


/**
 * 
 * @export
 */
export const ServicesDatabaseUserAccessCommand = {
    Read: 'read',
    Write: 'write',
    Disable: 'disable'
} as const;
export type ServicesDatabaseUserAccessCommand = typeof ServicesDatabaseUserAccessCommand[keyof typeof ServicesDatabaseUserAccessCommand];


export function ServicesDatabaseUserAccessCommandFromJSON(json: any): ServicesDatabaseUserAccessCommand {
    return ServicesDatabaseUserAccessCommandFromJSONTyped(json, false);
}

export function ServicesDatabaseUserAccessCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServicesDatabaseUserAccessCommand {
    return json as ServicesDatabaseUserAccessCommand;
}

export function ServicesDatabaseUserAccessCommandToJSON(value?: ServicesDatabaseUserAccessCommand | null): any {
    return value as any;
}

