import React, {Component, PropTypes} from 'react';
import Step from './step.js';

export default class Home extends Component {

	render() {
		return (
			<div className="tool-detail">
				<div className="row">
					<div className="small-12 columns">
						<div className="row">
							<div className="small-12 columns">
								<div className="media-object">
									    <div className="thumbnail">
									      <img src= "images/stinkyfish.png" />
									    </div>
										<div className="media-object-section">
										    <h3>Marshmallow Challenge</h3>
										    <h5 className="subheader">An activity about collaboration which teams compete to build a structure 
										    spaghetti and a marshmallow</h5>
										    <p>A team­building activity which teams must compete to build the tallest free­standing structure out of twenty sticks of spaghetti, one yard of tape, one yard of string, and one marshmallow. It emphasizes group communication,leadership dynamics, collaboration, innovation and problem solving strategy. The Marshmallow Challenge was developed by Tom Wujec, who has done the activity hundreds of groups around the world. Visit the Marshmallow Challenge website more information.</p>
										</div>
								</div>
								<hr />
							</div>
						</div>
							<div className="row meta">
								<div className="small-4 columns">
									<h6>Time</h6>
									<p>XX minutes</p>
								</div>
								<div className="small-4 columns">
									<h6>Group Size</h6>
									<p>Medium</p>
								</div>
								<div className="small-4 columns">
									<h6>Materials</h6>
									<p>stuff</p>
								</div>
							</div>
							<div className="row meta">
								<div className="small-4 columns">
									<h6>Experience Level</h6>
									<p>Low</p>
								</div>
								<div className="small-4 columns end">
									<h6>Comfort Zone</h6>
									<p>Safe</p>
								</div>
							</div>
						<hr />
						<div className="row">
							<div className="small-12 columns">
								<Step />
								<Step />
								<Step />
								<Step />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
