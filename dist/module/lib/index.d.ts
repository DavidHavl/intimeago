/**
 * @author     David Havl <info@davidhavl.com>
 * @link:      https://github.com/DavidHavl/intimeago
 * @license    MIT
 */
import { LocaleName, SetupOptions, TDatetime } from './interface';
export declare const DATETIME_ATTRIBUTE_NAME = "data-datetime";
export declare const UPDATE_EVENT_NAME = "intimeago-update";
/**
 * Remove from dom element
 * @param node - the node to remove the functionality from
 */
export declare function remove(node?: HTMLElement): void;
/**
 * Setup dom element/s
 * @param elements
 * @param locale
 * @param options
 */
export declare function setup(elements: HTMLElement | HTMLElement[] | NodeList, locale?: LocaleName, options?: SetupOptions): HTMLElement[];
/**
 * Format the difference into string
 * @param date
 * @param locale
 * @param options
 */
export declare const format: (date: TDatetime, locale?: string | undefined, options?: SetupOptions | undefined) => string;
