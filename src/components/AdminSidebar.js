import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AdminSidebar extends Component {
	render() {
		return (
			<div className="admin-sidebar frow row-start">
				<ul className="col-xs-1-12">
					<li><Link to="/checkin" activeClassName="nav-active">
						<i className="material-icons">group</i>
						Registration
					</Link></li>
					<li><Link to="/eval" activeClassName="nav-active">
						<i className="material-icons">edit</i>
						Evaluations
					</Link></li>
					<li><Link to="/admin/search" activeClassName="nav-active">
						<i className="material-icons">search</i>
						Search
					</Link></li>
					<li><Link to="/admin/print" activeClassName="nav-active">
						<i className="material-icons">print</i>
						Print Settings
					</Link></li>
					<li><Link to="/admin/config" activeClassName="nav-active">
						<i className="material-icons">settings</i>
						Configuration
					</Link></li>
				</ul>
			</div>
		);
	}
}