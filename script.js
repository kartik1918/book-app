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

let book = {}, myLibrary = [], removeBookArr = [], bookCard = [], title, author, pages, read, key = 0;

let tempLibrary = [
    {title: 'test', author: 'test', pages: '12'},
    {title: 'test1', author: 'test1', pages: '434'},
    {title: 'test2', author: 'test2', pages: '56'},
    {title: 'test3', author: 'test3', pages: '120'}
]

function Book(title, author, pages, read, key) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read === true ? read : false;
	this.key = key;
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

	readStatus.addEventListener('change', function(e) {
		read = e.target.checked;
	})
	book.key = key++;
	// console.log(key);
}

addTolibrary.addEventListener('click', function(e) {
    e.preventDefault();
	const newBook = new Book(title, author, pages, read, key);
	myLibrary.push(newBook);
    // console.log(newBook);
	displayBook(newBook);
    // console.log(myLibrary);
    modalContainer.style.display = 'none';
})

function updateUI(book) {
	bookEle.innerHTML += `
	<div class="book-details">
	<div id="${book.key}">
		<h3>Title</h3>
		<p class="book-content">${book.title}</p>
		<h3>Author</h3>
		<p class="book-content">${book.author}</p>
		<h3>Pages</h3>
		<p class="book-content">${book.pages}</p>
		<h3>Read Status</h3>
		<p class="book-content">${book.read === true ? `READ` : `NOT READ`}</p>
		<button data="${book.key}" id="remove-book">Remove</button>
		</div>
	</div>
	`
}

function displayBook(book) {
    updateUI(book);
	const bookCards = document.getElementById(`${book.key}`);
	bookCard.push(bookCards);
	const removeBookBtns = Array.from(document.querySelectorAll('#remove-book'));
	for (let i = 0; i < removeBookBtns.length; i++) {
		removeBookBtns[i].addEventListener('click', function() {
			const divEle = i == '0' ? bookCard[0].id : bookCard[i].id;
			console.log(bookCard[divEle]);
			bookCard[i].innerHTML = '';
		})
	}
	console.log(bookCard);
}