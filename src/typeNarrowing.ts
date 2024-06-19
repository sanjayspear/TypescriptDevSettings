function processUserInput(userInput: unknown): void {
    if (typeof userInput === "string") {
      // Handle string type (e.g., username)
      console.log("Username:", userInput);
    } else if (typeof userInput === "number") {
      // Handle number type (e.g., quantity)
      console.log("Quantity:", userInput);
    } else {
      // Handle unexpected type (e.g., error message)
      console.error("Unexpected input type:", userInput);
    }
  }
  
  // User input examples (replace with actual form submission logic)
  const username = "John Doe";
  const quantity = 2;
  const invalidInput = true; // Unexpected type
  
  processUserInput(username); // Outputs: Username: John Doe
  processUserInput(quantity); // Outputs: Quantity: 2
  processUserInput(invalidInput); // Outputs: Unexpected input type: true
  