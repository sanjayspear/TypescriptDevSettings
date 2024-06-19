// Define an abstract class
abstract class Animal {
    // Abstract method (must be implemented by subclasses)
    abstract makeSound(): void;

    // Concrete method
    move(): void {
        console.log("The animal moves.");
    }
}
// Define a subclass that extends the abstract class
class Dog extends Animal {
    // Implement the abstract method
    makeSound(): void {
        console.log("Woof! Woof!");
    }

    // Override the concrete method
    move(): void {
        console.log("The dog runs.");
    }
}

// Create an instance of the subclass
const myDog = new Dog();
myDog.makeSound(); // Output: Woof! Woof!
myDog.move();      // Output: The dog runs.

// Uncommenting the following line would cause a compile-time error
// because you cannot instantiate an abstract class.
// const animal = new Animal();
