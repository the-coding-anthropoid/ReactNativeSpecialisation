/* == Step 2: Defining variables with let, var, and const == */

// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
  // Block scope
  var blockVar = "I'm a block-scoped var";
  let blockLet = "I'm a block-scoped let";
  const blockConst = "I'm a block-scoped const";
}

/* == Step 3: Scope of variables at a global level == */

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

/* == Step 4: Scope of variables for block scope == */

//Block Scope
console.log(blockVar); // Exists in this scope
// console.log(blockLet); //! Throws ReferenceError

/* == Step 5: Scope of variables for function scope == */

function show() {
  var functionVar = "I'm a block-scoped var";
  let functionLet = "I'm a block-scoped let";
  const functionConst = "I'm a block-scoped const";
}
show();

// console.log(functionVar); //! Throws ReferenceError
// console.log(functionLet); //! Throws ReferenceError
// console.log(functionConst); //! Throws ReferenceError

/* == Practice Task ==
1) Create one block using {} and declare variables using let, const, and var
2) Then, try to reassign these variables within the curly braces {}. Check for
any errors that may occur.
3) Next, try to reassign the same variables outside the block {} and check if
assignment outside the scope of variables where the variables are assigned can
be done or not. */

// 1
{
  let letVar = "I'm a let variable in a block";
  const constVar = "I'm a const variable in a block";
  var varVar = "I'm a var variable in a block";
  // 2
  letVar = "I have been re-assigned";
  // constVar = "This should not work"; //! Uncaught TypeError
  varVar = "I have been reassigned";
}

// 3
letVar = "Variable doesn't exist";
constVar = "Another 'Uncaught Type Error'";
varVar = "This one should be fine";
console.log(letVar);
console.log(constVar);
console.log(varVar);

/*
> It appears that, rather than re-assigning letVar and constVar from the block -
> as they do not exist outside the block - they have been given new variables
> that default to the var type. Based on previous behaviour @line_20 varVar is
> actually re-assigned.
*/
