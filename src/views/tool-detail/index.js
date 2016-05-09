import React, {Component, PropTypes} from 'react';
import Step from './step.js';

export default class Home extends Component {

	render() {
		return (
			<div>
			<div className="media-object">
			  <div className="media-object-section">
			    <div className="thumbnail">
			      <img src= "images/stinkyfish.png" />
			    </div>
			  </div>
			  <div className="media-object-section">
				    <h3>Marshmallow Challenge</h3>
				    <h5>An activity about collaboration which teams compete to build a structure 
				    spaghetti and a marshmallow</h5>
				    <p>A team­building activity which teams must compete to build the tallest free­standing structure out of twenty sticks of spaghetti, one yard of tape, one yard of string, and one marshmallow. It emphasizes group communication,leadership dynamics, collaboration, innovation and problem solving strategy. The Marshmallow Challenge was developed by Tom Wujec, who has done the activity hundreds of groups around the world. Visit the Marshmallow Challenge website more information.</p>
			  </div>
			</div>
				<Step />
			</div>
		);
	}
}
