import { twMerge } from "tailwind-merge";

export const concatClass = (...tokens: string[]): string => twMerge(...tokens);
