import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function setCurrency({ quantity, language = 'en-US', currency = 'USD' }: { quantity: number; language?: string; currency?: string }) {
  return quantity.toLocaleString(language, { style: 'currency', currency })
}
