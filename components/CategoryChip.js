import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";

export default function CategoryChip({
  label,
  active,
  onPress
}) {
  return (
    <TouchableOpacity
      style={[
        styles.chip,
        active && styles.active,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          active && styles.activeText,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#DDD",
    marginRight: 8,
  },

  active: {
    backgroundColor: "#148F77",
  },

  text: {
    color: "#333",
  },

  activeText: {
    color: "#FFF",
  },
});
