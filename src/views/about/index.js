import React, {Component, PropTypes} from 'react';
import Block from './test-block.js';

export default class About extends Component {

	render() {
		return (
			<div className="about">
				<Block name="test" />
			</div>
		);
	}
}
