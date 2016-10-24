import React, { Component } from 'react';

import AdminTitlebar from './AdminTitlebar';
import AdminSidebar from './AdminSidebar';

export default class RootAdmin extends Component {
	render() {
		return (
			<div className="root-admin">
				<AdminTitlebar />
				<AdminSidebar />
				{this.props.children}
			</div>
		);
	}
}