const myLibrary = [{title: 'The Hobbit', author: 'J.R.R. Tolkien', year: '1937'}, {title: 'The Fellowship of the Ring', author: 'J.R.R. Tolkien', year: '1954'}];

// The book obj constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// Get input from user and add to myLibrary array
function addBookToLibrary() {
    const title = prompt('title');
    const author = prompt('author');
    const year = prompt('year');
    const book = new Book(title, author, year);
    myLibrary.push(book);
}

// Display books in myLibrary array
function displayBooks() {
    // get table body
    const table = document.querySelector('#booksTable tbody');
    myLibrary.forEach(book => {
        // create a table row for each book
        const row = document.createElement('tr');
        // create a table data for each book property
        const title = document.createElement('td');
        const author = document.createElement('td');
        const year = document.createElement('td');
        // add book properties to table data
        title.textContent = book.title;
        author.textContent = book.author;
        year.textContent = book.year;
        // add table data to table row
        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(year);
        // add table row to table body
        table.appendChild(row);
    });
}

displayBooks();