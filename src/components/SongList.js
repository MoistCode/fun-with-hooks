import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Almost Home", id: uuid() },
    { title: "Memory Gospel", id: uuid() },
    { title: "The Wild Darkness", id: uuid() }
  ]);

  const [age, setAge] = useState(20);

  const addSong = title => {
    setSongs([...songs, { title, id: uuid() }]);
  };

  useEffect(() => {
    console.log('only run this when songs are changed');
  }, [songs]);

  useEffect(() => {
    console.log('only run this when age is changed');
  }, [age]);

  return (
    <div className="song-list">
      <NewSongForm addSong={addSong} />
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
    <button onClick={() => setAge(age + 1)}>Add one to age: {age}</button>
    </div>
  );
};

export default SongList;
