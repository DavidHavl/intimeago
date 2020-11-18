"use strict";
/**
 * @author     David Havl <info@davidhavl.com>
 * @link:      https://github.com/DavidHavl/intimeago
 * @license    MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = exports.setup = exports.remove = exports.UPDATE_EVENT_NAME = exports.DATETIME_ATTRIBUTE_NAME = void 0;
const date_1 = require("./utils/date");
const locale_1 = require("./utils/locale");
exports.DATETIME_ATTRIBUTE_NAME = 'data-datetime';
exports.UPDATE_EVENT_NAME = 'intimeago-update';
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
    const diff = date_1.diffSec(datetime, relativeDate);
    // render
    node.innerText = date_1.formatDiff(diff, localeFunction);
    // Dispatch the event.
    // @ts-ignore
    node.dispatchEvent(new CustomEvent(exports.UPDATE_EVENT_NAME, { detail: { diff } }));
    const timerId = setTimeout(() => {
        runSingle(node, datetime, localeFunction, options);
    }, Math.min(Math.max(date_1.nextInterval(diff), 1) * 1000, 0x7fffffff));
    // there is no need to save node in object. Just save the key
    TIMER_POOL[timerId] = 0;
    node.setAttribute(TIMER_ID_ATTRIBUTE_NAME, String(timerId));
}
/**
 * Remove from dom element
 * @param node - the node to remove the functionality from
 */
function remove(node) {
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
exports.remove = remove;
/**
 * Setup dom element/s
 * @param elements
 * @param locale
 * @param options
 */
function setup(elements, locale, options) {
    locale = locale || 'en_US';
    // import needed locale
    if (!locale_1.isLocaleImported(locale)) {
        locale_1.importLocale(locale);
    }
    // @ts-ignore
    const elementList = elements.length ? elements : [elements];
    for (const key in Object.keys(elementList)) {
        if (elementList[key].hasAttribute(exports.DATETIME_ATTRIBUTE_NAME)) {
            runSingle(elementList[key], String(elementList[key].getAttribute(exports.DATETIME_ATTRIBUTE_NAME)), locale_1.getLocale(locale), options || {});
        }
    }
    return elementList;
}
exports.setup = setup;
/**
 * Format the difference into string
 * @param date
 * @param locale
 * @param options
 */
exports.format = (date, locale, options) => {
    locale = locale || 'en_US';
    // import needed locale
    if (!locale_1.isLocaleImported(locale)) {
        locale_1.importLocale(locale);
    }
    // diff seconds
    const sec = date_1.diffSec(date, options && options.relativeDate);
    // format it with locale
    return date_1.formatDiff(sec, locale_1.getLocale(locale));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOzs7QUFHSCx1Q0FBZ0U7QUFDaEUsMkNBQTBFO0FBRTdELFFBQUEsdUJBQXVCLEdBQUcsZUFBZSxDQUFBO0FBQ3pDLFFBQUEsaUJBQWlCLEdBQUcsa0JBQWtCLENBQUE7QUFFbkQsTUFBTSxVQUFVLEdBQWMsRUFBRSxDQUFBO0FBQ2hDLE1BQU0sdUJBQXVCLEdBQUcsb0JBQW9CLENBQUE7QUFFcEQ7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFpQixFQUFRLEVBQUU7SUFDN0MsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLEVBQUU7UUFDOUMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzVFLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNyQixPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtLQUMzQjtBQUNILENBQUMsQ0FBQTtBQUVELFNBQVMsU0FBUyxDQUFDLElBQWlCLEVBQUUsUUFBZ0IsRUFBRSxjQUE4QixFQUFFLE9BQXFCO0lBQzNHLCtCQUErQjtJQUMvQixVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFaEIsTUFBTSxFQUFFLFlBQVksRUFBRSxHQUFHLE9BQU8sQ0FBQTtJQUVoQyxtQkFBbUI7SUFDbkIsTUFBTSxJQUFJLEdBQUcsY0FBTyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQTtJQUM1QyxTQUFTO0lBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBVSxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQTtJQUVqRCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLElBQUksQ0FBQyxhQUFhLENBQUMsSUFB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