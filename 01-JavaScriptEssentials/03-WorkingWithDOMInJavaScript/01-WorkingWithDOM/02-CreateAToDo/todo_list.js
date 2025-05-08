/* == Step 2: Defining variables to access data == */

// text input
const taskInput = document.getElementById("taskInput");

// buttons and list
const addTaskBtn = document.getElementById("addTaskBtn");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const taskList = document.getElementById("taskList");

// empty array to store tasks
let tasks = [];

/* == Step 3: Defining various functions to access data == */

/**
 * Adds a string to the tasks array; resets the input; calls displayTasks
 */
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push({ text: taskText });
    taskInput.value = "";
    displayTasks();
  }
}

// ? When the data is pushed to the array it is as an object with the property
// ? text: "input text goes here". So toggleTask adds a new property to the
// ? object at the index and sets it True/False.
// ? Then `task.done ? "checked" : ""` toggles the attribute that displays the
// ? checkbox to appear checked => it is not required to delete from list, but
// ? would be confusing otherwise.

/**
 * Creates and appends a list item with checkbox for each element in the tasks
 * array; checkbox is created with an event listener that calls toggleTask
 */
function displayTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.done ? "checked" : ""}>
          <label for="task-${index}">${task.text}</label>`;
    li.querySelector("input").addEventListener("change", () => toggleTask(index));
    taskList.appendChild(li);
  });
}

/**
 * Toggles a task as completed or not;
 * @param {number} index - the index of the task to toggle
 */
function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  displayTasks();
}

/**
 * Clears any tasks marked as completed
 */
function clearCompletedTasks() {
  tasks = tasks.filter(task => !task.done);
  displayTasks();
}

// event listeners for the two buttons
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

/* == Practice Task ==
1) In this practice task, you need to include a button to clear all tasks at
once.
2) For this you need to create a button named Clear All Tasks in the HTML file.
3) Then create a function to clear the tasks list, which you have stored in
tasks array in lab, and call this function at the time the Clear All Tasks
button is clicked.*/

const clearAllBtn = document.getElementById("clearAllBtn");

function clearAllTasks() {
  tasks = [];
  displayTasks();
}

clearAllBtn.addEventListener("click", clearAllTasks);


