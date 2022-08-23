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

import {
  TableError,
  TableErrorFromJSON,
  TableErrorFromJSONTyped,
  TableErrorToJSON,
} from "./TableError";
import {
  TimeseriesTable,
  TimeseriesTableFromJSON,
  TimeseriesTableFromJSONTyped,
  TimeseriesTableToJSON,
} from "./TimeseriesTable";

/**
 * @type CreateTimeseriesTablesResponseTimeseriesValue
 *
 * @export
 */
export type CreateTimeseriesTablesResponseTimeseriesValue =
  | TableError
  | TimeseriesTable;

export function CreateTimeseriesTablesResponseTimeseriesValueFromJSON(
  json: any
): CreateTimeseriesTablesResponseTimeseriesValue {
  return CreateTimeseriesTablesResponseTimeseriesValueFromJSONTyped(
    json,
    false
  );
}

export function CreateTimeseriesTablesResponseTimeseriesValueFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateTimeseriesTablesResponseTimeseriesValue {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    ...TableErrorFromJSONTyped(json, true),
    ...TimeseriesTableFromJSONTyped(json, true),
  };
}

export function CreateTimeseriesTablesResponseTimeseriesValueToJSON(
  value?: CreateTimeseriesTablesResponseTimeseriesValue | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  if ("error" in value) {
    return { ...TableErrorToJSON(value) };
  }

  return { ...TimeseriesTableToJSON(value) };
}
