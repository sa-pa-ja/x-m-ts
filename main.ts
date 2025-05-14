type Person = {
  name: string;
  age: number;
  nationality: string;
};

const person: Person = {
  name: "Lucy",
  age: 30,
  nationality: "Peruvian",
};

console.log(person.age);
console.log(person.nationality);

// Primitive types

let isDone: boolean = false;
let count: number = 30;
let girlfriend: string = "Lucy";

// Arrays
let list: number[] = [1, 2, 3, 4, 5, 6, 7];

// Tuples

let tuple: [string, number] = ["lucy", 400];

// Enums

enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = "Maybe a string instead";

// void
function warnUser(): void {
  console.log("This is a warning");
}

// Never
function error(message: string): never {
  throw new Error(message);
}

// Functions

// Basic function

function add(x: number, y: number): number {
  return x + y;
}

console.log(add(50, 600));

// Optional parameters

function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return `${firstName} ${lastName}`;
  } else {
    return firstName;
  }
}
console.log(buildName("Lucy", "princess"));

// Default parameters

function buildName02(firstName: string, lastName: string = "Smith"): string {
  return `${firstName} ${lastName}`;
}

console.log(buildName02("Lucy"));

// Rest parameters

function buildName03(firstName: string, ...restOfName: string[]): string {
  return firstName + " " + restOfName.join(" ");
}

console.log(buildName03("Lucy", "Carmen", "Linda", "Jennifer", "Conee"));

// Interfaces

interface User {
  firstName: string;
  lastName: string;
  age?: number; //optional property
  readonly ssn: string; //readonly property
}

function greet(person: User) {
    return "Hello "  + " " + person.age + " " + person.firstName;
}


// Interface for functions types

interface SearchFunc {
    (source: string, subString: string): boolean;
}


let mySearch: SearchFunc = function(src, sub) {
    return src.search(sub) > -1;
}





