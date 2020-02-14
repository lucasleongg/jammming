import React from 'react';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: [
				{
					name: "Lucas's Song", 
					artist: "Lucas", 
					album: "Lucas's Album", 
					id: "1"
				},
				{
					name: "Peter's Song", 
					artist: "Peter", 
					album: "Peter's Album", 
					id: "2"
				}
			],
			playlistName: "BEST PLAYLIST",
			playlistTracks: [
				{
					name: "BEST SONG",
					artist: "BEST ARTIST",
					album: "BEST ALBUM",
					id: "3"
				}
			]
		};
	}
	
	render() {
	  return (
		<div>
		  	<h1>Ja<span className="highlight">mmm</span>ing</h1>
		  	<div className="App">
		  		<SearchBar/>
	  			<div className="App-playlist">
	  				<SearchResults searchResults={this.state.searchResults}/>
	  				<Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
				</div>
			</div>
		</div>
	  );
	}
}

export default App;
