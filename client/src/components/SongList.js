import React from 'react';
import Song from './Song';

const SongList = ({ songs, updateSong, deleteSong }) => (
  <div className="row">
    { songs.map( song =>
      <Song
        key={song.id}
        {...song}
        updateTodo={updateSong}
        deleteTodo={deleteSong}
        />
      )  
    }
  </div>
)

export default SongList;