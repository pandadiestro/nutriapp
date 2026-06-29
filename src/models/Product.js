export class Product {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.price = data.price;
    this.image = data.image;
    this.category = data.category;
    this.stock = data.stock;
    this.rating = data.rating || 0;
    this.benefits = data.benefits || [];
  }

  static fromJSON(json) {
    return new Product(json);
  }

  isAvailable() {
    return this.stock > 0;
  }

  getFormattedPrice() {
    return `S/ ${this.price.toFixed(2)}`;
  }
}
