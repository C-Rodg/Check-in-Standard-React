import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import routes from '../routes';
import RootAdmin from './RootAdmin';
import RootCheckin from './RootCheckin';

export default class Root extends Component {
	render() {
		return (
			<Router history={browserHistory} routes={routes} />				
		);
	}
}