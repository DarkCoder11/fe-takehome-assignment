import { ReactNode } from 'react'

export type ListProps<Item> = {
  items: Item[]
  className?: string
  render: (item: Item, index: number) => ReactNode
}
