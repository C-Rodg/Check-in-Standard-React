import React from 'react';
import { Route, IndexRedirect} from 'react-router';
import App from './components/App';
import RootAdmin from './components/RootAdmin';
import RootEval from './components/RootEval';
import RootCheckin from './components/RootCheckin';
import AdminPrint from './components/AdminPrint';
import AdminSearch from './components/AdminSearch';
import AdminConfig from './components/AdminConfig';

export default (
	<Route path="/" component={App}>		
		<IndexRedirect to="/admin" />
		<Route path="admin" component={RootAdmin}>
			<IndexRedirect to="search" />
			<Route path="print" component={AdminPrint} />
			<Route path="search" component={AdminSearch} />
			<Route path="config" component={AdminConfig} />
		</Route>
		<Route path="checkin" component={RootCheckin} />
		<Route path="eval" component={RootEval} />		
	</Route>
);