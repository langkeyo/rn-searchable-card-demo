import { FlatList, Text, TextInput, View } from 'react-native'
import { useMemo, useState } from 'react'
import { CardItem } from '@/components/card-item'
import { filterItems } from '@/utils/filter-items'
import { items } from '@/data/items'

export default function Index() {
  const [keyword, setKeyword] = useState('')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const filtered = useMemo(() => filterItems(items, keyword), [keyword])

  const selectedName =
    items.find((item) => item.id === selectedId)?.name ?? '无'

  return (
    <View className="flex-1 p-4">
      <View className="h-7 justify-center">
        <Text
          className="text-xl font-semibold leading-6 align-middle"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          Selected: {selectedName}
        </Text>
      </View>

      <TextInput
        className="mt-3 w-full border border-gray-300 rounded-lg px-3 py-2.5"
        value={keyword}
        onChangeText={setKeyword}
        placeholder="请输入关键词"
      />

      <FlatList
        className="mt-4"
        data={filtered}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text className="text-gray-400 text-center mt-5">没有匹配数据</Text>
        }
        renderItem={({ item }) => (
          <CardItem
            item={item}
            active={item.id === selectedId}
            onSelect={(id) =>
              setSelectedId((prev) => (prev === id ? null : id))
            }
          />
        )}
      />
    </View>
  )
}
