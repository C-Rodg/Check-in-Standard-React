import React, { Component } from 'react';

export default class FormInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputVal : this.props.valueOf
		};
		this.handleChange = this.handleChange.bind(this);
	}

	// Being called too much??
	componentWillReceiveProps(nextProps) {
		if(this.props.atGuid !== nextProps.atGuid){
			this.setState({
				inputVal : nextProps.valueOf
			});
		}
	}

	handleChange(event) {		
		this.props.onUpdateFormData(event.target.value, this.props.tagName);
		this.setState({inputVal : event.target.value});
	}

	render() {
		return (
			<div className="col-xs-12" className={this.props.colSize}>
				<div className={"form-group " + (this.props.isRequired ? "req" : "")}>
					<label for={this.props.tagName}>{this.props.questionPrompt}</label>
					<input className="form-control" 
						id={this.props.tagName} 
						type="text" 
						placeholder={"Enter " + this.props.questionPrompt} 
						disabled={this.props.isDisabled} 						
						onChange={this.handleChange}
						value={this.state.inputVal}
					/>
				</div>
			</div>
		);
	}
};
