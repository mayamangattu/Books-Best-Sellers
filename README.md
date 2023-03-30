### index.js

# up to children prop

import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import img1 from "./images/book1.png";
import img2 from "./images/book2.jpg";
// import App from './App';

const firstBook = {
author: "Gaur Gopal Das",
title: "Energize Your Mind",
img: img1,
};
const secondBook = {
author: "James Clear ",
title: "Atomic Habits",
img: img2,
};
// const img = "./images/book1.png";

const BookList = () => {
return (

<section className="booklist">
<Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
<p>This is so special book. It is really surprising!!.</p>
<button>click me</button>
</Book>
<Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
{/_ <Book author={author} title={title} img={img1} />
<Book author={author} title={title} img={img1} />
<Book author={author} title={title} img={img1} /> _/}
</section>
);
};

const Book = ({ img, title, author, children }) => {
return (

<article className="book">
<div>
<img src={img} alt={title} />
<h2>{title}</h2>
<h4>{author}</h4>
{children}
{/_ <p>{props.job}</p>
<p>{props.title}</p>
<p>{props.number}</p> _/}
</div>
</article>
);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

export default BookList;

##### up to ES6 modules

import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import img1 from "./images/book1.png";
import img2 from "./images/book2.jpg";
// import App from './App';

const books = [
{
author: "Gaur Gopal Das",
title: "Energize Your Mind",
img: img1,
id: 1,
},
{
author: "James Clear ",
title: "Atomic Habits",
img: img2,
id: 2,
},
];

const BookList = () => {
// const someValue = "shakeAndBake";
// const displayValue = () => {
// console.log(someValue);
// };
const getBook = (id) => {
const book = books.find((book) => book.id === id);
console.log(book);
};
return (
<section className="booklist">
<EventExamples />
{books.map((book) => {
// const { img, title, author, id } = book;
return <Book {...book} key={book.id} getBook={getBook} />;
})}
</section>
);
};

const EventExamples = () => {
const handleFormInput = (e) => {
console.log(e.target);
console.log(e.target.name);
console.log(e.target.value);
};
const handleButtonClick = () => {
alert("handle button click");
};
const handleFormSubmission = (e) => {
e.preventDefault();
console.log("form submitted");
};

return (
<section>
<form onSubmit={handleFormSubmission}>
<h2>Typical Form</h2>
<input
type="text"
name="example"
onChange={handleFormInput}
style={{ margin: "1rem 0" }}
/>
<button type="submit" onClick={handleFormSubmission}>
submit
</button>
<button onClick={handleButtonClick} type="button">
click me
</button>
</form>
</section>
);
};

const Book = (props) => {
const { img, title, author, getBook, id } = props;
// console.log(props);
// const getSingleBook = () => {
// getBook(id);
// };
// const displayTitle = () => {
// console.log(title);
// };
return (
<article className="book">
<div>
<img src={img} alt={title} />
<h2>{title}</h2>
{/_ <button onClick={displayTitle}>display title</button> _/}
{/_ <button onClick={getSingleBook}>click me</button> _/}
<button onClick={() => getBook(id)}>click me</button>
<h4>{author}</h4>

        {/* <p>{props.job}</p>
        <p>{props.title}</p>
        <p>{props.number}</p> */}
      </div>
    </article>

);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

export default BookList;
