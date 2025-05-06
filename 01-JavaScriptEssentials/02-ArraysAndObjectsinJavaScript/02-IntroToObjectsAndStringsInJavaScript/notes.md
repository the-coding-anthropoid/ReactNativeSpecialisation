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

> [!NOTE]
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

## Strings and String Manipulation

Literal strings can be eclosed in either single or double quotes. However, backticks are required for string interpolation;

```javascript
const message = "These two strings are the same.";
const repeat = 'These two strings are the same.';
const method = "interpolation";
const interpolated = `this string uses ${method}.`;
```

- Use the '+' operator to concatenate two strings.
    ```javascript
    const firstName = "John";
    const lastName = "Doe";
    const fullName = firstName + " " + lastName;        // returns: "John Doe"
    ```
- Use bracket notation with zero-based indexing to access individual characters

    ```javascript
    const text = "JavaScript";
    const firstCharacter = text[0];     // returns: 'J'
    ```
- Strings have built in methods such as:
    ```javascript
    const text = "Hello, World!";
    const lowerCaseText = text.toLowerCase();       // returns: "hello, world!"

    const upperCaseText = text.toUpperCase();       // returns: "HELLO, WORLD!"

    const hasFox = text.includes("fox");        // returns: false

    const indexOfWorld = text.indexOf("World");     // returns: 7

    const subText1 = text.substring(0,5);       // returns: "Hello"
    // substring(0,5) extracts from index 0, inclusive to index 5, exclusive

    const subText2 = text.slice(7);     // returns: "World!"
    // slice(7) starts at index 7 and runs till the end of the string

    const subText3 = text.substr(7, 5)      // returns: "World"
    // substr(7, 5) starts at index 7 and extracts 5 total characters

    const updatedText = text.replace("World", "Universe");  // returns: "Hello, Universe"

    const splitText = text.split(',');      // returns: ["Hello",  " World!"]
    // split(',') uses the comma character as a delimiter

    const trimmedText = splitText[1].trim();        // returns: "World!"
    ```

## Math and Date Objects

### Math object

| Math object method | Description |
| :- | :- |
| `Math.round(number)` | returns number rounded to nearest integer |
| `Math.ceil(number)` | returns number rounded up to integer value |
| `Math.floor(number)` | returns number rounded down to integer value |
| `Math.pow(base, exponent)` | returns base to the power exponent |
| `Math.sqrt(base)` | returns the square root of base |
| `Math.log(base)` | returns the natural log of base |
| `Math.random()` | generates a random number between 0 and 1 |

### Date Object

```javascript
/* == Create DateTime Object == */

const currentDate = new Date();     // current date and time
const specificDate = new Date(2023, 0, 15);     // January 15, 2023
const fromMilliseconds = new Date (1672569600000);      // from milliseconds since the epoch
// the epoch started: Thursday, 1 January 1970 00:00:00 GMT
// 1672569600000ms from the epoch is: Sunday, 1 January 2023 10:40:00 GMT


/* == Access DateTime Properties == */

const year = currentDate.getFullYear();        // year of currentDate creation
const mont = currentDate.getMonth();       // month (0-11) of currentDate creation
const day = currentDate.getDate();      // day of the month (1-31) of currentDate creation
const hours = currentDate.getHours();       // hour (0-23) of currentDate creation
const minutes = currentDate.getMinutes();       // minute (0-59) of currentDate creation
const seconds = currentDate.getSeconds();       // seconds (0-59) of currentDate creation


/* == Formatting Dates == */

const formattedDate = specificDate.toDateString();      // e.g. "Sun Jan 15 2023"
const formattedTime = specificDate.toTimeString();      // e.g. "00:00:00 GMT+0000 (Greenwich Mean Time)"
const formattedDate = specificDate.toLocaleDateString();        // e.g. "15/01/2023"
const formattedTime = specificDate.toLocaleTimeString();        // e.g. "00:00:00"


/* == Date Arithmetic == */

specificDate.setFullYear(2024);     // set the year to 2024
specificDate.setDate(specificDate.getDate() - 7);       // set specificDate 7 days in the past
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 30);      // set date 30 days from now
```

### Timing Functions

To schedule execution after a specified delay:

```javascript
setTimeout(function() {
    console.log("This message appears after a delay.");
}, 2000);   // displayed after a 2-second delay
```
to schedule repeated execution at specified times:

```javascript
let count = 0;
const intervalId = setInterval(function() {
    console.log("Count: " + count);
    cont++;
    if (count > 5) {
        clearInterval(intervalId);  // stops the function
    }

}, 1000);   // repeats every second
```

