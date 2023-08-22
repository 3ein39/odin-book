const myLibrary = [];
const table = document.querySelector('#booksTable tbody');
// The book obj constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.addToTable = function() {
        // create a table row for each book
        const row = document.createElement('tr');
        // create a table data for each book property
        const title = document.createElement('td');
        const author = document.createElement('td');
        const year = document.createElement('td');
        // add book properties to table data
        title.textContent = this.title;
        author.textContent = this.author;
        year.textContent = this.year;
        // add table data to table row
        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(year);
        // add table row to table body
        table.appendChild(row);
    }
}

// Get input from user and add to myLibrary array
function addBookToLibrary() {
    const title = prompt('title');
    const author = prompt('author');
    const year = prompt('year');
    const book = new Book(title, author, year);
    myLibrary.push(book);
    // clear table body
    const table = document.querySelector('#booksTable tbody');
    table.innerHTML = '';
    // display books
    displayBooks();
}

// Display books in myLibrary array
function displayBooks() {
    // get table body
    myLibrary.forEach(book => {
        book.addToTable();
    });
}
// the logic to add a book to the library
const addBookBtn = document.querySelector('#addBookBtn');
addBookBtn.addEventListener('click', () => {
    addBookToLibrary();
});