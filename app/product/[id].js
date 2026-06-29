import React,
{
  useEffect,
  useState,
} from "react";

import {
  View,
  Text,
  Image,
} from "react-native";

import {
  useLocalSearchParams,
} from "expo-router";

import ApiService
  from "../../src/services/apiService";

export default function ProductDetail() {
  const { id } =
    useLocalSearchParams();

  const [product,
    setProduct] =
    useState(null);

  useEffect(() => {
    ApiService
      .getProductById(id)
      .then(setProduct);
  }, [id]);

  if (!product)
    return <Text>Cargando...</Text>;

  return (
    <View style={{ padding: 16 }}>
      <Image
        source={{
          uri: product.image,
        }}
        style={{
          width: 250,
          height: 250,
        }}
      />

      <Text>
        {product.name}
      </Text>

      <Text>
        {product.description}
      </Text>

      <Text>
        S/ {product.price}
      </Text>
    </View>
  );
}
