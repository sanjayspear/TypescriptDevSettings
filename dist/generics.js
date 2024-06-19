"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
identityOne(true);
function identityTwo(val) {
    return val;
}
identityTwo("Pratap");
function identityThree(val) {
    return val;
}
identityThree("Sanjay");
function identityFour(val) {
    return val;
}
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
const getSearchProductss = (products) => {
    const myIndex = 3;
    return products[myIndex];
};
function anotherFunction(valueOne, valueTwo) {
    return {
        valueOne,
        valueTwo
    };
}
const result = anotherFunction("Brevarages", { brand: "Pepsi", type: 4222 });
const bottle = identityFour({ brand: "Pepsi", type: 4325 });
