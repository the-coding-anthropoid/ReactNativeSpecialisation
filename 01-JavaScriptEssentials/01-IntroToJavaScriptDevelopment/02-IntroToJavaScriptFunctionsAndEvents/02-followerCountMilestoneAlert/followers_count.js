/* == Step 2: Defining variables and functions == */
let count = 0; // Initialize count to 0

function increaseCount() {
  count++; // Increment the count by 1
  displayCount(); // Display the count

  // from step 3
  checkCountValue(); // Check count value and display messages
}

function displayCount() {
  document.getElementById('peterCountDisplay').innerHTML = count; // Display the count in the HTML
}

/* == Step 3: Defining variables and functions to show == */
function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}

/* == Practice Task ==
In this task you need to create a reset button which will reset the followers
count code. For this you need to include:
- One button to represent Reset Count in followers_count.html file.
- Then create one function in followers_count.js file to reset count to 0.
- Also use alert popup box method to show alert message which will say that the
Followers count has been reset. */

function resetCount() {
  count = 0;
  alert('Follower Count has been reset!');
  displayCount();
}

/*
> This uses hoisting but not closure, which seems kinda silly as it is
> implementing a counter ...
? Initially an attempt to implement a counter in a closure without looking at
? Step 2. Managed the counter & alert but could not work out how to reset ...
*/
function modifyCount() {

  const countDisplay = document.getElementById('maryCountDisplay');
  let count = 0;

  function updateCount() {
    countDisplay.innerHTML = ++count;
    countAlert();
  }

  function countAlert() {
    if (count == 0) {
      alert('Follower Count has been reset!');
    }
    else if (count == 10) {
      alert("Your Instagram post gained 10 followers! Congratulations!");
    }
    else if (count == 20) {
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }
  }

  return updateCount;
}

const increaseMaryCount = modifyCount();

function resetMaryCount() {
  alert("Could not implement within closure.")
}

/*
> Based on: https://www.geeksforgeeks.org/closure-in-javascript/
> "IIFEs (Immediately Invoked Function Expressions) use closures to hide data
> inside the function. This helps keep certain information private and prevents
> it from being accessed outside the function, allowing you to create
> self-contained modules."
*/

const counter = (function () {

  const countDisplay = document.getElementById('harryCountDisplay');
  let count = 0;

  return {
    increment: function () {
      countDisplay.innerHTML = ++count;
      countAlert();
    },
    reset: function () {
      count = 0;
      countDisplay.innerHTML = count;
      countAlert();
    },
  };

  function countAlert() {
    if (count == 0) {
      alert('Follower Count has been reset!');
    }
    else if (count == 10) {
      alert("Your Instagram post gained 10 followers! Congratulations!");
    }
    else if (count == 20) {
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }
  }

})();
