import React, { useContext, useState } from "react";
import { PBookContext } from "../context/PBookContext";
import { ADD_BOOK } from "../reducers/PBookReducer";

const PBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const { dispatch } = useContext(PBookContext);

  const handleAddBook = e => {
    e.preventDefault();
    dispatch({
      type: ADD_BOOK,
      book: {
        title,
        author,
      }
    });
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
