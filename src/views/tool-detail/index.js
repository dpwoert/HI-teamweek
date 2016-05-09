import React, {Component, PropTypes} from 'react';
import Step from './step.js';

export default class Home extends Component {

	render() {
		return (
			<div>
				<Title name={dynamicTitle} />
				<Short-description />
				<Step />
			</div>
		);
	}
}
