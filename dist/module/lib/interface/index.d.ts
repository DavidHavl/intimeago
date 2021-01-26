import * as localeFunctions from '../lang';
export declare type LocaleFunction = (diff: number, idx: number) => [string, string];
export declare type LocaleMap = Record<string, LocaleFunction>;
export declare type LocaleName = keyof typeof localeFunctions;
export declare type TDatetime = Date | string | number;
export declare type TimerPool = Record<number, number>;
export interface SetupOptions {
    /** the relative datetime to count from */
    readonly relativeDateTime?: TDatetime;
}
