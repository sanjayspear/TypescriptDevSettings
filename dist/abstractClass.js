"use strict";
class Animal {
    move() {
        console.log("The animal moves.");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof! Woof!");
    }
    move() {
        console.log("The dog runs.");
    }
}
const myDog = new Dog();
myDog.makeSound();
myDog.move();
