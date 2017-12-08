import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

class SongForm extends React.Component {
  state = { title: '', artist: '', billboardId: 1 }

handleSubmit = (e) => {
  e.preventDefault();
  axios.post(`/api/billboards/${this.state.billboardId}/songs`, {...this.state })
}

handleChange = (e) => {
  const { name, value } = e.target;
  this.setState({[name]: value});
}

  render () {
    const { title, artist } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Title</label>
          <input value={title} 
          onChange={this.handleChange}
          placeholder='Song Title'
          name='title'
          />
        </Form.Field>
        <Form.Field>
          <label>Artist</label>
          <input value={artist}
          onChange={this.handleChange}
          placeholder='Artist'
          name='artist'
          />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default SongForm;