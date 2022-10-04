// open a new book form
let addBookBtn = document.querySelector('.add-book');
addBookBtn.addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});

// close a new book form
let closeFormBtn = document.querySelector('.close')
closeFormBtn.addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
})

//
let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author,
    this.title = title,
    this.pages = pages,
    this.read = read,
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

// let newBook = document.querySelectorAll('input');
// console.log(newBook[2].value);

function addBookToLibrary() {
    let newBook = document.querySelectorAll('input')
    let userInput = new Book(newBook[0].value, newBook[1].value, newBook[2].value, newBook[3].checked);
    myLibrary.push(userInput);
}

document.querySelector('.submit-btn').addEventListener('click', () => {
    addBookToLibrary();
    document.querySelector('.bg-modal').style.display = 'none';
    createNewCard();
    console.log(myLibrary[0]);
});

let bookCard = document.querySelector('.book-card').cloneNode(true);
console.log(bookCard.childNodes[7].childNodes[3].childNodes[1].innerText)

let booksContainer = document.querySelector('.books-container');


function createNewCard() {
    let bookCard = document.querySelector('.book-card').cloneNode(true);
    bookCard.childNodes[3].innerText = myLibrary[0]['author'];
    bookCard.childNodes[5].innerText = myLibrary[0]['title'];
    bookCard.childNodes[7].childNodes[3].childNodes[1].innerText = myLibrary[0]['pages'];

    booksContainer.insertBefore(bookCard, addBookBtn);
}

