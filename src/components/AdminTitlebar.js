import React, { Component } from 'react';

export default class AdminTitlebar extends Component {
	render() {
		return (
			<div className="admin-titlebar frow row-start">
				<div className="col-xs-1-2 col-sm-1-6">
					IMAGE
				</div>
				<div className="col-xs-1-6 col-sm-1-12">
					<i className="material-icons">menu</i>
				</div>
				<div className="col-xs-1-3 col-sm-3-4">
					<input type="text" />
					FILTERS
					<i className="material-icons">add</i>
				</div>
			</div>
		);
	}
}