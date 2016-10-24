import React, { Component } from 'react';
import { Link } from 'react-router';

export default class RootEval extends Component {
	render() {
		return (
			<div className="root-eval">
				<p>EVALUATION ROOT</p>
				<Link to="/admin/search">Back to Admin</Link>
			</div>
		);
	}
}