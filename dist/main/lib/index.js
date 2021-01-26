"use strict";
/**
 * @author     David Havl <info@davidhavl.com>
 * @link:      https://github.com/DavidHavl/intimeago
 * @license    MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = exports.setup = exports.remove = exports.UPDATE_EVENT_NAME = exports.REMOVE_ON_ZERO_ATTRIBUTE_NAME = exports.PREPEND_TEXT_ATTRIBUTE_NAME = exports.RELATIVE_DATETIME_ATTRIBUTE_NAME = exports.DATETIME_ATTRIBUTE_NAME = void 0;
const date_1 = require("./utils/date");
const locale_1 = require("./utils/locale");
exports.DATETIME_ATTRIBUTE_NAME = 'data-intimeago-datetime';
exports.RELATIVE_DATETIME_ATTRIBUTE_NAME = 'data-intimeago-relative-datetime';
exports.PREPEND_TEXT_ATTRIBUTE_NAME = 'data-intimeago-prepend-text';
exports.REMOVE_ON_ZERO_ATTRIBUTE_NAME = 'data-intimeago-remove-on-zero';
exports.UPDATE_EVENT_NAME = 'intimeago-update';
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
    // Relative datetime option
    let relativeDateTime = new Date();
    if (options && options.relativeDateTime) {
        relativeDateTime = options.relativeDateTime;
    }
    else if (node.hasAttribute(exports.RELATIVE_DATETIME_ATTRIBUTE_NAME)) {
        relativeDateTime = node.getAttribute(exports.RELATIVE_DATETIME_ATTRIBUTE_NAME) + '';
    }
    // Get diff seconds
    const diff = date_1.diffSec(datetime, relativeDateTime);
    const prepend = node.getAttribute(exports.PREPEND_TEXT_ATTRIBUTE_NAME);
    // Render
    node.innerText = (prepend ? prepend : '') + date_1.formatDiff(diff, localeFunction);
    // Dispatch the event.
    // @ts-ignore
    node.dispatchEvent(new CustomEvent(exports.UPDATE_EVENT_NAME, { detail: { diff } }));
    if (node.getAttribute(exports.REMOVE_ON_ZERO_ATTRIBUTE_NAME) && Math.floor(diff) === 0) {
        node.remove();
        return;
    }
    const nextInt = date_1.nextInterval(diff);
    const timerId = setTimeout(() => {
        runSingle(node, datetime, localeFunction, options);
    }, Math.min(Math.max(nextInt, 1) * 1000, 0x7fffffff));
    // Just the key itself is more performant
    TIMER_POOL[timerId] = 1;
    node.setAttribute(TIMER_ID_ATTRIBUTE_NAME, String(timerId));
}
/**
 * Remove from one or more elements
 * @param nodes - the node/s to remove the functionality from
 */
function remove(nodes) {
    // Clear one or more known nodes
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
exports.remove = remove;
/**
 * Setup dom element/s
 * @param nodes {HTMLElement | HTMLElement[] | NodeList}
 * @param locale {LocaleName}
 * @param options
 */
function setup(nodes, locale, options) {
    locale = locale || 'en_US';
    // Import needed locale
    if (!locale_1.isLocaleImported(locale)) {
        locale_1.importLocale(locale);
    }
    // @ts-ignore
    const nodeList = nodes.length ? nodes : [nodes];
    for (const key in Object.keys(nodeList)) {
        if (nodeList[key].hasAttribute(exports.DATETIME_ATTRIBUTE_NAME)) {
            runSingle(nodeList[key], String(nodeList[key].getAttribute(exports.DATETIME_ATTRIBUTE_NAME)), locale_1.getLocale(locale), options || {});
        }
    }
    return nodeList;
}
exports.setup = setup;
/**
 * Format the difference into string
 * @param date
 * @param locale
 * @param options
 */
function format(date, locale, options) {
    locale = locale || 'en_US';
    // Import needed locale
    if (!locale_1.isLocaleImported(locale)) {
        locale_1.importLocale(locale);
    }
    // Diff seconds
    const sec = date_1.diffSec(date, options && options.relativeDateTime);
    // Format it with locale
    return date_1.formatDiff(sec, locale_1.getLocale(locale));
}
exports.format = format;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOzs7QUFHSCx1Q0FBZ0U7QUFDaEUsMkNBQTBFO0FBRTdELFFBQUEsdUJBQXVCLEdBQUcseUJBQXlCLENBQUE7QUFDbkQsUUFBQSxnQ0FBZ0MsR0FBRyxrQ0FBa0MsQ0FBQTtBQUNyRSxRQUFBLDJCQUEyQixHQUFHLDZCQUE2QixDQUFBO0FBQzNELFFBQUEsNkJBQTZCLEdBQUcsK0JBQStCLENBQUE7QUFDL0QsUUFBQSxpQkFBaUIsR0FBRyxrQkFBa0IsQ0FBQTtBQUVuRCxNQUFNLFVBQVUsR0FBYyxFQUFFLENBQUE7QUFDaEMsTUFBTSx1QkFBdUIsR0FBRyxvQkFBb0IsQ0FBQTtBQUVwRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQWlCLEVBQVEsRUFBRTtJQUM3QyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLEVBQUU7UUFDdEQsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzVFLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNyQixPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtLQUMzQjtBQUNILENBQUMsQ0FBQTtBQUVELFNBQVMsU0FBUyxDQUFDLElBQWlCLEVBQUUsUUFBZ0IsRUFBRSxjQUE4QixFQUFFLE9BQXFCO0lBQzNHLGtDQUFrQztJQUNsQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDaEIscURBQXFEO0lBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQ3JCLE9BQU07S0FDUDtJQUVELDJCQUEyQjtJQUMzQixJQUFJLGdCQUFnQixHQUEyQixJQUFJLElBQUksRUFBRSxD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