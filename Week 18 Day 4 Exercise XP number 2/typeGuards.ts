// Define the describeValue function
function describeValue(value: number | string): string {
    // Type guard for number
    if (typeof value === 'number') {
        return "This is a number";
    }
    // Type guard for string
    else if (typeof value === 'string') {
        return "This is a string";
    }
    // Fallback case (not strictly necessary if types are well-defined)
    else {
        return "Unknown type";
    }
}

// Example usage
console.log(describeValue(42)); // Output: This is a number
console.log(describeValue("Hello")); // Output: This is a string
