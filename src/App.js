import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
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
        {this.state.videos.length > 0 && (
          <VideoList videos={this.state.videos} />
        )}
      </div>
    );
  }
}

export default App;
