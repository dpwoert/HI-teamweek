import React, {Component, PropTypes} from 'react';

export default class Step extends Component {

	render() {

		const data = this.props.data;
		const number = this.props.number;

		return (
			<div>
				<div className="row">
					<div className="small-12 columns">
						<h4>Step {number}</h4>
						<p>{data}</p>
					</div>
				</div>
			</div>
		);
	}
}
