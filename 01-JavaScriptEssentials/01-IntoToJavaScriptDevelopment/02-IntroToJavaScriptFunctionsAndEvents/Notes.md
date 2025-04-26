# Functions and Events

## Functions and Types of Functions

In JavaScript, a function is a reusable block of code that can be defined and executed as many times as needed.
Functions are a fundamental part of the language and are used to encapsulate and organize code
into manageable, reusable units.

To declaring a function use the function keyword followed by a name, enclosed parentheses, and the functions code enclosed in curly braces:

```javascript
function sayHello() {
    console.log("Hello");
}
```
Call a function by using its name, followed by parentheses.

```javascript
sayHello();
```

When a function is called, it executes the code within its block.

In JavaScript, functions can be categorized into two main types
based on their parameters:
- non-parameterized functions
- parameterized functions

### Non-parameterized Functions
These do not require any parameters to operate. They can perform their tasks without receiving any specific input values. Non-parameterized functions are often used for tasks that rely solely on their internal logic or external factors. Non-parameterized functions are simple and most suitable for tasks that don't need external data.

```html
<body>
    <p id="functionData1"></p>
    <script>
        function add() {
            const a = 3;
            const b = 4;
            return a + b;
        }
        document.getElementById('FunctionData1').innerHTML=add();
    </script>
</body>
```

### Parameterized functions
These except one or more arguments that provide input data for the function to work with. You define these parameters
in the function's declaration, and when you call the function, you pass specific values for those parameters. Parameterized functions are versatile because they can adapt to different input values, making them more flexible.

```html
<body>
    <p id="functionData1"></p>
    <script>
        function add(a, b) {
            return a + b;
        }
        document.getElementById('FunctionData1').innerHTML=add(3, 4);
        // Here, 3 and 4 are arguments passed to the function as parameters
    </script>
</body>
```

### Function Declaration Vs Function Expression

There are two ways of writing a function in JavaScript, function declaration and function expression.

Function declaration is the traditional way to define a function. It is the syntax shown above.

Function expression is another way to define a function in JavaScript. The function is defined using a variable:

```javascript
const add = function(a, b) {
    console.log(a+b);
}
```

### Types of Functions

> [!IMPORTANT]
> This section has not been explained well and will likely need additional, external research

* #### Named function
    * Have specific names
    * Called by their names
    * Declared using function keyword
    * Can be defined at any Point
    * Helps with debugging
    ```javascript
    const add = function(a, b) {
        console.log(a+b);
    }
    ```
* #### Immediately invoked function expression (IIFE)
    * Defined and executed immediately
    * Contains variables and private scope codes
    * Prevent global scope contamination and variable conflicts
    ```javascript
    (function sayHello() {
        console.log("Hello!");
    })();
    ```
* #### Arrow function
    * A way to write short concise functions introduced in ES6
    * Used for short and simple functions
    ```javascript
    const square = (x) => x * x;
    ```
* #### Anonymous function
    * Don't have a name
    * Used as arguments
    * Assigned to variables
    ```javascript
    const multiply = (a,b) => a * b;
    ```

## ECMAScript Function Syntax and Return Statements

ECMAScript, often abbreviated as ES, is a standardized scripting language specification that serves as the foundation for
several scripting languages. JavaScript is the most well known and widely used implementation. It defines the core features and
functionality that a scripting language should provide to ensure consistent behaviour across different platforms and environments.

The ECMAScript specification provides rules, guidelines, and requirements for scripting languages, including syntax, data types,
control structures, and object manipulation. It ensures that scripts written in different implementations, such as
JavaScript in web browsers, node.js and others can be interoperable and produce consistent results.

### Arrow Functions

Arrow functions were introduced in ECMAScript 6, referred to as ES6. They offer a concise way to write functions in JavaScript.
They provide a more compact and readable syntax for creating functions compared to traditional function expressions. They are especially
useful for simple one liner functions. Just like traditional functions, arrow functions can be parameterized and non parameterized.

> </br>
>
> #### Key points
>
> * Arrow functions have a more compact and readable syntax
> * They use a fat arrow to define the function
> * Arrow functions do not require the function keyword
>
> </br>


Arrow functions are not a complete replacement for traditional functions. Traditional functions are still necessary in
cases where you require named function expressions. The choice between arrow functions and traditional functions depends on
the context and requirements of your code.

### Return Statements

In JavaScript functions, the return statement is used to specify the value that a function should produce as its result
when it's called. It's essential for controlling the output of functions and is crucial for making functions reusable
and versatile.

* Return output can be a specific data value, a calculated result, or even another function
* A return serves as an exit point for a function - once a return statement is encountered, the function terminates and
the control flow is handed back to the code that called the function
* Return enables functions that can be used in various contexts because they provide results that can be captured and
used by other parts of your code.

A return statement typically appears inside the function body and specifies the value that the function should return.
When the function is called, it executes its code and evaluates the return statement. The function then immediately exits and
the specified value is returned to the code that called the function. You can capture the returned value by assigning the function call to
a variable or using it directly in other expressions.

```javascript
function add(a, b) {
    return a + b;
}

const result = add(3,4) // the value 7 is returned from the function and stored
console.log(add(3,4)) // the value 7 is returned from the function and used by log
```
