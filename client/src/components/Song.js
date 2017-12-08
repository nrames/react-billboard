import React from 'react';

const Song = ({ id, name, updateSong, deleteSong }) => (
  <div>
    <div>
      { name }
    </div>  
    <div>
      <input
        onClick={updateSong(id)}
      />
    </div>
    <div
      onClick={() => deleteSong(id)}
      >
    </div>    
  </div>  
)

export default Song;

