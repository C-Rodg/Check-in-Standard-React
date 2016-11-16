import React, { Component } from 'react';

export default class FormSelect extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectVal : this.props.valueOf
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}	

	componentWillReceiveProps(nextProps) {
		console.log("RECEIVING PROPS");
		if(this.props.atGuid !== nextProps.atGuid){
			this.setState({
				selectVal : nextProps.valueOf
			});
		}
	}

	handleChange(event) {
		if(this.props.isPickMany) {
			return false;
		} else {
			this.props.onUpdateFormData([event.target.value], this.props.tagName);
			this.setState({
				selectVal : [event.target.value]
			});
		}
		return false;		
	}

	handleClick(event) {
		if(this.props.isPickMany) {
			if(this.state.selectVal.length > 0){
				let newArr = this.state.selectVal.concat();
				if(this.state.selectVal.indexOf(event.target.value) > -1){			
					newArr = this.state.selectVal.filter((item) => {
						return item !== event.target.value; 
					});		
				} else {
					newArr.push(event.target.value);
				}
				this.props.onUpdateFormData(newArr, this.props.tagName);
				this.setState({
					selectVal : newArr
				});
			} else {
				this.props.onUpdateFormData([event.target.value], this.props.tagName);
				this.setState({
					selectVal : [event.target.value]
				});
			}
		} else {
			return false;
		}
	}

	render() {
		const options = this.props.options.map((response) => {
			return (
				<option value={response.id} disabled={response.disabled} >{response.prompt}</option>
			);
		});

		return (
			<div className={this.props.colSize}>
				<div className={"form-group " + (this.props.isRequired ? "req" : "")}>
					<label for={this.props.tagName}>{this.props.questionPrompt}</label>
					{ this.props.isPickMany ? 
						<select className="form-control multi-select" 
							id={this.props.tagName} 
							disabled={this.props.isDisabled} 
							multiple={this.props.isPickMany} 
							value={this.state.selectVal} 							
							onClick={this.handleClick}
						>
							{options}
						</select>
						:
						<select className="form-control" 
							id={this.props.tagName} 
							disabled={this.props.isDisabled} 
							multiple={this.props.isPickMany} 
							value={this.state.selectVal} 
							onChange={this.handleChange} 
						>
							<option>- Select -</option>
							{options}
						</select>
					}																			
				</div>
			</div>
		);
	}
};