"use strict";
/**
 * @author     David Havl <info@davidhavl.com>
 * @link:      https://github.com/DavidHavl/intimeago
 * @license    MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = exports.setup = exports.remove = exports.UPDATE_EVENT_NAME = exports.REMOVE_ON_ZERO_ATTRIBUTE_NAME = exports.PREPEND_TEXT_ATTRIBUTE_NAME = exports.DATETIME_ATTRIBUTE_NAME = void 0;
const date_1 = require("./utils/date");
const locale_1 = require("./utils/locale");
exports.DATETIME_ATTRIBUTE_NAME = 'data-intimeago-datetime';
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
    const { relativeDate } = options;
    // get diff seconds
    const diff = date_1.diffSec(datetime, relativeDate);
    if (node.getAttribute(exports.REMOVE_ON_ZERO_ATTRIBUTE_NAME) && Math.floor(diff) === 0) {
        node.remove();
        return;
    }
    const prepend = node.getAttribute(exports.PREPEND_TEXT_ATTRIBUTE_NAME);
    // render
    node.innerText = (prepend ? prepend : '') + date_1.formatDiff(diff, localeFunction);
    // Dispatch the event.
    // @ts-ignore
    node.dispatchEvent(new CustomEvent(exports.UPDATE_EVENT_NAME, { detail: { diff } }));
    const nextInt = date_1.nextInterval(diff);
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
function remove(nodes) {
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
exports.remove = remove;
/**
 * Setup dom element/s
 * @param nodes {HTMLElement | HTMLElement[] | NodeList}
 * @param locale {LocaleName}
 * @param options
 */
function setup(nodes, locale, options) {
    locale = locale || 'en_US';
    // import needed locale
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
    // import needed locale
    if (!locale_1.isLocaleImported(locale)) {
        locale_1.importLocale(locale);
    }
    // diff seconds
    const sec = date_1.diffSec(date, options && options.relativeDate);
    // format it with locale
    return date_1.formatDiff(sec, locale_1.getLocale(locale));
}
exports.format = format;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOzs7QUFHSCx1Q0FBZ0U7QUFDaEUsMkNBQTBFO0FBRTdELFFBQUEsdUJBQXVCLEdBQUcseUJBQXlCLENBQUE7QUFDbkQsUUFBQSwyQkFBMkIsR0FBRyw2QkFBNkIsQ0FBQTtBQUMzRCxRQUFBLDZCQUE2QixHQUFHLCtCQUErQixDQUFBO0FBQy9ELFFBQUEsaUJBQWlCLEdBQUcsa0JBQWtCLENBQUE7QUFFbkQsTUFBTSxVQUFVLEdBQWMsRUFBRSxDQUFBO0FBQ2hDLE1BQU0sdUJBQXVCLEdBQUcsb0JBQW9CLENBQUE7QUFFcEQ7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFpQixFQUFRLEVBQUU7SUFDN0MsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO1FBQ3RELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUM1RSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDckIsT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUE7S0FDM0I7QUFDSCxDQUFDLENBQUE7QUFFRCxTQUFTLFNBQVMsQ0FBQyxJQUFpQixFQUFFLFFBQWdCLEVBQUUsY0FBOEIsRUFBRSxPQUFxQjtJQUMzRyxrQ0FBa0M7SUFDbEMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2hCLHFEQUFxRDtJQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUNyQixPQUFNO0tBQ1A7SUFDQyxNQUFNLEVBQUUsWUFBWSxFQUFFLEdBQUcsT0FBTyxDQUFBO0lBRWxDLG1CQUFtQjtJQUNuQixNQUFNLElBQUksR0FBRyxjQUFPLENBQUMsUUFB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