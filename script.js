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