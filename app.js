// const myLibrary = [];
const dialog = document.querySelector('#addBookDialog');
const form = document.querySelector('#bookForm');
const table = document.querySelector('#booksTable tbody');

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
        row.addEventListener('dblclick', myLibrary.removeBook.bind(myLibrary, this));
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

// library class
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
        book.addToTable();
    }
    removeBook(book) {
        let index = this.books.indexOf(book);
        this.books.splice(index, 1);
        // remove from table
        let row = table.childNodes[index + 1];
        table.removeChild(row);
    }
    displayBooks() {
        this.books.forEach(book => {
            book.addToTable();
        });
    }
}
let myLibrary = new Library();
// some seeds
function seed() {
    const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 1937, 310, true);
    const book2 = new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 1954, 423, true);
    const book3 = new Book('The Two Towers', 'J.R.R. Tolkien', 1954, 352, true);
    const book4 = new Book('The Return of the King', 'J.R.R. Tolkien', 1955, 416, true);
    const book5 = new Book('The Silmarillion', 'J.R.R. Tolkien', 1977, 365, true);
    myLibrary.addBook(book1);
    myLibrary.addBook(book2);
    myLibrary.addBook(book3);
    myLibrary.addBook(book4);
    myLibrary.addBook(book5);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const year = document.querySelector('#year').value;
    const numPages = document.querySelector('#pages').value;
    const read = document.querySelector('#isRead').checked;
    let book = new Book(title, author, year, numPages, read);
    myLibrary.addBook(book);
    dialog.close();
})

// Get input from user and add to myLibrary array
function addBookToLibrary() {
    dialog.showModal();
}

const addBookBtn = document.querySelector('#addBookBtn');
addBookBtn.addEventListener('click', () => {
    addBookToLibrary();
});

seed();