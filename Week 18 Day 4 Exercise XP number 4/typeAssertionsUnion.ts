// Define the function getFirstElement
function getFirstElement(arr: (number | string)[]): string {
    // Use type assertion to return the first element as a string
    return arr[0] as string;
}

// Test cases
console.log(getFirstElement(["hello", 42])); // Output: "hello"
console.log(getFirstElement([123, "world"])); // Output: "123"
console.log(getFirstElement(["foo", "bar"])); // Output: "foo"
console.log(getFirstElement([1, 2, 3])); // Output: "1"
