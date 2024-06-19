"use strict";
class Shirt {
    constructor(id, name, price, size) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.size = size;
    }
    getDetails() {
        return `Product Details: ID: ${this.id}, Name: ${this.name}, Price: $${this.price.toFixed(2)}, Size: ${this.size}`;
    }
}
const shirt1 = new Shirt(123, "T-Shirt", 19.99, "M");
console.log(shirt1.getDetails());
