import { LocaleFunction, TDatetime } from '../interface'

const SEQUENCE_ARRAY = [
  60, // 60 seconds in 1 min
  60, // 60 minutes in 1 hour
  24, // 24 hours in 1 day
  7, // 7 days in 1 week
  365 / 7 / 12, // 4.345238095238096 weeks in 1 month
  12, // 12 months in 1 year
]

/**
 * format Date / string / timestamp to timestamp
 * @param input
 * @returns {*}
 */
export function toDate(input?: Date | string | number): Date {
  if (input instanceof Date) return input
  // @ts-ignore
  if (!isNaN(input) || /^\d+$/.test(input)) return new Date(parseInt(input))
  input = (input || '')
    // @ts-ignore
    .trim()
    .replace(/\.\d+/, '') // remove milliseconds
    .replace(/-/, '/')
    .replace(/-/, '/')
    .replace(/(\d)T(\d)/, '$1 $2')
    .replace(/Z/, ' UTC') // 2017-2-5T3:57:52Z -> 2017-2-5 3:57:52UTC
    .replace(/([+-]\d\d):?(\d\d)/, ' $1$2') // -04:00 -> -0400
  // @ts-ignore
  return new Date(input)
}

/**
 * format the diff second to *** time ago, with setting locale
 * @param diff
 * @param localeFunction
 * @returns
 */
export function formatDiff(diff: number, localeFunction: LocaleFunction): string {
  /**
   * if locale is not exist, use defaultLocale.
   * if defaultLocale is not exist, use build-in `en`.
   * be sure of no error when locale is not exist.
   *
   * If `time in`, then 1
   * If `time ago`, then 0
   */
  const agoIn = diff < 0 ? 1 : 0

  /**
   * Get absolute value of number (|diff| is non-negative) value of x
   * |diff| = diff if diff is positive
   * |diff| = -diff if diff is negative
   * |0| = 0
   */
  diff = Math.abs(diff)

  /**
   * Unit of time
   */
  let idx = 0

  for (; diff >= SEQUENCE_ARRAY[idx] && idx < SEQUENCE_ARRAY.length; idx++) {
    diff /= SEQUENCE_ARRAY[idx]
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
  diff = Math.floor(diff)

  idx *= 2

  if (diff > (idx === 0 ? 9 : 1)) idx += 1

  return localeFunction(diff, idx)[agoIn].replace('%s', diff.toString())
}

/**
 * Calculate the seconds between given date and relative date (now).
 * @param date
 * @param relativeDate
 * @returns {number}
 */
export function diffSec(date: TDatetime, relativeDate?: TDatetime): number {
  const relDate = relativeDate ? toDate(relativeDate) : new Date()
  return (+relDate - +toDate(date)) / 1000
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
export function nextInterval(diff: number): number {
  const diffAbs = Math.abs(diff)
  if (diffAbs <= SEQUENCE_ARRAY[0]) {
    return 1
  }
  let sv = 1,
    i = 0,
    d = diffAbs

  for (; d >= SEQUENCE_ARRAY[i] && i < SEQUENCE_ARRAY.length; i++) {
    d /= SEQUENCE_ARRAY[i]
    sv *= SEQUENCE_ARRAY[i]
  }
  const remainder = diffAbs % sv
  return Math.ceil(remainder > 0 ? remainder : 1)
}
