import { useState, useCallback } from "react";
import { useFocusEffect } from "expo-router";
import ApiService from "../services/apiService";

export function useOrders() {
  const [orders, setOrders] = useState([]);

  const load = useCallback(async () => {
    const data = await ApiService.getOrders();
    setOrders(data);
  }, []);

  useFocusEffect(
    useCallback(() => {
      load();
    }, [load])
  );

  return {
    orders,
    refresh: load,
  };
}
