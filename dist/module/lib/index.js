/**
 * @author     David Havl <info@davidhavl.com>
 * @link:      https://github.com/DavidHavl/intimeago
 * @license    MIT
 */
import { diffSec, formatDiff, nextInterval } from './utils/date';
import { getLocale, importLocale, isLocaleImported } from './utils/locale';
export const DATETIME_ATTRIBUTE_NAME = 'data-datetime';
export const UPDATE_EVENT_NAME = 'intimeago-update';
const TIMER_POOL = {};
const TIMER_ID_ATTRIBUTE_NAME = 'intimeago-timer-id';
/**
 * Clear a node update timer
 * @param node
 */
const clearTimer = (node) => {
    if (node.hasAttribute(TIMER_ID_ATTRIBUTE_NAME)) {
        const timerId = parseInt(String(node.getAttribute(TIMER_ID_ATTRIBUTE_NAME)));
        clearTimeout(timerId);
        delete TIMER_POOL[timerId];
    }
};
function runSingle(node, datetime, localeFunction, options) {
    // clear the node's exist timer
    clearTimer(node);
    const { relativeDate } = options;
    // get diff seconds
    const diff = diffSec(datetime, relativeDate);
    // render
    node.innerText = formatDiff(diff, localeFunction);
    // Dispatch the event.
    // @ts-ignore
    node.dispatchEvent(new CustomEvent(UPDATE_EVENT_NAME, { detail: { diff } }));
    const timerId = setTimeout(() => {
        runSingle(node, datetime, localeFunction, options);
    }, Math.min(Math.max(nextInterval(diff), 1) * 1000, 0x7fffffff));
    // there is no need to save node in object. Just save the key
    TIMER_POOL[timerId] = 0;
    node.setAttribute(TIMER_ID_ATTRIBUTE_NAME, String(timerId));
}
/**
 * Remove from dom element
 * @param node - the node to remove the functionality from
 */
export function remove(node) {
    // clear one node
    if (node) {
        clearTimer(node);
    }
    else {
        // clear all timers
        // @ts-ignore
        Object.keys(TIMER_POOL).forEach(clear);
    }
}
/**
 * Setup dom element/s
 * @param elements
 * @param locale
 * @param options
 */
export function setup(elements, locale, options) {
    locale = locale || 'en_US';
    // import needed locale
    if (!isLocaleImported(locale)) {
        importLocale(locale);
    }
    // @ts-ignore
    const elementList = elements.length ? elements : [elements];
    for (const key in Object.keys(elementList)) {
        if (elementList[key].hasAttribute(DATETIME_ATTRIBUTE_NAME)) {
            runSingle(elementList[key], String(elementList[key].getAttribute(DATETIME_ATTRIBUTE_NAME)), getLocale(locale), options || {});
        }
    }
    return elementList;
}
/**
 * Format the difference into string
 * @param date
 * @param locale
 * @param options
 */
export const format = (date, locale, options) => {
    locale = locale || 'en_US';
    // import needed locale
    if (!isLocaleImported(locale)) {
        importLocale(locale);
    }
    // diff seconds
    const sec = diffSec(date, options && options.relativeDate);
    // format it with locale
    return formatDiff(sec, getLocale(locale));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFHSCxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUE7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUUxRSxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBRyxlQUFlLENBQUE7QUFDdEQsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsa0JBQWtCLENBQUE7QUFFbkQsTUFBTSxVQUFVLEdBQWMsRUFBRSxDQUFBO0FBQ2hDLE1BQU0sdUJBQXVCLEdBQUcsb0JBQW9CLENBQUE7QUFFcEQ7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFpQixFQUFRLEVBQUU7SUFDN0MsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLEVBQUU7UUFDOUMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzVFLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNyQixPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtLQUMzQjtBQUNILENBQUMsQ0FBQTtBQUVELFNBQVMsU0FBUyxDQUFDLElBQWlCLEVBQUUsUUFBZ0IsRUFBRSxjQUE4QixFQUFFLE9BQXFCO0lBQzNHLCtCQUErQjtJQUMvQixVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFaEIsTUFBTSxFQUFFLFlBQVksRUFBRSxHQUFHLE9BQU8sQ0FBQTtJQUVoQyxtQkFBbUI7SUFDbkIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQTtJQUM1QyxT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