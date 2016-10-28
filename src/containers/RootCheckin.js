import React, { Component } from 'react';
import { Link } from 'react-router';

export default class RootCheckin extends Component {
	render() {
		return (
			<div className="root-checkin">
				<p>ROOT CHECKIN</p>
				<Link to="/admin/search">Back to Admin</Link>
			</div>
		);
	}
}