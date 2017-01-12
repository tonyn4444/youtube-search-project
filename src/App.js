import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyCtxyJrbhoHPkDNV3ea75xtsXM2HowkRyY';

// YTSearch({term: 'surfboards', key: API_KEY}, function(data) {
// 	console.log(data);
// })


class App extends Component {
	constructor(props) {
		super(props)

		this.state = { videos: [], selectedVideo: null }

		YTSearch({key: API_KEY, term: "surfboards"}, (videos) => {
			this.setState({videos, selectedVideo: videos[0]})
		});
	}

  render() {
    return (
    	<div>
	      <SearchBar />
	      <VideoDetail video={this.state.selectedVideo}/>
	      <VideoList 
	      	videos={this.state.videos} 
	      	selectedVideo={(selectedVideo) => this.setState({selectedVideo})}
	      />
      </div>
    );
  }
}

export default App;
