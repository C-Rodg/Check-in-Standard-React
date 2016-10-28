import React from 'react';
import { Link } from 'react-router';

const AdminSidebar = (props) => {
	return (
			<div className="admin-sidebar">
				<ul className="frow row-start">
					<Link to="/checkin" activeClassName="nav-active">
						<i className="material-icons">group</i>
						<span className="nav-icon-label">Registration</span>
					</Link>
					<Link to="/eval" activeClassName="nav-active">
						<i className="material-icons">edit</i>
						<span className="nav-icon-label">Evaluations</span>
					</Link>
					<Link to="/admin/search" activeClassName="nav-active">
						<i className="material-icons">search</i>
						<span className="nav-icon-label">Search</span>
					</Link>
					<Link to="/admin/print" activeClassName="nav-active">
						<i className="material-icons">print</i>
						<span className="nav-icon-label">Print Settings</span>
					</Link>
					<Link to="/admin/config" activeClassName="nav-active">
						<i className="material-icons">settings</i>
						<span className="nav-icon-label">Configuration</span>
					</Link>
				</ul>
			</div>
		);
}

export default AdminSidebar;