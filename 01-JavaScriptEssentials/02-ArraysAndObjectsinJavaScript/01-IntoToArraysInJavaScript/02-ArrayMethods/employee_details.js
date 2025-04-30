/* == Step 2: Defining variables and functions == */

// > I wanted to practice so after totalEmployees started implementing my own
// > solutions without looking at lab. Ended up refactoring to isolate code for
// > reuse.

const employees = [
  {
    id: 1,
    name: 'John Doe',
    age: 30,
    department: 'IT',
    salary: 50000,
    specialisation: 'JavaScript'
  },
  {
    id: 2,
    name: 'Alice Smith',
    age: 28,
    department: 'HR',
    salary: 45000,
    specialisation: 'Excel'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    age: 35,
    department: 'Finance',
    salary: 60000,
    specialisation: 'Sage'
  },
  {
    id: 4,
    name: 'Honey Grove',
    age: 27,
    department: 'HR',
    salary: 45000,
    specialisation: 'JavaScript',
  },
  //... More employee records can be added here
];

function createEmployeeDetailsString(employee) {
  // Function to turn employee data into a string
  return `<p>${employee.id}: ${employee.name} -` +
    ` ${employee.department}: $${employee.salary} ` +
    `<strong>SPECIALISATION:</strong> ${employee.specialisation}</p>`;
}

function displayEmployees(employeeArray) {
  // Function to display employees for a given array
  const totalEmployees =
    employeeArray.map(
      (employee, index) => createEmployeeDetailsString(employee));
  document.getElementById('employeesDetails').innerHTML =
    totalEmployees.join(' ');
}
//! Not sure why I had to move join from inside map??

function displayAllEmployees() {
  // Function to display all employees
  displayEmployees(employees);
}

function calculateTotalSalaries() {
  // Function to display total salaries
  const totalSalaries = employees.reduce((total, employee) =>
    total + employee.salary, 0);
  document.getElementById('employeesDetails').innerHTML =
    `<p>Salary Total: ${totalSalaries}</p>`;
}

function displayHREmployees() {
  // Function to display only HR Employees
  const hrEmployees = employees.filter((employee) =>
    employee.department == 'HR');
  displayEmployees(hrEmployees);
}

function findEmployeeById(id) {
  // Function to display employee by ID
  const employeeByID = employees.find((employee) => employee.id == id);
  document.getElementById('employeesDetails').innerHTML =
    createEmployeeDetailsString(employeeByID);
}

/* == Practice Task ==
1) In this practice task, you need to perform a functionality in which
information can be fetched on the basis of employee's specialisation as well.
2) For this, include one more key value pair for employees array of object
inside each object.
3) Then, create a button to search for an employee based on the specialization.
4) Next, create a JavaScript function to display the details of employees who
have specialization in JavaScript.*/

function findEmployeeBySpec(specialisation) {
  const employeesBySpecialisation = employees.filter((employee) =>
    employee.specialisation == specialisation);
  displayEmployees(employeesBySpecialisation);
}
