export class Order {
  constructor(data) {
    Object.assign(this, data);
  }

  static fromJSON(json) {
    return new Order(json);
  }
}
