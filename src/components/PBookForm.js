import React, { useContext, useState } from "react";
import { PBookContext } from "../context/PBookContext";

const PBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const { addBook } = useContext(PBookContext);

  const handleAddBook = e => {
    e.preventDefault();
    addBook(title, author)
  }

  return (
    <form onSubmit={handleAddBook}>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />

      <label>Author:</label>
      <input
        type="text"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />

      <input type='submit' value='Add New Book' />
    </form>
  );
};

export default PBookForm;
