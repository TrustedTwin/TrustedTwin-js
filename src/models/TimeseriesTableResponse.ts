/* tslint:disable */
/* eslint-disable */
/**
 * Trusted Twin API
 * TT API Gateway.
 *
 * The version of the OpenAPI document: 2.07.00
 * Contact: hello@trustedtwin.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
import {
  LedgerEntryTimeseries,
  LedgerEntryTimeseriesFromJSON,
  LedgerEntryTimeseriesFromJSONTyped,
  LedgerEntryTimeseriesToJSON,
} from "./LedgerEntryTimeseries";
import {
  TimeseriesColumns,
  TimeseriesColumnsFromJSON,
  TimeseriesColumnsFromJSONTyped,
  TimeseriesColumnsToJSON,
} from "./TimeseriesColumns";
import {
  TimeseriesTableResponseStats,
  TimeseriesTableResponseStatsFromJSON,
  TimeseriesTableResponseStatsFromJSONTyped,
  TimeseriesTableResponseStatsToJSON,
} from "./TimeseriesTableResponseStats";

/**
 *
 * @export
 * @interface TimeseriesTableResponse
 */
export interface TimeseriesTableResponse {
  /**
   *
   * @type {TimeseriesTableResponseStats}
   * @memberof TimeseriesTableResponse
   */
  stats: TimeseriesTableResponseStats;
  /**
   *
   * @type {TimeseriesColumns}
   * @memberof TimeseriesTableResponse
   */
  dimensions: TimeseriesColumns;
  /**
   *
   * @type {TimeseriesColumns}
   * @memberof TimeseriesTableResponse
   */
  measurements: TimeseriesColumns;
  /**
   *
   * @type {LedgerEntryTimeseries}
   * @memberof TimeseriesTableResponse
   */
  defaults?: LedgerEntryTimeseries;
  /**
   *
   * @type {string}
   * @memberof TimeseriesTableResponse
   */
  retention?: string | null;
  /**
   *
   * @type {string}
   * @memberof TimeseriesTableResponse
   */
  chunk?: string | null;
}

export function TimeseriesTableResponseFromJSON(
  json: any
): TimeseriesTableResponse {
  return TimeseriesTableResponseFromJSONTyped(json, false);
}

export function TimeseriesTableResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TimeseriesTableResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    stats: TimeseriesTableResponseStatsFromJSON(json["stats"]),
    dimensions: TimeseriesColumnsFromJSON(json["dimensions"]),
    measurements: TimeseriesColumnsFromJSON(json["measurements"]),
    defaults: !exists(json, "defaults")
      ? undefined
      : LedgerEntryTimeseriesFromJSON(json["defaults"]),
    retention: !exists(json, "retention") ? undefined : json["retention"],
    chunk: !exists(json, "chunk") ? undefined : json["chunk"],
  };
}

export function TimeseriesTableResponseToJSON(
  value?: TimeseriesTableResponse | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    stats: TimeseriesTableResponseStatsToJSON(value.stats),
    dimensions: TimeseriesColumnsToJSON(value.dimensions),
    measurements: TimeseriesColumnsToJSON(value.measurements),
    defaults: LedgerEntryTimeseriesToJSON(value.defaults),
    retention: value.retention,
    chunk: value.chunk,
  };
}
