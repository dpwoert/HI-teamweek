import React, {Component, PropTypes} from 'react';
import tools from '../../../data/data.js';
import Step from './step.js';
import {Link} from 'react-router';

export default class ToolDetail extends Component {

	getLevel(i){
		switch(parseInt(i)){
			case 1: return 'low';
			case 2: return 'medium';
			case 3: return 'high';
		}
	}

	render() {

		const tool = this.props.params.tool;

		let data = tools.filter((row) => {
			return row.slug === tool;
		});

		data = data[0] || {};

		return (
			<div className="tool-detail right-pane">

				<div className="pattern-1" />
				<div className="pattern-2" />

				<Link to="/" className="link-home" />

				<div className="row">
					<div className="small-12 columns">
						<div className="row first-row">
							<div className="small-12 columns">
								<div className="media-object">
										<div className="thumbnail">
											<img src= "images/stinkyfish.png" />
										</div>
										<div className="media-object-section">
											<h3>{data.name}</h3>
											<h5 className="subheader">{data.byline}</h5>
											<p className="description">{data.description}</p>
										</div>
								</div>
								<hr />
							</div>
						</div>
							<div className="row meta">
								<div className="small-4 columns">
									<h6>Time</h6>
									<p>{data.time[0]}-{data.time[1]}min</p>
								</div>
								<div className="small-4 columns">
									<h6>Group Size</h6>
									<p>{data.group[0]}-{data.group[1]}</p>
								</div>
								<div className="small-4 columns">
									<h6>Materials</h6>
									<ul className="material-list">
										{data.materials.map((material, i) => {
											return <li key={i}>{material}</li>
										})}
									</ul>
								</div>
							</div>
							<div className="row meta">
								<div className="small-4 columns">
									<h6>Experience Level</h6>
									<p>{this.getLevel(data.exp)}</p>
								</div>
								<div className="small-4 columns end">
									<h6>Comfort Zone</h6>
									<p>{this.getLevel(data.comfortZone)}</p>
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
						<div className="row">
							<div className="small-12 columns">
								<h5>References</h5>
								<p>{this.getLevel(data.hyperlinks)}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
