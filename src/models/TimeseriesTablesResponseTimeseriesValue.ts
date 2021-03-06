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

import {
  TimeseriesTable,
  TimeseriesTableFromJSON,
  TimeseriesTableFromJSONTyped,
  TimeseriesTableToJSON,
} from "./TimeseriesTable";
import {
  TimeseriesTableError,
  TimeseriesTableErrorFromJSON,
  TimeseriesTableErrorFromJSONTyped,
  TimeseriesTableErrorToJSON,
} from "./TimeseriesTableError";

/**
 * @type TimeseriesTablesResponseTimeseriesValue
 *
 * @export
 */
export type TimeseriesTablesResponseTimeseriesValue =
  | TimeseriesTable
  | TimeseriesTableError;

export function TimeseriesTablesResponseTimeseriesValueFromJSON(
  json: any
): TimeseriesTablesResponseTimeseriesValue {
  return TimeseriesTablesResponseTimeseriesValueFromJSONTyped(json, false);
}

export function TimeseriesTablesResponseTimeseriesValueFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TimeseriesTablesResponseTimeseriesValue {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    ...TimeseriesTableFromJSONTyped(json, true),
    ...TimeseriesTableErrorFromJSONTyped(json, true),
  };
}

export function TimeseriesTablesResponseTimeseriesValueToJSON(
  value?: TimeseriesTablesResponseTimeseriesValue | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  if ("error" in value) {
    return { ...TimeseriesTableErrorToJSON(value) };
  }
  return { ...TimeseriesTableToJSON(value) };
}
