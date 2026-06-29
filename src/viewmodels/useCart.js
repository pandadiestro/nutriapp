import { useState, useCallback } from "react";
import { useFocusEffect } from "expo-router";
import DatabaseService from "../services/databaseService";
import ApiService from "../services/apiService";

export function useCart() {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    const loadCart = useCallback(async () => {
        const data = await DatabaseService.getCartItems();

        setItems(data);

        setTotal(await DatabaseService.getCartTotal());
    }, []);

    useFocusEffect(
        useCallback(() => {
            loadCart();
        }, [loadCart])
    );

    return {
        items,
        total,

        addItem: async p => {
            await DatabaseService.addToCart(p);
            await loadCart();
        },

        removeItem: async id => {
            await DatabaseService.removeFromCart(id);
            await loadCart();
        },

        updateQuantity: async (id, q) => {
            await DatabaseService.updateCartQuantity(id, q);
            await loadCart();
        },

        checkout: async (address) => {
            const order = await ApiService.createOrder({
                items,
                total,
                address,
            });

            await DatabaseService.clearCart();
            await loadCart();

            return order;
        },
    };
}
