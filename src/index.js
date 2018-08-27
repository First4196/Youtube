import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCcD51hH8s5Dc4Rqt-uD3PDWDtRZi1MXpc';

//function component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('superman');
  }

  videoSearch(term) {
    YTSearch(
      {
        key: API_KEY,
        term: term
      },
      videos => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      }
    );
  }

  render() {
    // Debounce delay function from getting invoke rapidly
    const videoSearch = _.debounce(term => this.videoSearch(term), 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          // Provide function onVideoSelect(video) for VideoList to be able to change state of App
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

//render App on class container in index.html
ReactDOM.render(<App />, document.querySelector('.container'));
