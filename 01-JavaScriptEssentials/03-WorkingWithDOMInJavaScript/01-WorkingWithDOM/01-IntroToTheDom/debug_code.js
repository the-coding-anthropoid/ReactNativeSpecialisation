/* == Step 2: Defining Variables == */

function performOperation() {
  // Get user input from input fields
  let num1 = parseInt(document.getElementById('input1').value);
  let num2 = parseInt(document.getElementById('input2').value);
  // Check if inputs are valid numbers
  if (!isNaN(num1) && !isNaN(num2)) {
    /* Practice Task => swap result assignment */
    // Perform the operation
    // let result = multiply(num1, num2);
    let result = arithmeticOperations(num1, num2);

    // Display the result
    displayResult(result);
  } else {
    /* Practice Task => add debugger statement to observe value */
    debugger;
    displayResult('Please enter valid numbers');
  }
}

function multiply(a, b) {
  // Introduce a debugger statement to pause execution
  debugger;

  // Multiply the numbers
  return a * b;
}

function displayResult(result) {
  // Display the result in the paragraph element
  const resultElement = document.getElementById('result');
  /* Practice Task => Change display type */
  // resultElement.textContent = `The result is: ${result}`;
  resultElement.innerHTML = result;
}

/* == Practice task ==
1) You need to perform arithmetic operations such as addition, multiplication,
and division simultaneously using the same function.
2) Additionally, you need to check the flow of the code, which will depend on
the arithmetic operation you are performing first.
3) Also, try assigning one value in the form of characters and observe how this
value is displayed using the debugger. */

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

function arithmeticOperations(a, b) {
  debugger;

  return (`Addition: ${addition(a, b)}</p>` +
    `<p>Subtraction: ${subtraction(a, b)}</p>` +
    `<p>Multiplication: ${multiplication(a, b)}</p>` +
    `<p>Division: ${division(a, b)}</p>`
  );
}


