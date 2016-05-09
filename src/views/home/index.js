import React, {Component, PropTypes} from 'react';
import FilterViz from '../../components/filter-viz.js';
import ToolDetail from '../tool-detail';

export default class Home extends Component {

	render() {
		return (
				<div className="row">
					
						<FilterViz />
						<ToolDetail />
				</div>
		);
	}
}
