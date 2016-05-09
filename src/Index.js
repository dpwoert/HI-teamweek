import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './views/home/';
import Intro from './views/intro/';
import ToolDetail from './views/tool-detail/';
import About from './views/about/';

window.React = React;

render(
	(
		<Router history={browserHistory}>
			<Route path="/" component={Home}>
				<IndexRoute component={Intro}/>
				<Route path="/:tool" component={ToolDetail} />
			</Route>
		</Router>
	), document.getElementById('content')
);
