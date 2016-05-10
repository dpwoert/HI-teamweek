import React, {Component, PropTypes} from 'react';
import FilterViz from '../../components/filter-viz.js';
import ListView from '../list-view';
import ToolDetail from '../tool-detail';

export default class Home extends Component {

	render() {

		return (

				<div className="row">

						<FilterViz {...this.props} />
						<ListView {...this.props} />
						{this.props.children}
				</div>

		);
	}
}
