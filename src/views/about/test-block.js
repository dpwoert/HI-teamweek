import React, {Component, PropTypes} from 'react';

export default class Block extends Component {

	render() {
		return (
			<div>
				{this.props.name}
			</div>
		);
	}
}
