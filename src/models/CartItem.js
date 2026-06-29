export class CartItem {
  constructor(data) {
    this.id = data.id;
    this.productId = data.productId;
    this.name = data.name;
    this.price = data.price;
    this.image = data.image;
    this.quantity = data.quantity || 1;
  }

  static fromRow(row) {
    return new CartItem({
      id: row.id,
      productId: row.product_id,
      name: row.name,
      price: row.price,
      image: row.image,
      quantity: row.quantity,
    });
  }

  getSubtotal() {
    return this.price * this.quantity;
  }
}
