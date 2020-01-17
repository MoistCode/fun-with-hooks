import React, { useState } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Almost Home", id: 1 },
    { title: "Memory Gospel", id: 2 },
    { title: "The Wild Darkness", id: 3 }
  ]);

  const addSong = title => {
    setSongs([...songs, { title, id: uuid() }]);
  };

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
