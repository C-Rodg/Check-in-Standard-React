import React from 'react';
import { Route, IndexRedirect} from 'react-router';
import App from './components/App';
import RootAdmin from './containers/RootAdmin';
import RootEval from './containers/RootEval';
import RootCheckin from './containers/RootCheckin';
import AdminPrint from './containers/AdminPrint';
import AdminSearch from './containers/AdminSearch';
import AdminConfig from './containers/AdminConfig';

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