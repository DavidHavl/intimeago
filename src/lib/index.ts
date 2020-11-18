/**
 * @author     David Havl <info@davidhavl.com>
 * @link:      https://github.com/DavidHavl/intimeago
 * @license    MIT
 */

import { LocaleFunction, LocaleName, SetupOptions, TDatetime, TimerPool } from './interface'
import { diffSec, formatDiff, nextInterval } from './utils/date'
import { getLocale, importLocale, isLocaleImported } from './utils/locale'

export const DATETIME_ATTRIBUTE_NAME = 'data-datetime'
export const UPDATE_EVENT_NAME = 'intimeago-update'

const TIMER_POOL: TimerPool = {}
const TIMER_ID_ATTRIBUTE_NAME = 'intimeago-timer-id'

/**
 * Clear a node update timer
 * @param node
 */
const clearTimer = (node: HTMLElement): void => {
  if (node.hasAttribute(TIMER_ID_ATTRIBUTE_NAME)) {
    const timerId = parseInt(String(node.getAttribute(TIMER_ID_ATTRIBUTE_NAME)))
    clearTimeout(timerId)
    delete TIMER_POOL[timerId]
  }
}

function runSingle(node: HTMLElement, datetime: string, localeFunction: LocaleFunction, options: SetupOptions): void {
  // clear the node's exist timer
  clearTimer(node)

  const { relativeDate } = options

  // get diff seconds
  const diff = diffSec(datetime, relativeDate)
  // render
  node.innerText = formatDiff(diff, localeFunction)

  // Dispatch the event.
  // @ts-ignore
  node.dispatchEvent(new CustomEvent(UPDATE_EVENT_NAME, { diff }))

  const timerId = (setTimeout(() => {
    runSingle(node, datetime, localeFunction, options)
  }, Math.min(Math.max(nextInterval(diff), 1) * 1000, 0x7fffffff)) as unknown) as number

  // there is no need to save node in object. Just save the key
  TIMER_POOL[timerId] = 0
  node.setAttribute(TIMER_ID_ATTRIBUTE_NAME, String(timerId))
}

/**
 * Remove from dom element
 * @param node - the node to remove the functionality from
 */
export function remove(node?: HTMLElement): void {
  // clear one node
  if (node) {
    clearTimer(node)
  } else {
    // clear all timers
    // @ts-ignore
    Object.keys(TIMER_POOL).forEach(clear)
  }
}

/**
 * Setup dom element/s
 * @param elements
 * @param locale
 * @param options
 */
export function setup(elements: HTMLElement | HTMLElement[] | NodeList, locale?: LocaleName, options?: SetupOptions) {
  locale = locale || 'en_US'
  // import needed locale
  if (!isLocaleImported(locale)) {
    importLocale(locale)
  }

  // @ts-ignore
  const elementList: HTMLElement[] = elements.length ? elements : [elements]
  for (const key in Object.keys(elementList)) {
    if (elementList[key].hasAttribute(DATETIME_ATTRIBUTE_NAME)) {
      runSingle(elementList[key], String(elementList[key].getAttribute(DATETIME_ATTRIBUTE_NAME)), getLocale(locale), options || {})
    }
  }

  return elementList
}

/**
 * Format the difference into string
 * @param date
 * @param locale
 * @param options
 */
export const format = (date: TDatetime, locale?: LocaleName, options?: SetupOptions): string => {

  locale = locale || 'en_US'
  // import needed locale
  if (!isLocaleImported(locale)) {
    importLocale(locale)
  }

  // diff seconds
  const sec = diffSec(date, options && options.relativeDate)
  // format it with locale
  return formatDiff(sec, getLocale(locale))
}
