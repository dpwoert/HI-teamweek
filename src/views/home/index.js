import React, {Component, PropTypes} from 'react';
import FilterViz from '../../components/filter-viz.js';
import ToolDetail from '../tool-detail';

export default class Home extends Component {

	render() {
		return (
			<div className="home__container">

				<div>
					<FilterViz />
				</div>
				<div>
					<ToolDetail />
				</div>

			</div>
		);
	}
}
