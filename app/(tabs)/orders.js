import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import { useOrders } from "../../src/viewmodels/useOrders";

export default function OrdersScreen() {
  const { orders, loading } = useOrders();

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#148F77" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis pedidos</Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={
          orders.length === 0 && styles.emptyContainer
        }
        ListEmptyComponent={
          <Text style={styles.empty}>
            No hay pedidos todavía
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.orderId}>
                Pedido #{item.id}
              </Text>

              <Text style={styles.status}>
                {item.status || "pendiente"}
              </Text>
            </View>

            <Text style={styles.date}>
              {new Date(item.date).toLocaleString()}
            </Text>

            <View style={styles.divider} />

            <Text style={styles.itemsLabel}>
              Items: {item.items?.length || 0}
            </Text>

            <Text style={styles.total}>
              Total: S/ {Number(item.total || 0).toFixed(2)}
            </Text>

            <Text style={styles.address}>
              {item.address}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#1A5276",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },

  empty: {
    textAlign: "center",
    color: "#888",
    fontSize: 16,
  },

  card: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 14,
    marginBottom: 12,
    elevation: 2,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  orderId: {
    fontSize: 16,
    fontWeight: "bold",
  },

  status: {
    fontSize: 12,
    color: "#fff",
    backgroundColor: "#148F77",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    overflow: "hidden",
  },

  date: {
    marginTop: 4,
    color: "#666",
    fontSize: 12,
  },

  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 10,
  },

  itemsLabel: {
    fontSize: 14,
    color: "#333",
  },

  total: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: "bold",
    color: "#148F77",
  },

  address: {
    marginTop: 6,
    fontSize: 12,
    color: "#666",
  },
});
