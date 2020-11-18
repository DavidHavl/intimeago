import { LocaleFunction, LocaleName } from '../interface';
/**
 * Import a locale by name
 * @param locale
 */
export declare const importLocale: (locale: LocaleName) => void;
/**
 * Check if given locale is imported
 * @param locale
 * @returns {*}
 */
export declare const isLocaleImported: (locale: string) => boolean;
/**
 * Get a locale, default is en_US
 * @param locale
 * @returns {*}
 */
export declare const getLocale: (locale?: string | undefined) => LocaleFunction;
