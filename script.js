// add a new book
class Book {
    constructor(author, title, pages, read) {
        this.author = author,
        this.title = title,
        this.pages = pages,
        this.read = read
    }

    static myLibrary = [];

    static addBookToLibrary() {
        let newBook = document.querySelectorAll('.popup-form');
        let userInput = new Book(newBook[0].value, newBook[1].value, newBook[2].value, newBook[3].checked);
        Book.myLibrary.push(userInput);
    }
}

const library = (() => {
    // open a new book form
    let addBookBtn = document.querySelector('.add-book');
    addBookBtn.addEventListener('click', function() {
        // empty the input fields
        document.querySelector('#author').value = '';
        document.querySelector('#title').value = '';
        document.querySelector('#pages').value = '';
        document.querySelector('#read').checked = false;
        
        document.querySelector('.bg-modal').style.display = 'flex';
    });

    // close a new book form
    let closeFormBtn = document.querySelector('.close')
    closeFormBtn.addEventListener('click', function() {
        document.querySelector('.bg-modal').style.display = 'none';
    })

    // validate the user's input
    const bookAuthor = document.querySelector('#author');
    const bookTitle = document.querySelector('#title');
    const bookPages = document.querySelector('#pages');
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.addEventListener('click', (e) => {
        // add a book to library
        if (!(bookAuthor.validity.valueMissing) && !(bookTitle.validity.valueMissing) && !(bookPages.validity.valueMissing)) {
           Book.addBookToLibrary();
           document.querySelector('.bg-modal').style.display = 'none';
           createNewCard();
        } else {
            // validate the author
            if (bookAuthor.validity.valueMissing) {
                bookAuthor.setCustomValidity('The book is missing the author!');
            } else {
                bookAuthor.setCustomValidity('');
            }
            // validate the title
            if (bookTitle.validity.valueMissing) {
                bookTitle.setCustomValidity('Every book needs a title!');
            } else {
                bookTitle.setCustomValidity('');
            }
            // validate the pages
            if (bookPages.validity.valueMissing) {
                bookPages.setCustomValidity(`There's at least one page in the book!`);
            } else {
                bookPages.setCustomValidity('');
            }
        }
    })
    
    // creat a new card
    let booksContainer = document.querySelector('.books-container');

    function createNewCard() {
        let bookCard = document.querySelector('.book-card').cloneNode(true);
        bookCard.childNodes[3].innerText = Book.myLibrary[Book.myLibrary.length - 1]['author'];
        bookCard.childNodes[5].innerText = Book.myLibrary[Book.myLibrary.length - 1]['title'];
        bookCard.childNodes[7].childNodes[3].childNodes[1].innerText = Book.myLibrary[Book.myLibrary.length - 1]['pages'];
        bookCard.childNodes[7].childNodes[1].childNodes[3].checked = Book.myLibrary[Book.myLibrary.length - 1]['read']
        
        booksContainer.insertBefore(bookCard, addBookBtn);

        // add possibility to delete new cards
        document.querySelectorAll('.delete-book').forEach(btn => btn.addEventListener('click', (e) => {
            e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
        }));
    }

    // function to delete existing cards
    document.querySelectorAll('.delete-book').forEach(btn => btn.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
    }));
})();