import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function CartItemRow({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  return (
    <View style={styles.row}>
      <View>
        <Text>{item.name}</Text>
        <Text>S/ {item.price}</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          onPress={onDecrease}
        >
          <Text>-</Text>
        </TouchableOpacity>

        <Text>{item.quantity}</Text>

        <TouchableOpacity
          onPress={onIncrease}
        >
          <Text>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onRemove}
        >
          <Text>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: "#FFF",
    marginBottom: 10,
    padding: 12,
    borderRadius: 8,
  },

  actions: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
});
