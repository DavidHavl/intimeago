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
    node.dispatchEvent(new CustomEvent(exports.UPDATE_EVENT_NAME, { diff }));
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
    // diff seconds
    const sec = date_1.diffSec(date, options && options.relativeDate);
    // format it with locale
    return date_1.formatDiff(sec, locale_1.getLocale(locale));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOzs7QUFHSCx1Q0FBZ0U7QUFDaEUsMkNBQTBFO0FBRTdELFFBQUEsdUJBQXVCLEdBQUcsZUFBZSxDQUFBO0FBQ3pDLFFBQUEsaUJBQWlCLEdBQUcsa0JBQWtCLENBQUE7QUFFbkQsTUFBTSxVQUFVLEdBQWMsRUFBRSxDQUFBO0FBQ2hDLE1BQU0sdUJBQXVCLEdBQUcsb0JBQW9CLENBQUE7QUFFcEQ7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFpQixFQUFRLEVBQUU7SUFDN0MsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLEVBQUU7UUFDOUMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzVFLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNyQixPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtLQUMzQjtBQUNILENBQUMsQ0FBQTtBQUVELFNBQVMsU0FBUyxDQUFDLElBQWlCLEVBQUUsUUFBZ0IsRUFBRSxjQUE4QixFQUFFLE9BQXFCO0lBQzNHLCtCQUErQjtJQUMvQixVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFaEIsTUFBTSxFQUFFLFlBQVksRUFBRSxHQUFHLE9BQU8sQ0FBQTtJQUVoQyxtQkFBbUI7SUFDbkIsTUFBTSxJQUFJLEdBQUcsY0FBTyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQTtJQUM1QyxTQUFTO0lBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBVSxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQTtJQUVqRCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLElBQUksQ0FBQyxhQUFhLENBQUMsSUFB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