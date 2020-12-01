/**
 * @author     David Havl <info@davidhavl.com>
 * @link:      https://github.com/DavidHavl/intimeago
 * @license    MIT
 */
import { LocaleName, SetupOptions, TDatetime } from './interface';
export declare const DATETIME_ATTRIBUTE_NAME = "data-intimeago-datetime";
export declare const PREPEND_TEXT_ATTRIBUTE_NAME = "data-intimeago-prepend-text";
export declare const REMOVE_ON_ZERO_ATTRIBUTE_NAME = "data-intimeago-remove-on-zero";
export declare const UPDATE_EVENT_NAME = "intimeago-update";
/**
 * Remove from one or more elements
 * @param nodes - the node/s to remove the functionality from
 */
export declare function remove(nodes: HTMLElement | HTMLElement[] | Node | NodeList): void;
/**
 * Setup dom element/s
 * @param nodes {HTMLElement | HTMLElement[] | NodeList}
 * @param locale {LocaleName}
 * @param options
 */
export declare function setup(nodes: HTMLElement | HTMLElement[] | NodeList, locale?: LocaleName, options?: SetupOptions): HTMLElement[];
/**
 * Format the difference into string
 * @param date
 * @param locale
 * @param options
 */
export declare function format(date: TDatetime, locale?: LocaleName, options?: SetupOptions): string;
