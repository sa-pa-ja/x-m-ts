var person = {
    name: "Lucy",
    age: 30,
    nationality: "Peruvian",
};
console.log(person.age);
console.log(person.nationality);
// Primitive types
var isDone = false;
var count = 30;
var girlfriend = "Lucy";
// Arrays
var list = [1, 2, 3, 4, 5, 6, 7];
// Tuples
var tuple = ["lucy", 400];
// Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// Any
var notSure = 4;
notSure = "Maybe a string instead";
// void
function warnUser() {
    console.log("This is a warning");
}
// Never
function error(message) {
    throw new Error(message);
}
// Functions
// Basic function
function add(x, y) {
    return x + y;
}
console.log(add(50, 600));
// Optional parameters
function buildName(firstName, lastName) {
    if (lastName) {
        return "".concat(firstName, " ").concat(lastName);
    }
    else {
        return firstName;
    }
}
console.log(buildName("Lucy", "princess"));
// Default parameters
function buildName02(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return "".concat(firstName, " ").concat(lastName);
}
console.log(buildName02("Lucy"));
// Rest parameters
function buildName03(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
console.log(buildName03("Lucy", "Carmen", "Linda", "Jennifer", "Conee"));
