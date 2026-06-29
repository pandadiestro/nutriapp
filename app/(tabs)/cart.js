import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

import { useCart } from "../../src/viewmodels/useCart";

export default function Cart() {
  const {
    items,
    total,
    checkout,
    updateQuantity,
  } = useCart();

  const [address, setAddress] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito</Text>

      <FlatList
        data={items}
        keyExtractor={(x) =>
          x.productId?.toString() || x.id.toString()
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />

            <View style={{ flex: 1 }}>
              <Text style={styles.name}>
                {item.name}
              </Text>

              <Text>S/ {item.price}</Text>

              <View style={styles.qtyRow}>
                <TouchableOpacity
                  onPress={() =>
                    updateQuantity(
                      item.product_id,
                      item.quantity - 1
                    )
                  }
                  style={styles.btn}
                >
                  <Text style={styles.btnText}>
                    −
                  </Text>
                </TouchableOpacity>

                <Text style={styles.qty}>
                  {item.quantity}
                </Text>

                <TouchableOpacity
                  onPress={() =>
                    updateQuantity(
                      item.product_id,
                      item.quantity + 1
                    )
                  }
                  style={styles.btn}
                >
                  <Text style={styles.btnText}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

      <Text style={styles.total}>
        Total: S/ {total}
      </Text>

      <TextInput
        placeholder="Dirección"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.checkout}
        onPress={async () => {
          await checkout(address);
          alert("Pedido creado");
        }}
      >
        <Text style={styles.checkoutText}>
          Comprar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: "center",
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },

  name: {
    fontWeight: "bold",
  },

  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  btn: {
    backgroundColor: "#148F77",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },

  btnText: {
    color: "#fff",
    fontSize: 16,
  },

  qty: {
    marginHorizontal: 10,
    fontSize: 16,
  },

  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },

  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },

  checkout: {
    backgroundColor: "#148F77",
    padding: 14,
    borderRadius: 10,
  },

  checkoutText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
