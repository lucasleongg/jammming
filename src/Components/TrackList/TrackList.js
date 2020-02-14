import React from 'react';
import './TrackList.css';
import {Track} from "../Track/Track";

export class TrackList extends React.Component {
	render() {
		const trackList = this.props.tracks;
		
		
		return (
			<div className="TrackList">
			{trackList.map((track, index) => 
					<Track key={track.id} name={track.name} artist={track.artist} album={track.album}/>
				
			)}
			</div>
		)
	}
}