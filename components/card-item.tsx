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
      onPress={() => onSelect(item.id)}
      style={{
        borderWidth: 1,
        borderColor: active ? '#1677ff' : '#ddd',
        backgroundColor: active ? '#eaf3ff' : '#fff',
        borderRadius: 10,
        padding: 12,
        marginBottom: 10
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
      <Text style={{ marginTop: 4, color: '#666' }}>{item.desc}</Text>
    </Pressable>
  )
}
