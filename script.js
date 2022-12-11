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
        document.querySelector('.bg-modal').style.display = 'flex';
    });

    // close a new book form
    let closeFormBtn = document.querySelector('.close')
    closeFormBtn.addEventListener('click', function() {
        document.querySelector('.bg-modal').style.display = 'none';
    })
    
    // add a book to library
    document.querySelector('.submit-btn').addEventListener('click', () => {
        Book.addBookToLibrary();
           document.querySelector('.bg-modal').style.display = 'none';
           createNewCard();
       });
    
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