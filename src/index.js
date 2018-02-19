import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyDSWnWlVHNltLJeUozAb-R7-seXpbGFBEQ';



const app = document.getElementById('container')

class HolaMundi extends Component {
	constructor(props){
		super(props);
		this.state = { 
			videos: [],
			selectedVideo: null
		 };

		this.videoSearch('impossible');
	}
	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({//This is so to have some initial data
				videos: videos,
				selectedVideo: videos[0]
			});
		})
	}
	render(){
		const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300)//created an arrow function and pass it to debounce and returns a new function that can only be called every 300 miliseconds
		return (
		<div> 
			< SearchBar onSearchTermChange={videoSearch}/>
			<VideoDetail video={this.state.selectedVideo} />
			<VideoList 
			 onVideoSelect={selectedVideo => this.setState({selectedVideo})} // We defined a function that just update app state, we pass it as a property to VideoList
			videos={this.state.videos} />
		</div>
		)	
	}
	
}

//Take this component's generate HTML and put it
// on the page (in DOM)
ReactDOM.render(<HolaMundi />, app)