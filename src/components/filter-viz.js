import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class FilterViz extends Component {

	componentDidMount(){
		const container = ReactDOM.findDOMNode(this);
		const canvas = container.querySelector('.filter-viz__canvas');

		
	}

	render() {

		return (
			<div className="filter-viz__container">
				<canvas className="filter-viz__canvas" />
			</div>
		);
	}
}
