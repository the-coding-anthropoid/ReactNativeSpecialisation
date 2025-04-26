/* == Practice Task ==
In this task you need to create a function called groceryTracker to calculate
the total amount of the purchased grocery item.

Include the following in the JavaScript file:
- Create a function which will accept these amount entered by users as a
parameter.
- Then write the logic to calculate the total amount spent on the grocery
purchase.
- Call this function in such a way so that after clicking on the button, it
shows the total amount for the grocery purchase. */

const getAmount = (id) => parseFloat(document.getElementById(id).value);

function groceryTracker(g1, g2, g3) {
  let total = g1 + g2 + g3;

  document.getElementById('result').innerText =
    `The total amount is: \$${total}`;
}
