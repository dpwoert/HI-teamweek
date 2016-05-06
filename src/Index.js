import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './views/home/';
import About from './views/about/';

window.React = React;

render(
	(
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}/>
				<Route path="/about-us" component={About} />
			</Route>
		</Router>
	), document.getElementById('content')
);
