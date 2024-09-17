// Define a generic function with a constraint
function logLength<T extends { length: number }>(item: T): void {
    // Log the length property of the item
    console.log(item.length);
}

// Test cases
logLength("Hello, World!"); // Output: 13 (length of the string)
logLength([1, 2, 3, 4, 5]); // Output: 5 (length of the array)
logLength({ length: 10 }); // Output: 10 (object with length property)

// Uncommenting the following line would result in a TypeScript error:
// logLength(123); // Error: number does not have a length property
