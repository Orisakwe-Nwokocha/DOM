const wrapper = document.getElementById('wrapper');
console.log(wrapper);

const title = document.getElementsByClassName('title');
console.log(title);

console.log(Array.isArray(Array.from(title)))

let header = document.getElementsByTagName('header');
console.log(header);

const bookList = document.querySelectorAll("#book-list ul li .name");
console.log(bookList);
const bookList2 = document.querySelector("#book-list");
console.log("null: ", bookList2.previousElementSibling);

bookList.forEach((book) => {
   book.textContent += ' (text)';
   console.log(book.textContent);
})

// console.log(bookList[2].textContent);

const add = document.getElementById('add-book');
console.log(add.lastElementChild.textContent);
console.log(add.textContent.trim());
console.log(add.previousElementSibling);

const add2 = document.querySelector('#add-book button');
console.log(add2.textContent);


const bookLIST = document.querySelector("#book-list ul");
bookLIST.addEventListener('click', (e) => {
    console.log(e);
    let className = e.target.className;
    if (Object.is(className, "delete")) {
        let li = e.target.parentElement;
        console.log(li);
        bookLIST.removeChild(li);
    }
});

const searchBook = document.forms["search-books"];
const listOfBooks = document.querySelectorAll('#book-list li .name');

searchBook.addEventListener("keyup", (e) => {
    let inputText = e.target.value.toLowerCase();
    listOfBooks.forEach(book => {
        let title = book.textContent.toLowerCase();
        let parentNode = book.parentNode;
        if (title.includes(inputText)) parentNode.style.display = "block";
        else parentNode.style.display = "none";
    });
});


const addBook = document.forms["add-book"];
console.log(addBook);
addBook.addEventListener('submit', (e) => {
    e.preventDefault();
    // another way
/*    const inputValue = addBook.querySelector("input").value.toString();
    if (inputValue && /\w/.test(inputValue[0]))*/
    const inputValue = addBook.querySelector("input").value.trim();

    if (inputValue) {
        const liTag = document.createElement("li");
        const firstSpan = document.createElement("span");
        const secondSpan = document.createElement("span");

        liTag.appendChild(firstSpan);
        liTag.appendChild(secondSpan);

        firstSpan.className = "name";
        secondSpan.className = "delete";

        firstSpan.textContent = inputValue;
        secondSpan.textContent = "delete";

        bookLIST.appendChild(liTag);

        addBook.reset();
    }



})
