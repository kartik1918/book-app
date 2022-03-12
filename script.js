const addBtn = document.querySelector('.section_btn');
const inputBookModal = document.querySelector('.input_book');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const addTolibrary = document.getElementById('submit-data');
const bookEle = document.querySelector('.book-ele');
let book = {}, myLibrary = [];

let tempLibrary = [
    {title: 'test', author: 'test', pages: '12'},
    {title: 'test1', author: 'test1', pages: '434'},
    {title: 'test2', author: 'test2', pages: '56'},
    {title: 'test3', author: 'test3', pages: '120'}
]

addBtn.addEventListener('click', function() {
    console.log('click');
    inputBookModal.classList.add('modal-container');
})

function addBook() {
    bookTitle.addEventListener('input', function(e) {
        book.title = e.target.value;
    })
    
    bookAuthor.addEventListener('input', function(e) {
        book.author = e.target.value;
    })
    
    bookPages.addEventListener('click', function(e) {
        book.pages = e.target.value;
    })
}

addBook();

addTolibrary.addEventListener('click', function(e) {
    e.preventDefault();
    myLibrary.push(book);
    console.log(myLibrary);
})

function displayBook() {
    for (let i = 0; i < tempLibrary.length; i++) {
        bookEle.innerHTML += `
        <div class="book-details">
            <h3>Title</3>
            <p>${tempLibrary[i].title}</p>
            <h3>Author</3>
            <p>${tempLibrary[i].author}</p>
            <h3>Pages</3>
            <p>${tempLibrary[i].pages}</p>
        </div>
        `
    }
}

displayBook();