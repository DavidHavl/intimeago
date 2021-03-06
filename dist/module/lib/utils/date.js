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
export function toDate(input) {
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
/**
 * format the diff second to *** time ago, with setting locale
 * @param diff
 * @param localeFunction
 * @returns
 */
export function formatDiff(diff, localeFunction) {
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
/**
 * Calculate the seconds between given date and relative date (now).
 * @param date
 * @param relativeDate
 * @returns {number}
 */
export function diffSec(date, relativeDate) {
    const relDate = relativeDate ? toDate(relativeDate) : new Date();
    return (+relDate - +toDate(date)) / 1000;
}
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
export function nextInterval(diff) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvdXRpbHMvZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLGNBQWMsR0FBRztJQUNyQixFQUFFO0lBQ0YsRUFBRTtJQUNGLEVBQUU7SUFDRixDQUFDO0lBQ0QsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFO0lBQ1osRUFBRTtDQUNILENBQUE7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLE1BQU0sQ0FBQyxLQUE4QjtJQUNuRCxJQUFJLEtBQUssWUFBWSxJQUFJO1FBQUUsT0FBTyxLQUFLLENBQUE7SUFDdkMsYUFBYTtJQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBQzFFLEtBQUssR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDbkIsYUFBYTtTQUNaLElBQUksRUFBRTtTQUNOLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsc0JBQXNCO1NBQzNDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1NBQ2pCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1NBQ2pCLE9BQU8sQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDO1NBQzdCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsMkNBQTJDO1NBQ2hFLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLENBQUMsQ0FBQSxDQUFDLGtCQUFrQjtJQUM1RCxhQUFhO0lBQ2IsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUN4QixDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxNQUFNLFVBQVUsVUFBVSxDQUFDLElBQVksRUFBRSxjQUE4QjtJQUNyRTs7Ozs7OztPQU9HO0lBQ0gsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFFOUI7Ozs7O09BS0c7SUFDSCxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUVyQjs7T0FFRztJQUNILElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQTtJQUVYLE9BQU8sSUFBSSxJQUFJLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUN4RSxJQUFJLElBQUksY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0tBQzVCO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0gsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFdkIsR0FBRyxJQUFJLENBQUMsQ0FBQTtJQUVSLElBQUksSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBRSxHQUFHLElBQUksQ0FBQyxDQUFBO0lBRXhDLE9BQU8sY0FBYyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO0FBQ3hFLENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxPQUFPLENBQUMsSUFBZSxFQUFFLFlBQXdCO0lBQy9ELE1BQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFBO0lBQ2hFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQTtBQUMxQyxDQUFDO0FBRUQ7Ozs7Ozs7OztJQVNJO0FBQ0osTUFBTSxVQUFVLFlBQVksQ0FBQyxJQUFZO0lBQ3ZDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDOUIsSUFBSSxPQUFPLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ2hDLE9BQU8sQ0FBQyxDQUFBO0tBQ1Q7SUFDRCxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLENBQUMsRUFDTCxDQUFDLEdBQUcsT0FBTyxDQUFBO0lBRWIsT0FBTyxDQUFDLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9ELENBQUMsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdEIsRUFBRSxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUN4QjtJQUNELE1BQU0sU0FBUyxHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUE7SUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDakQsQ0FBQyJ9