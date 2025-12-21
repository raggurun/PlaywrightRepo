let emp = "Raghu";
console.log(emp);
emp = "Raman"
console.log(emp);
const pi = 3.14;
console.log(pi);
// pi = 3.1415; // This will cause an error because 'pi' is a constant
console.log("Value of pi remains constant:", pi);

// Function to demonstrate type annotations
function greet(name: string): void {
    console.log("Hello, " + name + "!");
}
greet(emp);
// greet(42); // This will cause an error because the argument is not a string

// function with return type
function add(a: number, b: number): number {
    return a + b;
}
console.log("Sum:", add(5, 10));

// union types
let mixed: string | number;
mixed = "Hello";
console.log("Mixed as string:", mixed);
mixed = 42;
console.log("Mixed as number:", mixed);
// mixed = true; // This will cause an error because 'mixed' can only be string or number


