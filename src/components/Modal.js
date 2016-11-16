import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

const KEYCODES = {
	ESCAPE : 27
};

class Modal extends Component {
	constructor(props){
		super(props);
		this.modalNode = null;
		this.portal = null;
		this.renderModal = this.renderModal.bind(this);
	}

	componentDidMount() {
		console.log("MOUNTING MODAL");
		// if(this.props.isOpen){
		// 	this.openPortal();
		// }
		this.modalNode = document.createElement('div');
		this.modalNode.className = 'modal ' + this.props.modalClassName;
		document.body.appendChild(this.modalNode);
		this.renderModal(this.props);
	}

	openPortal(props = this.props) {

	}

	componentWillUnmount(){
		console.log("UNMOUNTING MODAL");
		ReactDOM.unmountComponentAtNode(this.modalNode);
		document.body.removeChild(this.modalNode);
		document.body.classList.remove('modal--open');
	}

	renderModal(props) {
		if(props.isOpen){
			document.body.classList.add('modal--open');
		} else {
			document.body.classList.remove('modal--open');
		}

		this.portal = ReactDOM.unstable_renderSubtreeIntoContainer(this, props.children, this.modalNode);
	}

	render() {
		return React.DOM.noscript();
	}
}

Modal.defaultProps = {
	isOpen : false,
	modalClassName : ''
};

export default Modal;