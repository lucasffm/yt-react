import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';

class App extends Component {
  state = {
    videos: []
  };

  searchVideo = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items
    });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar searchVideo={this.searchVideo} />
        <p>I Have {this.state.videos.length} videos</p>
      </div>
    );
  }
}

export default App;
