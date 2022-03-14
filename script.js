const addBtn = document.querySelector('.section_btn');
const inputBookModal = document.querySelector('.input_book');
const addTolibrary = document.getElementById('submit-data');
const bookEle = document.querySelector('.book-ele');
const modalContainer = document.querySelector('.modal-container');
const bookData = document.querySelector('.book-data');
const closeBtn = document.getElementById('close-modal');
const readStatus = document.getElementById('checkbox');
let bookTitle = document.getElementById('title');
let bookAuthor = document.getElementById('author');
let bookPages = document.getElementById('pages');
let book = {}, myLibrary = [], title, author, pages;

let tempLibrary = [
    {title: 'test', author: 'test', pages: '12'},
    {title: 'test1', author: 'test1', pages: '434'},
    {title: 'test2', author: 'test2', pages: '56'},
    {title: 'test3', author: 'test3', pages: '120'}
]

function Book(title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
}

addBtn.addEventListener('click', function() {
    modalContainer.style.display = 'block';
	bookTitle.value = '';
	bookAuthor.value = '';
	bookPages.value = '';
	addBook();
})

closeBtn.addEventListener('click', function(e) {
	e.preventDefault();
    modalContainer.style.display = 'none';
})

function addBook() {
    bookTitle.addEventListener('input', function(e) {
        title = bookTitle.value;
    })
    
    bookAuthor.addEventListener('input', function(e) {
        author = bookAuthor.value;
    })
    
    bookPages.addEventListener('input', function(e) {
        pages = bookPages.value;
    })

	readStatus.addEventListener('input', function(e) {
		let read = readStatus.value;
	})

}

addTolibrary.addEventListener('click', function(e) {
    e.preventDefault();
	const newBook = new Book(title, author, pages);
    console.log(myLibrary.push(newBook));
    console.log(newBook);
	displayBook(newBook);
    // console.log(myLibrary);
    modalContainer.style.display = 'none';
})

// function displayBook(library) {
// 	console.log(library.length);
//     for (let i = 0; i < library.length; i++) {
//         bookEle.innerHTML += `
//         <div class="book-details">
//             <h3>Title</3>
//             <p>${library[ele].title}</p>
//             <h3>Author</3>
//             <p>${library[ele].author}</p>
//             <h3>Pages</3>
//             <p>${library[ele].pages}</p>
//         </div>
//         `
//     }
// }

function displayBook(book) {
        bookEle.innerHTML += `
        <div class="book-details">
            <h3>Title</3>
            <p>${book.title}</p>
            <h3>Author</3>
            <p>${book.author}</p>
            <h3>Pages</3>
            <p>${book.pages}</p>
        </div>
        `
}