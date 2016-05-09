import React, {Component, PropTypes} from 'react';
import FilterViz from '../../components/filter-viz.js';
import ToolDetail from '../tool-detail';

export default class Home extends Component {

	render() {
		return (
				<div className="row">
					<div className="small-12 medium-6 columns">
						<div>
							<FilterViz />
						</div>
					</div>			
					<div className="small-12 medium-6 columns">
						<div>
							<ToolDetail />
						</div>
					</div>
				</div>
		);
	}
}
