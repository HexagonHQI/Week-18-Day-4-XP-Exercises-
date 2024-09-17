// Define the Person type
type Person = {
    name: string;
    age: number;
};

// Define the Address type
type Address = {
    street: string;
    city: string;
};

// Define the intersection type PersonWithAddress
type PersonWithAddress = Person & Address;

// Create a variable of type PersonWithAddress
const personWithAddress: PersonWithAddress = {
    name: 'John Doe',
    age: 30,
    street: '123 Main St',
    city: 'Anytown'
};

// Log the variable to the console
console.log(personWithAddress);
