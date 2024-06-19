    "use strict";
function processUserInput(userInput) {
    if (typeof userInput === "string") {
        console.log("Username:", userInput);
    }
    else if (typeof userInput === "number") {
        console.log("Quantity:", userInput);
    }
    else {
        console.error("Unexpected input type:", userInput);
    }
}
const username = "John Doe";
const quantity = 2;
const invalidInput = true;
processUserInput(username);
processUserInput(quantity);
processUserInput(invalidInput);
