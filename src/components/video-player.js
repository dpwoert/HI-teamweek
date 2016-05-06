import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class VideoPlayer extends Component {

	componentDidMount(){
		const video = ReactDOM.findDOMNode(this);
		video.play();
	}

	render() {

		const ogg = this.props.ogg || this.props.mp4.replace('mp4','ogg');

		return (
			<video className={this.props.className} loop>
				<source src={this.props.mp4} type="video/mp4" />
				<source src={ogg} type="video/ogg" />
			</video>
		);
	}
}
