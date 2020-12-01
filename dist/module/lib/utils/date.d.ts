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
 *
 * Examples:
 * diff = 60 then it return 1 (so it runs again in 1 seconds and shows "in 59 seconds" )
 * diff = 83 then it returns 23
 * diff = 119 then it returns 59
 * diff = 3601 (an hour + 1 second), then it returns 1
 * @param diff {number} the difference in seconds between now and date to be formatted.
 **/
export declare function nextInterval(diff: number): number;
