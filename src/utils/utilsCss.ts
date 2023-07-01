import { twMerge } from 'tailwind-merge'

export const concatClass = (...tokens: string[]): string => twMerge(...tokens)
export const importantClass = (tokens?: string): string =>
  tokens?.split(' ').join(' !') ?? ''
