import type { CurrencyKey } from '@/constants/symbolCurrency'

export interface Guarantee {
  start: string
  end: string
}

export interface IPrice {
  value: number
  symbol: CurrencyKey
  isDefault: 0 | 1
}

export interface IProduct {
  id: number
  inRepair: boolean
  serialNumber: number
  isNew: 1
  photo: string
  title: string
  type: string
  name: string
  user?: string
  specification: string
  guarantee: Guarantee
  price: IPrice[]
  order: number
  date: string
  longDescription?: string
}
