let myLibrary = []

function Book(title, author, pages, ifRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.ifRead = ifRead
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

const theHobbit = new Book("The Hobbit", "JRR Tolkien",
    295, "Book finished!")

const theHungerGames = new Book("The Hunger Games", "Suzanne Collins", 
    374, "Book finished!")

addBookToLibrary(theHobbit)
addBookToLibrary(theHungerGames)

const bookDisplay = document.getElementById("bookDisplay")

for (let i = 0; i < myLibrary.length; i++) {
    const newBook = document.createElement("div")
    const removeBook = document.createElement("button")
    newBook.className = "book"
    newBook.id = myLibrary[i].title.toLowerCase()
    newBook.innerHTML = myLibrary[i].title + " – written by " + myLibrary[i].author
        + " – " + myLibrary[i].pages + " pages – " + myLibrary[i].ifRead
    removeBook.innerHTML = "Remove from Library"
    removeBook.className = "remove"
    removeBook.id = myLibrary[i].title.toLowerCase()
    bookDisplay.appendChild(newBook)
    bookDisplay.appendChild(removeBook)
}

const addBook = document.getElementById("addBookButton")
addBook.addEventListener("click", addNewBook)

function addNewBook() {
    //variables for "add new book" form
    const title = document.getElementById("title").value
    const author = document.getElementById("author").value
    const pages = document.getElementById("pages").value

    if (title == "") {
        alert("You must enter a title!")
    } else {

    function isItRead() {
        if (document.getElementById("yes").checked) {
            return "Book finished!"
        } else if (document.getElementById("no").checked) {
            return "Not read yet!"
        }
    }

    const addedBook = new Book(title, author, pages, isItRead())
    addBookToLibrary(addedBook)
    
    const newBook = document.createElement("div")
    const removeBook = document.createElement("button")
    newBook.className = "book"
    newBook.innerHTML = title + " – written by " + author
        + " – " + pages + " pages – " + isItRead()
    removeBook.innerHTML = "Remove from Library"
    removeBook.className = "remove"
    bookDisplay.appendChild(newBook)
    bookDisplay.appendChild(removeBook)

    newBook.id = title.toLowerCase()
    removeBook.id = title.toLowerCase()

    document.getElementById("title").value = ""
    document.getElementById("author").value = ""
    document.getElementById("pages").value = ""
    document.getElementById("yes").checked = false
    document.getElementById("no").checked = false

    const buttons = document.querySelectorAll("button")

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            button.remove()
            
            const deletedBook = document.getElementById(button.id)
            deletedBook.remove()
        })
    })
    }
}

const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.remove()
        
        const deletedBook = document.getElementById(button.id)
        deletedBook.remove()
    })
})