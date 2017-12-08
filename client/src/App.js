import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import axios from 'axios'
import SongForm from './components/SongForm';
import SongList from './components/SongList';

class App extends Component {
  state = { songs: [] }

  componentDidMount() {
    axios.get('./api/songs')
      .then( res => this.setState({ songs: res.data }) )
  }

  createSong = (name) => {
    const song = { name }
    axios.post('/api/songs', { song })
      .then( res => {
        const { songs } = this.state;
        this.setState({ songs: [...songs, res.data] })
      })
  }

  updateSong = (id) => {
    axios.put(`/api/songs/${id}`)
      .then( res => {
        let songs = this.state.songs.map( t => {
          if (t.id === id)
            return res.data;
          return t;  
        });

        this.setState({ songs });
      })
  }

  deleteSong = (id) => {
    axios.delete(`api/songs/${id}`)
    .then( () )
    const { songs } = this.state;
    this.setState({ songs: songs.filter( t => t.id !== id ) })
  }

  render() {
    return (
      <div className="container">
        <SongForm addSong={this.createSong} />
        <SongList
        songs={this.state.songs}
        updateSong={this.updateSong}
        deleteSong={this.deleteSong}
        />
      </div>  
    );
  }
}

export default App;