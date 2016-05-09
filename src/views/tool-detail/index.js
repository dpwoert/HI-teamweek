import React, {Component, PropTypes} from 'react';
import Step from './step.js';

export default class Home extends Component {

	render() {
		return (
			<div>
			<div className="media-object">
			  <div className="media-object-section">
			    <div className="thumbnail">
			      <img src= "assets/img/media-object/avatar-1.jpg" />
			    </div>
			  </div>
			  <div className="media-object-section">
			    <h1>Marshmallow Challenge</h1>
			    <p>Im going to improvise. Listen, theres something you should know about me... about inception. An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.</p>
			  </div>
			</div>
				<Step />
			</div>
		);
	}
}
