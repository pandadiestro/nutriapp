import React from "react";

import {
    View,
    Text,
    FlatList,
    Button,
    TouchableOpacity,
    Image,
} from "react-native";

import {
    useProducts,
} from "../../src/viewmodels/useProducts";

import {
    useCart,
} from "../../src/viewmodels/useCart";

export default function HomeScreen() {
    const {
        products,
    } = useProducts();

    const {
        addItem,
    } = useCart();

    return (
        <View
            style={{
                flex: 1,
                padding: 16,
            }}
        >
            <Text
                style={{
                    fontSize: 24,
                    marginBottom: 20,
                }}
            >
                 NaturApp
            </Text>

            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View
                        style={{
                            backgroundColor: "#fff",
                            borderRadius: 14,
                            padding: 12,
                            marginBottom: 12,
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
                            elevation: 2,
                        }}
                    >
                        <Image
                            source={{ uri: item.image }}
                            style={{
                                width: "100%",
                                height: 180,
                                borderRadius: 10,
                            }}
                        />

                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "bold",
                                marginTop: 10,
                            }}
                        >
                            {item.name}
                        </Text>

                        <Text
                            style={{
                                color: "#666",
                                marginTop: 4,
                            }}
                        >
                            {item.description}
                        </Text>

                        <Text
                            style={{
                                fontSize: 20,
                                color: "#148F77",
                                fontWeight: "bold",
                                marginTop: 8,
                            }}
                        >
                             S/ {item.price}
                        </Text>

                        <TouchableOpacity
                            onPress={() => addItem(item)}
                            style={{
                                backgroundColor: "#148F77",
                                padding: 12,
                                borderRadius: 10,
                                marginTop: 10,
                            }}
                        >
                            <Text
                                style={{
                                    color: "#fff",
                                    textAlign: "center",
                                }}
                            >
                                 Agregar al carrito
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}
