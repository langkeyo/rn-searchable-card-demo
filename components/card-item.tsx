import type { Item } from '@/types/item'
import { Pressable, Text } from 'react-native'

type Props = {
  item: Item
  active: boolean
  onSelect: (id: string) => void
}

export function CardItem({ item, active, onSelect }: Props) {
  return (
    <Pressable
      className={`border ${active ? 'border-blue-600 bg-blue-50' : 'border-gray-300 bg-white'} rounded-[10px] p-3 mb-2.5`}
      onPress={() => onSelect(item.id)}
    >
      <Text className="text-base font-bold">{item.name}</Text>
      <Text className="mt-1 text-gray-400">{item.desc}</Text>
    </Pressable>
  )
}
