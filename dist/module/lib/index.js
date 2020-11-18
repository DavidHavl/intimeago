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
    node.dispatchEvent(new CustomEvent(UPDATE_EVENT_NAME, { diff }));
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