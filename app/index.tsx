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
    <View
      style={{
        flex: 1,
        padding: 16
      }}
    >
      <View style={{ height: 28, justifyContent: 'center' }}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: 20,
            fontWeight: '600',
            lineHeight: 24,
            includeFontPadding: false,
            textAlignVertical: 'center'
          }}
        >
          Selected: {selectedName}
        </Text>
      </View>

      <TextInput
        value={keyword}
        onChangeText={setKeyword}
        placeholder="请输入关键词"
        style={{
          marginTop: 12,
          width: '100%',
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          paddingHorizontal: 12,
          paddingVertical: 10
        }}
      />

      <FlatList
        style={{ marginTop: 16 }}
        data={filtered}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={{ color: '#666', textAlign: 'center', marginTop: 20 }}>
            没有匹配数据
          </Text>
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
