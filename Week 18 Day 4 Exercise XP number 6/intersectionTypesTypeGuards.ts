// Define the Person type
type Person = {
    name: string;
    age: number;
};

// Define the Job type
type Job = {
    position: string;
    department: string;
};

// Define the Employee type as an intersection of Person and Job
type Employee = Person & Job;

// Define the function to describe an Employee
function describeEmployee(employee: Employee): string {
    // Use type guards to check the position and return the description
    if (employee.position === 'Manager') {
        return `${employee.name} is a Manager in the ${employee.department} department.`;
    } else if (employee.position === 'Developer') {
        return `${employee.name} is a Developer in the ${employee.department} department.`;
    } else {
        return `${employee.name} has a position of ${employee.position} in the ${employee.department} department.`;
    }
}

// Test cases
const emp1: Employee = {
    name: 'Alice',
    age: 30,
    position: 'Manager',
    department: 'Sales'
};

const emp2: Employee = {
    name: 'Bob',
    age: 25,
    position: 'Developer',
    department: 'Engineering'
};

const emp3: Employee = {
    name: 'Charlie',
    age: 40,
    position: 'Analyst',
    department: 'Finance'
};

// Log the descriptions
console.log(describeEmployee(emp1)); // Output: Alice is a Manager in the Sales department.
console.log(describeEmployee(emp2)); // Output: Bob is a Developer in the Engineering department.
console.log(describeEmployee(emp3)); // Output: Charlie has a position of Analyst in the Finance department.
