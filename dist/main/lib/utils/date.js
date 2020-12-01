"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextInterval = exports.diffSec = exports.formatDiff = exports.toDate = void 0;
const SEQUENCE_ARRAY = [
    60,
    60,
    24,
    7,
    365 / 7 / 12,
    12,
];
/**
 * format Date / string / timestamp to timestamp
 * @param input
 * @returns {*}
 */
function toDate(input) {
    if (input instanceof Date)
        return input;
    // @ts-ignore
    if (!isNaN(input) || /^\d+$/.test(input))
        return new Date(parseInt(input));
    input = (input || '')
        // @ts-ignore
        .trim()
        .replace(/\.\d+/, '') // remove milliseconds
        .replace(/-/, '/')
        .replace(/-/, '/')
        .replace(/(\d)T(\d)/, '$1 $2')
        .replace(/Z/, ' UTC') // 2017-2-5T3:57:52Z -> 2017-2-5 3:57:52UTC
        .replace(/([+-]\d\d):?(\d\d)/, ' $1$2'); // -04:00 -> -0400
    // @ts-ignore
    return new Date(input);
}
exports.toDate = toDate;
/**
 * format the diff second to *** time ago, with setting locale
 * @param diff
 * @param localeFunction
 * @returns
 */
function formatDiff(diff, localeFunction) {
    /**
     * if locale is not exist, use defaultLocale.
     * if defaultLocale is not exist, use build-in `en`.
     * be sure of no error when locale is not exist.
     *
     * If `time in`, then 1
     * If `time ago`, then 0
     */
    const agoIn = diff < 0 ? 1 : 0;
    /**
     * Get absolute value of number (|diff| is non-negative) value of x
     * |diff| = diff if diff is positive
     * |diff| = -diff if diff is negative
     * |0| = 0
     */
    diff = Math.abs(diff);
    /**
     * Unit of time
     */
    let idx = 0;
    for (; diff >= SEQUENCE_ARRAY[idx] && idx < SEQUENCE_ARRAY.length; idx++) {
        diff /= SEQUENCE_ARRAY[idx];
    }
    /**
     * Math.floor() is alternative of ~~
     *
     * The differences and bugs:
     * Math.floor(3.7) -> 4 but ~~3.7 -> 3
     * Math.floor(1559125440000.6) -> 1559125440000 but ~~1559125440000.6 -> 52311552
     *
     * More information about the performance of algebraic:
     * https://www.youtube.com/watch?v=65-RbBwZQdU
     */
    diff = Math.floor(diff);
    idx *= 2;
    if (diff > (idx === 0 ? 9 : 1))
        idx += 1;
    return localeFunction(diff, idx)[agoIn].replace('%s', diff.toString());
}
exports.formatDiff = formatDiff;
/**
 * Calculate the seconds between given date and relative date (now).
 * @param date
 * @param relativeDate
 * @returns {number}
 */
function diffSec(date, relativeDate) {
    const relDate = relativeDate ? toDate(relativeDate) : new Date();
    return (+relDate - +toDate(date)) / 1000;
}
exports.diffSec = diffSec;
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
function nextInterval(diff) {
    const diffAbs = Math.abs(diff);
    if (diffAbs <= SEQUENCE_ARRAY[0]) {
        return 1;
    }
    let sv = 1, i = 0, d = diffAbs;
    for (; d >= SEQUENCE_ARRAY[i] && i < SEQUENCE_ARRAY.length; i++) {
        d /= SEQUENCE_ARRAY[i];
        sv *= SEQUENCE_ARRAY[i];
    }
    const remainder = diffAbs % sv;
    return Math.ceil(remainder > 0 ? remainder : 1);
}
exports.nextInterval = nextInterval;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvdXRpbHMvZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxNQUFNLGNBQWMsR0FBRztJQUNyQixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixDQUFDO0lBQ0QsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFO0lBQ1osRUFBRTtDQUNILENBQUE7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IsTUFBTSxDQUFDLEtBQThCO0lBQ25ELElBQUksS0FBSyxZQUFZLElBQUk7UUFBRSxPQUFPLEtBQUssQ0FBQTtJQUN2QyxhQUFhO0lBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFDMUUsS0FBSyxHQUFHLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNuQixhQUFhO1NBQ1osSUFBSSxFQUFFO1NBQ04sT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxzQkFBc0I7U0FDM0MsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7U0FDakIsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7U0FDakIsT0FBTyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUM7U0FDN0IsT0FBTyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQywyQ0FBMkM7U0FDaEUsT0FBTyxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxDQUFBLENBQUMsa0JBQWtCO0lBQzVELGFBQWE7SUFDYixPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ3hCLENBQUM7QUFmRCx3QkFlQztBQUVEOzs7OztHQUtHO0FBQ0gsU0FBZ0IsVUFBVSxDQUFDLElBQVksRUFBRSxjQUE4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