# Arrays

## Common Array Methods

|Method | Description |
|:-|:-|
| `arr.push(item1, ... itemX)` | add a new item or items to the end of the array |
| `arr.pop()` | removes and returns the last element of the array |
| `arr.shift()` | removes and returns the first element of the array |
| `arr.unshift(item1, ... itemX)` | add a new item or items to the beginning of the array |
| `arr.splice(index, count, item1, ... itemX)` | adds and/or removes items starting at index optionally remove count and insert items |
| `arr1.concat(arr2)` | join two arrays |
| `arr.slice(start, end)` | returns elements from start to end (exclusive) without modifying original array |
| `arr.indexOf(item, start)` | returns the first index of the specified item or -1 if the value is not found; optionally start provides value other than 0 to begin search. |
| `arr.reverse()` | reverses the order of the array in place |
| `arr.sort()` | sorts the elements of the array in alphabetical ascending order |

## Array Methods with Function Parameters

|Method | Description |
|:-|:-|
| `arr.forEach((item) => {`</br>&nbsp;&nbsp;`function();`<br/>`});` | iterates through the array and applies the provided function to each element |
| `arr.map((item) => {`</br>&nbsp;&nbsp;`function();`<br/>`});` | returns a new array by applying the provided function to each element |
| `arr.filter((item) =>`</br>&nbsp;&nbsp;`boolean conditional);` | creates a new array that contains only elements that pass specific conditions |
| `arr.reduce((accumulator, item) =>`</br>&nbsp;&nbsp;`operation, initialValue);` | reduces array to a single value by applying a function to each element|
| `arr.find((item) =>`</br>&nbsp;&nbsp;`boolean conditional);` | returns the first element that satisfies a specified condition |

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
