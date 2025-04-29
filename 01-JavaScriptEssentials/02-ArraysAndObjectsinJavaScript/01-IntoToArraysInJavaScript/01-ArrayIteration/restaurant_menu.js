/* Step 2: Defining variables and map array method */

// const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// const breakfastMenuItemsHTML =
//   breakfastMenu.map(
//     (item, index) => `<p>Item ${index + 1}: ${item}</p>`
//   ).join('');

// document.getElementById('breakfastMenuItems').innerHTML =
//   breakfastMenuItemsHTML;

/* Step 3: Defining forEach array method and for loop iteration */

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
  mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
  dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem

/* == Practice Task ==
1) You can include prices for all the items in breakfastMenu, mainCourseMenu, and
dessertMenu.
2) For this you can take include the prices as follows:
  `const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];`
3) Then, access it in the similar manner and you will see the output for the
menu items along with prices as well.*/
// > I'm pretty sure all I really have to do is re-define breakfastMenu then cut
// > and paste ...
const breakfastMenu = [
  'Pancakes- $12',
  'Eggs Benedict -$22.99',
  'Oatmeal -$21.99',
  'Frittata -$15'
];

const breakfastMenuItemsHTML =
  breakfastMenu.map(
    (item, index) => `<p>Item ${index + 1}: ${item}</p>`
  ).join('');

document.getElementById('breakfastMenuItems').innerHTML =
  breakfastMenuItemsHTML;

// > yup. Lets to something with 'totalItems' divs.

const breakfastTotalDiv = document.getElementById('breakfastTotalItems');
const mainTotalDiv = document.getElementById('maincourseTotalItems');
const desertTotalDiv = document.getElementById('dessertTotalItems');

const totalDivs = [breakfastTotalDiv, mainTotalDiv, desertTotalDiv];

totalDivs.forEach((item) => {
  item.innerHTML = "<p>The total number of items in this section is 4</p>";
});

//> requires a more robust data structure - probably a map of an array - pft
