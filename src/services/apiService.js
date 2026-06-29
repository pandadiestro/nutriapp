import AsyncStorage from "@react-native-async-storage/async-storage";
import products from "../data/products";

const ORDERS_KEY = "@naturapp_orders";

async function loadOrders() {
  const raw = await AsyncStorage.getItem(ORDERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

async function saveOrders(orders) {
  await AsyncStorage.setItem(
    ORDERS_KEY,
    JSON.stringify(orders)
  );
}

const ApiService = {
  async getProducts(category = null) {
    if (!category) return products;

    return products.filter(
      p => p.category === category
    );
  },

  async searchProducts(query) {
    return products.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
  },

  async getProductById(id) {
    return products.find(p => p.id === id);
  },

  async createOrder(orderData) {
    const orders = await loadOrders();

    const newOrder = {
      id: Date.now(),
      ...orderData,
      status: "pendiente",
      date: new Date().toISOString(),
    };

    orders.unshift(newOrder);

    await saveOrders(orders);

    return newOrder;
  },

  async getOrders() {
    return await loadOrders();
  },

  async getOrderById(id) {
    const orders = await loadOrders();
    return orders.find(o => o.id == id);
  },
};

export default ApiService;
