import { LocaleFunction, TDatetime } from '../interface';
/**
 * format Date / string / timestamp to timestamp
 * @param input
 * @returns {*}
 */
export declare function toDate(input?: Date | string | number): Date;
/**
 * format the diff second to *** time ago, with setting locale
 * @param diff
 * @param localeFunction
 * @returns
 */
export declare function formatDiff(diff: number, localeFunction: LocaleFunction): string;
/**
 * Calculate the seconds between given date and relative date (now).
 * @param date
 * @param relativeDate
 * @returns {number}
 */
export declare function diffSec(date: TDatetime, relativeDate?: TDatetime): number;
/**
 * nextInterval: calculate the next interval time.
 * - diff: the diff sec between now and date to be formatted.
 *
 * What's the meaning?
 * diff = 61 then return 59
 * diff = 3601 (an hour + 1 second), then return 3599
 * make the interval with high performance.
 **/
export declare function nextInterval(diff: number): number;
