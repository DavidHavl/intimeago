import { LocaleFunction, LocaleMap, LocaleName } from '../interface'
import * as localeFunctions from '../lang'

/**
 * All supported locales
 */
const Locales: LocaleMap = {}

/**
 * Import a locale by name
 * @param locale
 */
export const importLocale = (locale: LocaleName) => {
  Locales[locale] = localeFunctions[locale]
}

/**
 * Check if given locale is imported
 * @param locale
 * @returns {*}
 */
export const isLocaleImported = (locale: string): boolean => {
  return !!Locales[locale]
}

/**
 * Get a locale, default is en_US
 * @param locale
 * @returns {*}
 */
export const getLocale = (locale?: string): LocaleFunction => {
  return locale && Locales[locale] ? Locales[locale] : Locales['en_US']
}
