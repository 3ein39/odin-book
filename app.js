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
        let row = myLibrary.table.childNodes[index + 1];
        myLibrary.table.removeChild(row);
    }
    displayBooks() {
        this.books.forEach(book => {
            book.addToTable();
        });
    }
}
class LibraryController {
    constructor() {
        this.myLibrary = new Library();
        this.form = document.querySelector('#bookForm');
        this.dialog = document.querySelector('#addBookDialog');
        this.table = document.querySelector('#booksTable tbody');
        this.addBookBtn = document.querySelector('#addBookBtn');

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.addBook();
        });

        this.addBookBtn.addEventListener('click', this.addBookToLibrary.bind(this));

    }
    addBookToLibrary() {
        this.dialog.showModal();
    }
    addBook() {
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const year = document.querySelector('#year').value;
        const numPages = document.querySelector('#pages').value;
        const read = document.querySelector('#isRead').checked;
        let book = new Book(title, author, year, numPages, read);
        this.myLibrary.addBook(book);
        this.dialog.close();
    }
    removeBook(book) {
        let index = this.myLibrary.books.indexOf(book);
        this.myLibrary.books.splice(index, 1);
        // remove from table
        let row = this.table.childNodes[index + 1];
        this.table.removeChild(row);
    }
    displayBooks() {
        this.myLibrary.books.forEach(book => {
            book.addToTable();
        });

    }

    seed() {
        const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 1937, 310, true);
        const book2 = new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 1954, 423, true);
        const book3 = new Book('The Two Towers', 'J.R.R. Tolkien', 1954, 352, true);
        const book4 = new Book('The Return of the King', 'J.R.R. Tolkien', 1955, 416, true);
        const book5 = new Book('The Silmarillion', 'J.R.R. Tolkien', 1977, 365, true);
        this.myLibrary.addBook(book1);
        this.myLibrary.addBook(book2);
        this.myLibrary.addBook(book3);
        this.myLibrary.addBook(book4);
        this.myLibrary.addBook(book5);
    }
}

let myLibrary = new LibraryController();

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
        myLibrary.table.appendChild(row);
    }
}
myLibrary.seed();
