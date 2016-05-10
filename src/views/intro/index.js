import React, {Component, PropTypes} from 'react';

export default class Intro extends Component {

	render() {
		return (

				<div className="intro right-pane">

					<div className="pattern-1" />
					<div className="pattern-2" />

					<div className="logos">
						<span>Made by teams at</span>
						<div>
							<img src="images/hyperisland.png" />
							<img src="images/teamweek.png" />
						</div>
					</div>

					<div className="verticle-center">
						<h1>Tools to run a successful idea</h1>
						<p>
						Are you on a brand new team? Is your current team dysfunctional? Apply
						the #HITeamWeek toolbox if you want help to form a new team or keep an
						existing one running. This website provides you with the tools to work
						well together and have fun.
						</p>
					</div>

				</div>

		);
	}
}
