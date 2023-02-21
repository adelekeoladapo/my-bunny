export interface StringTMap<T> {
  [key: string]: T;
}
export interface NumberTMap<T> {
  [key: number]: T;
}

export type StringStringMap = StringTMap<string>;
export type NumberStringMap = NumberTMap<string>;

export type StringNumberMap = StringTMap<number>;
export type NumberNumberMap = NumberTMap<number>;

export type StringBooleanMap = StringTMap<boolean>;
export type NumberBooleanMap = NumberTMap<boolean>;
