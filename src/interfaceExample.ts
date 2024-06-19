interface Product {
    id: number;
    name: string;
    price: number;
    // ... other product properties
    getDetails(): string; // Method to get product details
  }
  
  class Shirt implements Product { // Class implements the Product interface
    id: number;
    name: string;
    price: number;
    size: string; // Additional property specific to shirts
  
    constructor(id: number, name: string, price: number, size: string) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.size = size;
    }
  
    getDetails(): string {
      return `Product Details: ID: ${this.id}, Name: ${this.name}, Price: $${this.price.toFixed(2)}, Size: ${this.size}`;
    }
  }
  
  const shirt1 = new Shirt(123, "T-Shirt", 19.99, "M");
  console.log(shirt1.getDetails());
      