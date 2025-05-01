/* == Step2: Defining variables and functions == */

let books = [];

function addBook() {
  const bookName = document.getElementById('bookName').value;
  const authorName = document.getElementById('authorName').value;
  const bookDescription = document.getElementById('bookDescription').value;
  const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
  if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
    const book = {
      name: bookName,
      authorName: authorName,
      bookDescription: bookDescription,
      pagesNumber: pagesNumber
    };
    books.push(book);
    showBooks();
    clearInputs();
  } else {
    alert('Please fill in all fields correctly.');
  }
}

/* == Step 3: Defining function to show books == */

function showBooks() {
  const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
      <p><strong>Book Name: </strong>${book.name}</p>
      <p><strong>Author Name:</strong> ${book.authorName}</p>
      <p><strong>Book Description:</strong> ${book.bookDescription}</p>
      <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
      <button onclick="editBook(${index})">Edit</button>
      <button onclick="deleteBook(${index})">Delete</button>`
  );
  document.getElementById('books').innerHTML = booksDiv.join('');
}
function editBook(index) {
  const book = books[index];
  document.getElementById('bookName').value = book.name;
  document.getElementById('authorName').value = book.authorName;
  document.getElementById('bookDescription').value = book.bookDescription;
  document.getElementById('pagesNumber').value = book.pagesNumber;
  books.splice(index, 1); // Remove old entry
  showBooks(); // Refresh list
}

/* == Step 4: Defining function to clear books == */

function clearInputs() {
  document.getElementById('bookName').value = '';
  document.getElementById('authorName').value = '';
  document.getElementById('bookDescription').value = '';
  document.getElementById('pagesNumber').value = '';
}

/* == Practice Task ==
1) this practice task, you need to create a dynamic button at the time when
user-entered details will be shown as output after clicking on Add Book button.
2) You need to create a delete button. For this you need to create a deleteBook
function, which can include the below given partial code.
    `<button onclick="......")">Delete</button>)`
3) The deleteBook function will be called when the user clicks on the delete
button. This function will also delete the book's detail in the management
system for that particular ID.
*Note: The particular ID is the array index number where the details of the
particular book is stored.*
4) To delete the book's detail you can use array method splice() inside
deleteBook function. This method is used to modify the books array, removing a
single element starting from the specified index.
    `books.splice(index, 1);`
5) This function deletes the book entry at the given index from the books array.
After deletion, call the showBooks function to refresh the displayed book list.
*/

// PT 2 => see line 34

function deleteBook(index) {
  books.splice(index, 1);
  showBooks();
}
