// Define the generic function with constraints
function formatInput<T extends { toString(): string }>(input: T): string {
    // Use type assertion to treat the input as a string
    const stringInput: string = input.toString();
    // Format the input and return it
    return `Formatted Input: ${stringInput}`;
}

// Test cases
const num = 123; // number
const obj = { toString: () => "Custom Object String" }; // object with toString method
const date = new Date(); // Date object

console.log(formatInput(num)); // Output: Formatted Input: 123
console.log(formatInput(obj)); // Output: Formatted Input: Custom Object String
console.log(formatInput(date)); // Output: Formatted Input: <current date and time string>

// Uncommenting the following line would result in a TypeScript error:
// console.log(formatInput(true)); // Error: boolean does not have a toString method
