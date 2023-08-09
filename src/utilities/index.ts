import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export * from './config';
export * from './http';
export * from './auth';
export * from './store';
export * from './config/mantine';

export const isDev = process.env.NODE_ENV === 'development';

export function ct(value: any) {
  const maps: { [index: string]: any } = { true: true, false: false, NaN: NaN, null: null, undefined, Infinity: Infinity, '-Infinity': -Infinity };
  return value in maps ? maps[value] : value;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
