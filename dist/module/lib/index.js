/**
 * @author     David Havl <info@davidhavl.com>
 * @link:      https://github.com/DavidHavl/intimeago
 * @license    MIT
 */
import { diffSec, formatDiff, nextInterval } from './utils/date';
import { getLocale, importLocale, isLocaleImported } from './utils/locale';
export const DATETIME_ATTRIBUTE_NAME = 'data-intimeago-datetime';
export const PREPEND_TEXT_ATTRIBUTE_NAME = 'data-intimeago-prepend-text';
export const REMOVE_ON_ZERO_ATTRIBUTE_NAME = 'data-intimeago-remove-on-zero';
export const UPDATE_EVENT_NAME = 'intimeago-update';
const TIMER_POOL = {};
const TIMER_ID_ATTRIBUTE_NAME = 'intimeago-timer-id';
/**
 * Clear a node update timer
 * @param node
 */
const clearTimer = (node) => {
    if (node && node.hasAttribute(TIMER_ID_ATTRIBUTE_NAME)) {
        const timerId = parseInt(String(node.getAttribute(TIMER_ID_ATTRIBUTE_NAME)));
        clearTimeout(timerId);
        delete TIMER_POOL[timerId];
    }
};
function runSingle(node, datetime, localeFunction, options) {
    // clear the node's existing timer
    clearTimer(node);
    // check if still in the dome (has not been detached)
    if (!node.isConnected) {
        return;
    }
    const { relativeDate } = options;
    // get diff seconds
    const diff = diffSec(datetime, relativeDate);
    const prepend = node.getAttribute(PREPEND_TEXT_ATTRIBUTE_NAME);
    // render
    node.innerText = (prepend ? prepend : '') + formatDiff(diff, localeFunction);
    // Dispatch the event.
    // @ts-ignore
    node.dispatchEvent(new CustomEvent(UPDATE_EVENT_NAME, { detail: { diff } }));
    if (node.getAttribute(REMOVE_ON_ZERO_ATTRIBUTE_NAME) && Math.floor(diff) === 0) {
        node.remove();
        return;
    }
    const nextInt = nextInterval(diff);
    const timerId = setTimeout(() => {
        runSingle(node, datetime, localeFunction, options);
    }, Math.min(Math.max(nextInt, 1) * 1000, 0x7fffffff));
    // Just the key is fine
    TIMER_POOL[timerId] = 1;
    node.setAttribute(TIMER_ID_ATTRIBUTE_NAME, String(timerId));
}
/**
 * Remove from one or more elements
 * @param nodes - the node/s to remove the functionality from
 */
export function remove(nodes) {
    // clear one or more known nodes
    if (nodes) {
        // @ts-ignore
        const nodeList = nodes.length ? nodes : [nodes];
        for (const key in Object.keys(nodeList)) {
            clearTimer(nodeList[key]);
        }
    }
    // else clear all timers
    else {
        // @ts-ignore
        Object.keys(TIMER_POOL).forEach((timerId) => {
            clearTimeout(timerId);
            delete TIMER_POOL[timerId];
        });
    }
}
/**
 * Setup dom element/s
 * @param nodes {HTMLElement | HTMLElement[] | NodeList}
 * @param locale {LocaleName}
 * @param options
 */
export function setup(nodes, locale, options) {
    locale = locale || 'en_US';
    // import needed locale
    if (!isLocaleImported(locale)) {
        importLocale(locale);
    }
    // @ts-ignore
    const nodeList = nodes.length ? nodes : [nodes];
    for (const key in Object.keys(nodeList)) {
        if (nodeList[key].hasAttribute(DATETIME_ATTRIBUTE_NAME)) {
            runSingle(nodeList[key], String(nodeList[key].getAttribute(DATETIME_ATTRIBUTE_NAME)), getLocale(locale), options || {});
        }
    }
    return nodeList;
}
/**
 * Format the difference into string
 * @param date
 * @param locale
 * @param options
 */
export function format(date, locale, options) {
    locale = locale || 'en_US';
    // import needed locale
    if (!isLocaleImported(locale)) {
        importLocale(locale);
    }
    // diff seconds
    const sec = diffSec(date, options && options.relativeDate);
    // format it with locale
    return formatDiff(sec, getLocale(locale));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFHSCxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUE7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUUxRSxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBRyx5QkFBeUIsQ0FBQTtBQUNoRSxNQUFNLENBQUMsTUFBTSwyQkFBMkIsR0FBRyw2QkFBNkIsQ0FBQTtBQUN4RSxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FBRywrQkFBK0IsQ0FBQTtBQUM1RSxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxrQkFBa0IsQ0FBQTtBQUVuRCxNQUFNLFVBQVUsR0FBYyxFQUFFLENBQUE7QUFDaEMsTUFBTSx1QkFBdUIsR0FBRyxvQkFBb0IsQ0FBQTtBQUVwRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQWlCLEVBQVEsRUFBRTtJQUM3QyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLEVBQUU7UUFDdEQsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzVFLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNyQixPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtLQUMzQjtBQUNILENBQUMsQ0FBQTtBQUVELFNBQVMsU0FBUyxDQUFDLElBQWlCLEVBQUUsUUFBZ0IsRUFBRSxjQUE4QixFQUFFLE9BQXFCO0lBQzNHLGtDQUFrQztJQUNsQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDaEIscURBQXFEO0lB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