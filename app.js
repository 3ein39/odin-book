const myLibrary = [];
const dialog = document.querySelector('#addBookDialog');
const form = document.querySelector('#bookForm');

// Book class
// tested
class Book {
    constructor(title, author, year, numPages, read) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.numPages = numPages;
        this.read = read;
    }
    addToTable() {
         // create a table row for each book
        const row = document.createElement('tr');
        row.addEventListener('dblclick', (el) => {
            let title = el.target.innerText;
            // let book = myLibrary.find(book => book.title === title);
            // get its index from child nodes
            let index = Array.prototype.indexOf.call(table.childNodes, el.target.parentNode);
            // remove it from the table
            table.removeChild(el.target.parentNode);
            myLibrary.splice(index, 1);
        });
        // create a table data for each book property
        const title = document.createElement('td');
        const author = document.createElement('td');
        const year = document.createElement('td');
        const numPages = document.createElement('td');
        const read = document.createElement('td');
        // add book properties to table data
        title.textContent = this.title;
        author.textContent = this.author;
        year.textContent = this.year;
        numPages.textContent = this.numPages;
        // read is a checkbox
        read.innerHTML = `<input type="checkbox" name="read" id="read" ${this.read ? 'checked' : ''}>`;
        // add table data to table row
        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(year);
        row.appendChild(numPages);
        row.appendChild(read);
        // add table row to table body
        table.appendChild(row);
    }
}
// some seeds
function seed() {
    const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 1937, 310, true);
    const book2 = new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 1954, 423, true);
    const book3 = new Book('The Two Towers', 'J.R.R. Tolkien', 1954, 352, true);
    const book4 = new Book('The Return of the King', 'J.R.R. Tolkien', 1955, 416, true);
    const book5 = new Book('The Silmarillion', 'J.R.R. Tolkien', 1977, 365, true);
    myLibrary.push(book1, book2, book3, book4, book5);
    myLibrary.forEach(book => book.addToTable());
}
const table = document.querySelector('#booksTable tbody');

form.addEventListener('submit', (e) => {
  e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const year = document.querySelector('#year').value;
    const numPages = document.querySelector('#pages').value;
    const read = document.querySelector('#isRead').checked;
    let book = new Book(title, author, year, numPages, read);
    myLibrary.push(book);
    book.addToTable();
    dialog.close();
})

// Get input from user and add to myLibrary array
function addBookToLibrary() {
    dialog.showModal();
}

function deleteMe() {
    let index = myLibrary.indexOf(this);
    myLibrary.splice(index, 1);
    table.removeChild(this);
    this.remove();
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

seed();