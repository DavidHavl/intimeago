/**
 * @author     David Havl <info@davidhavl.com>
 * @link:      https://github.com/DavidHavl/intimeago
 * @license    MIT
 */

import { LocaleFunction, LocaleName, SetupOptions, TDatetime, TimerPool } from './interface'
import { diffSec, formatDiff, nextInterval } from './utils/date'
import { getLocale, importLocale, isLocaleImported } from './utils/locale'

export const DATETIME_ATTRIBUTE_NAME = 'data-intimeago-datetime'
export const RELATIVE_DATETIME_ATTRIBUTE_NAME = 'data-intimeago-relative-datetime'
export const PREPEND_TEXT_ATTRIBUTE_NAME = 'data-intimeago-prepend-text'
export const REMOVE_ON_ZERO_ATTRIBUTE_NAME = 'data-intimeago-remove-on-zero'
export const UPDATE_EVENT_NAME = 'intimeago-update'

const TIMER_POOL: TimerPool = {}
const TIMER_ID_ATTRIBUTE_NAME = 'intimeago-timer-id'

/**
 * Clear a node update timer
 * @param node
 */
const clearTimer = (node: HTMLElement): void => {
  if (node && node.hasAttribute(TIMER_ID_ATTRIBUTE_NAME)) {
    const timerId = parseInt(String(node.getAttribute(TIMER_ID_ATTRIBUTE_NAME)))
    clearTimeout(timerId)
    delete TIMER_POOL[timerId]
  }
}

function runSingle(node: HTMLElement, datetime: string, localeFunction: LocaleFunction, options: SetupOptions): void {
  // clear the node's existing timer
  clearTimer(node)
  // check if still in the dome (has not been detached)
  if (!node.isConnected) {
    return
  }

  // Relative datetime option
  let relativeDateTime: Date | string | number = new Date()
  if (options && options.relativeDateTime) {
    relativeDateTime = options.relativeDateTime
  } else if (node.hasAttribute(RELATIVE_DATETIME_ATTRIBUTE_NAME)) {
    relativeDateTime = node.getAttribute(RELATIVE_DATETIME_ATTRIBUTE_NAME) + ''
  }

  // Get diff seconds
  const diff = diffSec(datetime, relativeDateTime)


  const prepend = node.getAttribute(PREPEND_TEXT_ATTRIBUTE_NAME)
  // Render
  node.innerText = (prepend ? prepend : '') + formatDiff(diff, localeFunction)

  // Dispatch the event.
  // @ts-ignore
  node.dispatchEvent(new CustomEvent(UPDATE_EVENT_NAME, { detail: { diff } }))

  if (node.getAttribute(REMOVE_ON_ZERO_ATTRIBUTE_NAME) && Math.floor(diff) === 0) {
    node.remove()
    return
  }

  const nextInt = nextInterval(diff)

  const timerId = (setTimeout(() => {
    runSingle(node, datetime, localeFunction, options)
  }, Math.min(Math.max(nextInt, 1) * 1000, 0x7fffffff)) as unknown) as number

  // Just the key itself is more performant
  TIMER_POOL[timerId] = 1
  node.setAttribute(TIMER_ID_ATTRIBUTE_NAME, String(timerId))
}

/**
 * Remove from one or more elements
 * @param nodes - the node/s to remove the functionality from
 */
export function remove(nodes: HTMLElement | HTMLElement[] | Node | NodeList): void {
  // Clear one or more known nodes
  if (nodes) {
    // @ts-ignore
    const nodeList: HTMLElement[] = nodes.length ? nodes : [nodes]
    for (const key in Object.keys(nodeList)) {
      clearTimer(nodeList[key])
    }
  }
  // else clear all timers
  else {
    // @ts-ignore
    Object.keys(TIMER_POOL).forEach((timerId: number) => {
      clearTimeout(timerId)
      delete TIMER_POOL[timerId]
    })
  }
}

/**
 * Setup dom element/s
 * @param nodes {HTMLElement | HTMLElement[] | NodeList}
 * @param locale {LocaleName}
 * @param options
 */
export function setup (nodes: HTMLElement | HTMLElement[] | NodeList, locale?: LocaleName, options?: SetupOptions) {
  locale = locale || 'en_US'
  // Import needed locale
  if (!isLocaleImported(locale)) {
    importLocale(locale)
  }

  // @ts-ignore
  const nodeList: HTMLElement[] = nodes.length ? nodes : [nodes]
  for (const key in Object.keys(nodeList)) {
    if (nodeList[key].hasAttribute(DATETIME_ATTRIBUTE_NAME)) {
      runSingle(nodeList[key], String(nodeList[key].getAttribute(DATETIME_ATTRIBUTE_NAME)), getLocale(locale), options || {})
    }
  }

  return nodeList
}

/**
 * Format the difference into string
 * @param date
 * @param locale
 * @param options
 */
export function format (date: TDatetime, locale?: LocaleName, options?: SetupOptions): string {

  locale = locale || 'en_US'
  // Import needed locale
  if (!isLocaleImported(locale)) {
    importLocale(locale)
  }

  // Diff seconds
  const sec = diffSec(date, options && options.relativeDateTime)
  // Format it with locale
  return formatDiff(sec, getLocale(locale))
}
