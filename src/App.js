import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import youtube from './apis/youtube';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
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

  onVideoSelect = video => {
    this.setState({
      selectedVideo: video
    });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar searchVideo={this.searchVideo} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              {this.state.selectedVideo && (
                <VideoDetail video={this.state.selectedVideo} />
              )}
            </div>
            <div className='five wide column'>
              {this.state.videos.length > 0 && (
                <VideoList
                  videos={this.state.videos}
                  onVideoSelect={this.onVideoSelect}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
