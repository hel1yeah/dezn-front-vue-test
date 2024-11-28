// here I would both import the configured axios and use it for
//  queries to configure the jwt language and etc.

import { products } from '@/constants/back'

function promiseProducts() {
  return new Promise<{ data: any }>((resolve) => {
    setTimeout(() => {
      resolve({
        data: products,
      })
    }, 1000)
  })
}

export async function getProducts<T>(): Promise<T[]> {
  const { data } = await promiseProducts()
  return data
}
