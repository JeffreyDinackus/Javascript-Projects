const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    return `${title}, ${author}, ${pages} pages, ${read}.`
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

function listBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    document.getElementsByClassName("book1") = 
  }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 266, "I have not read")

const bible = new Book("The Bible", "God", "1000", "I mostly read")

console.log(theHobbit.info())

addBookToLibrary(theHobbit)
addBookToLibrary(bible)
console.log(myLibrary)


listBooks()