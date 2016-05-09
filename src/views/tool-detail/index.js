import React, {Component, PropTypes} from 'react';
import tools from '../../../data/test-data.js';
import Step from './step.js';

export default class ToolDetail extends Component {

	render() {

		const tool = this.props.params.tool;
		console.log(tool);

		let data = tools.filter((row) => {
			return row.slug === tool;
		});

		data = data[0] || {};

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
										    <h3>{data.name}</h3>
										    <h5 className="subheader">{data.byline}</h5>
										    <p>{data.description}</p>
										</div>
								</div>
								<hr />
							</div>
						</div>
							<div className="row meta">
								<div className="small-4 columns">
									<h6>Time</h6>
									<p>{data.time}</p>
								</div>
								<div className="small-4 columns">
									<h6>Group Size</h6>
									<p>{data.group}</p>
								</div>
								<div className="small-4 columns">
									<h6>Materials</h6>
									<p>{data.materials}</p>
								</div>
							</div>
							<div className="row meta">
								<div className="small-4 columns">
									<h6>Experience Level</h6>
									<p>{data.exp}</p>
								</div>
								<div className="small-4 columns end">
									<h6>Comfort Zone</h6>
									<p>{data.comfortZone}</p>
								</div>
							</div>
						<hr />
						<div className="row">
							<div className="small-12 columns">
								{data.steps.map((step, i) => {
									return <Step data={step} number={i+1} key={i} />
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
