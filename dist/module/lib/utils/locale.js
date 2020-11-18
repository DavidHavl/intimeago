import * as localeFunctions from '../lang';
/**
 * All supported locales
 */
const Locales = {};
/**
 * Import a locale by name
 * @param locale
 */
export const importLocale = (locale) => {
    Locales[locale] = localeFunctions[locale];
};
/**
 * Check if given locale is imported
 * @param locale
 * @returns {*}
 */
export const isLocaleImported = (locale) => {
    return !!Locales[locale];
};
/**
 * Get a locale, default is en_US
 * @param locale
 * @returns {*}
 */
export const getLocale = (locale) => {
    return locale && Locales[locale] ? Locales[locale] : Locales['en_US'];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi91dGlscy9sb2NhbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxLQUFLLGVBQWUsTUFBTSxTQUFTLENBQUE7QUFFMUM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sR0FBYyxFQUFFLENBQUE7QUFFN0I7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLENBQUMsTUFBa0IsRUFBRSxFQUFFO0lBQ2pELE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDM0MsQ0FBQyxDQUFBO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLENBQUMsTUFBYyxFQUFXLEVBQUU7SUFDMUQsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQzFCLENBQUMsQ0FBQTtBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxNQUFlLEVBQWtCLEVBQUU7SUFDM0QsT0FBTyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUN2RSxDQUFDLENBQUEifQ==