import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "@naturapp_cart";

async function load() {
    const raw = await AsyncStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
}

async function save(cart) {
    await AsyncStorage.setItem(KEY, JSON.stringify(cart));
}

const DatabaseService = {
    async init() {},

    async addToCart(product) {
        const cart = await load();

        const existing = cart.find(
            x => x.product_id === product.id
        );

        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({
                id: Date.now(),
                product_id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                quantity: 1,
            });
        }

        await save(cart);
    },

    async getCartItems() {
        return await load();
    },

    async updateCartQuantity(productId, quantity) {
        const cart = await load();

        const item = cart.find(
            x => x.product_id === productId
        );

        if (!item) return;

        item.quantity = quantity;

        const filtered = cart.filter(
            x => x.quantity > 0
        );

        await save(filtered);
    },

    async removeFromCart(productId) {
        const cart = await load();

        await save(
            cart.filter(
                x => x.product_id !== productId
            )
        );
    },

    async clearCart() {
        await save([]);
    },

    async getCartTotal() {
        const cart = await load();

        return cart.reduce(
            (acc, x) =>
                acc + x.price * x.quantity,
            0
        );
    },

    async getCartCount() {
        const cart = await load();

        return cart.reduce(
            (acc, x) => acc + x.quantity,
            0
        );
    },
};

export default DatabaseService;
