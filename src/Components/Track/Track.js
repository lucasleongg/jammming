import React from 'react';
import './Track.css';

export class Track extends React.Component {
	renderAction() {
		
	}
	
	render() {
		return (
			<div className="Track">
			  <div className="Track-information">
			    <h3>{this.props.name}</h3>
			    <p>{this.props.artist} | {this.props.album}</p>
			  </div>
			  <button className="Track-action">{/*<!-- + or - will go here -->*/}</button>
			</div>
		)
	}
}