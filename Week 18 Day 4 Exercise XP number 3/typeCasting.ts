// Step 1: Create a variable of type any
let someValue: any = 12345; // It can be any type, for example, a number

// Step 2: Cast it to a string
let stringValue: string = someValue as string; // Using type assertion (casting)

// Step 3: Use it as a string
console.log(stringValue.toUpperCase()); // Converts the string to uppercase

// Optional: To demonstrate that it is indeed treated as a string
console.log(`The length of the string is: ${stringValue.length}`);
