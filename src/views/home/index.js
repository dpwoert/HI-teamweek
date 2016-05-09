import React, {Component, PropTypes} from 'react';
import FilterViz from '../../components/filter-viz.js';
import ToolDetail from '../tool-detail';

export default class Home extends Component {

	render() {

		console.log(this.props)

		return (

				<div className="row">

						<FilterViz {...this.props} />
						{this.props.children}
				</div>

		);
	}
}
