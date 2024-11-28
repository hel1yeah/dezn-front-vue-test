export type CurrencyKey = 'USD' | 'UAH' | 'EUR' | 'GBP'

export const symbolObject: Record<CurrencyKey, string> = {
  USD: '$',
  UAH: '₴',
  EUR: '€',
  GBP: '£',
}
