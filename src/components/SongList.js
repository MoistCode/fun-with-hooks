import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Almost Home", id: uuid() },
    { title: "Memory Gospel", id: uuid() },
    { title: "The Wild Darkness", id: uuid() }
  ]);

  const addSong = title => {
    setSongs([...songs, { title, id: uuid() }]);
  };

  useEffect(() => {
    
  });

  return (
    <div className="song-list">
      <NewSongForm addSong={addSong} />
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default SongList;
