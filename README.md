# RN Searchable Card Demo

一个基于 React Native + Expo 的练习项目，实现了“搜索 + 列表” + 选中态。

## 功能说明

- 关键词搜索（按 `name` / `desc` 过滤）
- 卡片列表渲染（`FlatList`）
- 点击卡片选中，再次点击取消选中
- 空结果状态展示（没有匹配数据）

## 技术点

- `useState` 管理输入和选中状态
- `useMemo` 计算派生列表，避免重复过滤计算
- 组件拆分：`CardItem`、`filterItems`、`Item` 类型、`items` 数据源分离
- TypeScript 类型约束（`Item`）

## 项目结构

```text
app/
   index.tsx
components/
   card-item.tsx
types/
   item.ts
data/
   items.ts
utils/
   filter-items.ts
```

## 本地运行

```bash
pnpm install
pnpm expo run:android
pnpm expo start --dev-client
```

## 我在这个项目里学到了什么

- React 到 RN 的组件映射思路
- RN 中列表与交互状态的基本实现
- 派生状态与源状态的区别
- 代码按职责拆分，提升可维护性
