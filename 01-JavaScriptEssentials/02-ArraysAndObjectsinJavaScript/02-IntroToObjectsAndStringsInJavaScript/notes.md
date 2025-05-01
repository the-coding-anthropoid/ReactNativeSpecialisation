# Objects and Strings

## Classes & Objects

### Class
Preferred over [Function Constructor](#function-constructor)
```javascript
class ExampleClass  {
    constructor(prop1, prop2, ... propX) {
        this.prop1 = prop1;
        this.prop2 = prop2;
        // ...
        this.propX = propX;
    }

    exampleMethod() {
        // method code here
    }
}

const example = new Example("Value 1", "Value 2", ... "Value X");
```

### Object Literal
Create ad hoc object
```javascript
const example = {
    prop1: "value 1",
    prop2: "value 2",
    // ...
    propX: "value X",
    exampleMethod: function() {
        // method code here
    },
}
```

### Function Constructor
Old style, before keyword [Class](#class) was introduced.
```javascript
function Example(prop1, prop2, ... propX) {
    this.prop1 = prop1;
    this.prop2 = prop2;
    // ...
    this.propX = propX;
    this.exampleMethod = function() {
        // method code here
    }
}

const example = new Example("Value 1", "Value 2", ... "Value X");
```

## Accessing Object Properties

In JS object properties can be accessed using dot or bracket notation.

### Dot Notation

```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

console.log(person.firstName);  // Output: "John"
console.log(person.lastName);   // Output: "Doe"
console.log(person.age);        // Output: 30
```

### Bracket Notation
Especially useful when a property name has special characters or spaces or when accessing properties dynamically.
```javascript
const person = {
    "first name": "John",
    "last name": "Doe",
    age: 30,
};

// with spaces
console.log(person["first name"]);  // Output: "John"
console.log(person["last name"]);   // Output: "Doe"
// dynamically
const propertyName = "age";
console.log(person[propertyName]);  // Output: 30
```

> [NOTE]
> Object Literals look like they are the same as maps.

## Arrays of Objects

Placing objects in an array allows the usual suit of array methods to be called on the objects.

### Accessing Object Properties in an Array
```javascript
const students = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 28 },
];

console.log(students[0].name);      // output: "Alice"
console.log(students[1]["age"]);    // output: 22
```

You can nest both arrays and objects inside root objects.
