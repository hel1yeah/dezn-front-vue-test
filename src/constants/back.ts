import type { IProduct } from '@/types/IProducts'

const orders = [
  {
    id: 1,
    title: 'Order 1',
    date: '2017-06-29 12:10:33',
    description: 'desc',
  },
  {
    id: 2,
    title: 'Order 2',
    date: '2017-06-29 12:25:33',
    description: 'desc',
  },
  {
    id: 3,
    title: 'Order 3',
    date: '2017-06-29 12:56:33',
    description: 'desc',
  },
]

export const products: IProduct[] = [
  {
    id: 1,
    inRepair: true,
    name: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3 (Socket 1366) 6',
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    longDescription:
      'lorem ipsum dolor sit amet, consectetur adip sapiscing elit lorem ipsum dolor sit amet, consectetur adip sapiscing elitlorem ipsum dolor sit amet, consectetur adip sapiscing elitlorem ipsum dolor sit amet, consectetur adip sapiscing elit',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 1,
    date: '2017-06-29 12:09:33',
  },
  {
    id: 2,
    inRepair: false,
    name: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3 (Socket 1366) 6',
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 1',
    type: 'Monitors',
    user: 'Chrystorozhdestvensky Alexander Alexander Alexander',
    specification: 'Specification 1',
    longDescription:
      'lorem ipsum dolor sit amet, consectetur adip sapiscing elit lorem ipsum dolor sit amet, consectetur adip sapiscing elitlorem ipsum dolor sit amet, consectetur adip sapiscing elitlorem ipsum dolor sit amet, consectetur adip sapiscing elit',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 2,
    date: '2017-06-29 12:09:33',
  },
  {
    id: 3,
    inRepair: true,
    name: 'MSI - X58-USB3 (Socket 1366) 6 X58-USB3 (Socket 1366) 6 X58 USB3 (Socket 1366) 6',
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 3',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 120, symbol: 'USD', isDefault: 0 },
      { value: 2700, symbol: 'UAH', isDefault: 1 },
    ],
    order: 3,
    date: '2017-06-29 12:09:33',
  },
]
