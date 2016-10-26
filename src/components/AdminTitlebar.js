import React, { Component } from 'react';

export default class AdminTitlebar extends Component {
	render() {
		return (
			<div className="admin-titlebar frow nowrap flex-align-center">
				<img src={require("../static/validar-logo.png")} alt="Validar" />
				<span className="titlebar-menu-toggle" onClick={this.props.onMenuToggle} ><i className="material-icons">menu</i></span>
				<div className="titlebar-content">
					<div className="frow row-end">								
						<div className="col-xs-1-2">
							<input type="text"/>
							<span><i className="material-icons">keyboard_arrow_down</i></span>
						</div>
						<span className="text-right col-xs-1-12"><i className="material-icons">add</i></span>
					</div>
				</div>
			</div>
		);
	}
}