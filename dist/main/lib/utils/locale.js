"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocale = exports.isLocaleImported = exports.importLocale = void 0;
const localeFunctions = __importStar(require("../lang"));
/**
 * All supported locales
 */
const Locales = {};
/**
 * Import a locale by name
 * @param locale
 */
exports.importLocale = (locale) => {
    Locales[locale] = localeFunctions[locale];
};
/**
 * Check if given locale is imported
 * @param locale
 * @returns {*}
 */
exports.isLocaleImported = (locale) => {
    return !!Locales[locale];
};
/**
 * Get a locale, default is en_US
 * @param locale
 * @returns {*}
 */
exports.getLocale = (locale) => {
    return locale && Locales[locale] ? Locales[locale] : Locales['en_US'];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi91dGlscy9sb2NhbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlEQUEwQztBQUUxQzs7R0FFRztBQUNILE1BQU0sT0FBTyxHQUFjLEVBQUUsQ0FBQTtBQUU3Qjs7O0dBR0c7QUFDVSxRQUFBLFlBQVksR0FBRyxDQUFDLE1BQWtCLEVBQUUsRUFBRTtJQUNqRCxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQzNDLENBQUMsQ0FBQTtBQUVEOzs7O0dBSUc7QUFDVSxRQUFBLGdCQUFnQixHQUFHLENBQUMsTUFBYyxFQUFXLEVBQUU7SUFDMUQsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQzFCLENBQUMsQ0FBQTtBQUVEOzs7O0dBSUc7QUFDVSxRQUFBLFNBQVMsR0FBRyxDQUFDLE1BQWUsRUFBa0IsRUFBRTtJQUMzRCxPQUFPLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ3ZFLENBQUMsQ0FBQSJ9