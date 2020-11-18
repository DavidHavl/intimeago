import * as localeFunctions from '../lang'

export type LocaleFunction = (diff: number, idx: number) => [string, string];

export type LocaleMap = Record<string, LocaleFunction>;

export type LocaleName = keyof typeof localeFunctions;

export type TDatetime = Date | string | number;

export type TimerPool = Record<number, number>;

export interface SetupOptions {
  /** the relative date to count from */
  readonly relativeDate?: TDatetime;
}
