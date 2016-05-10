import React, {Component, PropTypes} from 'react';
import tools from '../../../data/data.js';
import {Link} from 'react-router';

export default class ListView extends Component {

	scrollTo(){

		var top = window.innerHeight;

		// Internet Explorer and Firefox
		document.documentElement.scrollTop = 0;

		// Chrome
		document.body.scrollTop = 0;

	}

	render() {

		return (
				<div className="list-view left-pane">

					{tools.map((tool, i) => {
						const style = { backgroundImage: 'url(' + tool.icon + ')' };
						return <Link to={'/' + tool.slug} key={i} className="list-view__block" onClick={this.scrollTo}><div>{tool.name}</div><div className="icon" style={style} /></Link>;
					})}

				</div>
		);
	}
}
