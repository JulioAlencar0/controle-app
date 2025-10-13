import { useEffect, useRef } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Month } from "./Month";
import months from "./utils";

type Props = {
  selected: string;
  onChange: (category: string) => void;
};

export function MonthSelector({ selected, onChange }: Props) {
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const index = months.findIndex((m) => m.name === selected);
    if (index !== -1) {
      flatListRef.current?.scrollToIndex({ index, animated: true });
    }
  }, [selected]);

  return (
    <FlatList
      ref={flatListRef}
      data={months}
      keyExtractor={(item) => item.id}
      extraData={selected}
      renderItem={({ item }) => (
        <Month
          name={item.name}
          isSelected={item.name === selected}
          onPress={() => onChange(item.name)}
        />
      )}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
      getItemLayout={(data, index) => ({
        length: 70,              // largura do item Month (ajuste se necessário)
        offset: 70 * index,      // posição do item na lista
        index,
      })}
    />
  );
}

export const styles = StyleSheet.create({
  container: {
    height: 52,
    maxHeight: 52,
  },
  content: {
    gap: 16,
    paddingHorizontal: 24,
  },
});

export default MonthSelector;
