import type { Item } from '@/types/item'

export function filterItems(list: Item[], keyword: string) {
  const q = keyword.trim().toLowerCase()
  if (!q) return list
  return list.filter(
    (item) =>
      item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)
  )
}
