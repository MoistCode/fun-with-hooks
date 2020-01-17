import React, { useState } from "react";

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addSong(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Song Name:</label>
      <input
        type="text"
        onChange={e => setTitle(e.target.value)}
        value={title}
        required
      />
      <input type="submit" value="Add Song" />
    </form>
  );
};

export default NewSongForm;
