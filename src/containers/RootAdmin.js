import React, { Component } from 'react';
//import { connect } from 'react-redux';

import AdminTitlebar from './AdminTitlebar';
import AdminSidebar from '../components/AdminSidebar';

export default class RootAdmin extends Component {
	constructor (props) {
		super(props);

		// Set UI state
		this.state = {
			menuOpen : true
		};

		// Bind methods to 'this'
		this.handleMenuToggle = this.handleMenuToggle.bind(this);
	}

	handleMenuToggle() {	
		this.setState({
			menuOpen: !this.state.menuOpen
		});
	}

	render() {
		return (
			<div className="root-admin">
				<AdminTitlebar onMenuToggle={this.handleMenuToggle} />
				<div className={"root-content-sidebar " + (this.state.menuOpen ? '' : 'menu-closed')}>
					<AdminSidebar />
					<div className="root-admin-content">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

// export default connect(

// )(RootAdmin);