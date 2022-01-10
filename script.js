let bookArray = [];
const bookData = document.querySelector('#submit-data');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
let readStatus = document.getElementById('checkbox');

bookData.addEventListener('click', addBookToLibrary)
console.log(bookArray);

function addBookToLibrary(e) {
    e.preventDefault();
    let book = {
        title: bookTitle.value,
        author: bookAuthor.value,
        pages: bookPages.value
    }
    console.log(book);
    bookArray.push(book);
    console.log(bookArray);
}