import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [book_ID, setBookID] = useState("");
  const [book_Name, setBookName] = useState("");
  const [book_Author, setAuthor] = useState("");
  const [book_Description, setBookDescription] = useState("");
  const [edition, setEdition] = useState("");

  const handleSubmit = () => {
    if (
      book_ID === "" ||
      book_Name === "" ||
      book_Author === "" ||
      book_Description === "" ||
      edition === ""
    ) {
      alert("Please fill all the fields");
    } else {
      const url = "http://localhost:8000/api/books";

      const book = {
        book_ID,
        book_Author,
        book_Name,
        book_Description,
        edition,
      };

      axios
        .post(url, book)
        .then((response) => {
          alert("The book has been created");
        })
        .catch((error) => alert(alert));
    }
    setBookID("");
    setBookDescription("");
    setAuthor("");
    setBookName("");
    setEdition("");
  };

  const handleupdate = () => {
    if (
      book_ID === "" ||
      book_Name === "" ||
      book_Author === "" ||
      book_Description === "" ||
      edition === ""
    ) {
      alert("Please fill all the fields");
    } else {
      const url = "http://localhost:8000/api/books/update";

      const book = {
        book_ID,
        book_Author,
        book_Name,
        book_Description,
        edition,
      };

      axios
        .patch(url, book)
        .then((response) => {
          alert("The book has been updated");
        })
        .catch((error) => alert(alert));
    }
    setBookID("");
    setBookDescription("");
    setAuthor("");
    setBookName("");
    setEdition("");
  };
  const handleDelete = () => {
    if (
      book_ID === "" ||
      book_Name === "" ||
      book_Author === "" ||
      book_Description === "" ||
      edition === ""
    ) {
      alert("Please fill all the fields");
    } else {
      const book = {
        book_ID,
        book_Author,
        book_Name,
        book_Description,
        edition,
      };

      const url = `http://localhost:8000/api/books/delete`;
      axios
        .post(url, book)
        .then((response) => {
          alert("The book has been deleted");
        })
        .catch((error) => alert(alert));
    }
    setBookID("");
    setBookDescription("");
    setAuthor("");
    setBookName("");
    setEdition("");
  };
  const handleSingleBookSearch = () => {
    if (
      book_ID === "" ||
      book_Name === "" ||
      book_Author === "" ||
      book_Description === "" ||
      edition === ""
    ) {
      alert("Please fill all the fields");
    } else {
      const book = {
        book_ID,
        book_Author,
        book_Name,
        book_Description,
        edition,
      };

      const url = `http://localhost:8000/api/books/singlebook`;
      axios
        .post(url, book)
        .then((response) => {
          const output = response.data.book;
          const { book_ID, book_Author, book_Name, book_Description, edition } =
            output;
          alert(
            `book_ID: ${book_ID}, book_Author: ${book_Author},book_Name: ${book_Name},book_Description: ${book_Description},edition: ${edition}`
          );
        })
        .catch((error) => alert(alert));
    }
    setBookID("");
    setBookDescription("");
    setAuthor("");
    setBookName("");
    setEdition("");
  };

  return (
    <div className="Container">
      <div className="Title">
        <h1>This is Prototype Phase Application</h1>
      </div>
      <hr />
      <div className="header">
        <button onClick={handleSubmit}>Insert</button>
        <button onClick={handleupdate}>Update</button>
        <button onClick={handleSingleBookSearch}>Search</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <hr />
      <form action="">
        <input
          type="text"
          placeholder="Book ID"
          id="bookid"
          value={book_ID}
          onChange={(e) => setBookID(e.target.value)}
        />
        <input
          type="text"
          placeholder="Book Name"
          id="bookname"
          value={book_Name}
          onChange={(e) => setBookName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          id="author"
          value={book_Author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <input
          type="text"
          placeholder="Book Description"
          id="bookdescription"
          value={book_Description}
          onChange={(e) => setBookDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Edition"
          id="edition"
          value={edition}
          onChange={(e) => setEdition(e.target.value)}
        />
      </form>

      <h5>Virtual University of Pakistan</h5>
    </div>
  );
}

export default App;
