import React, { Component } from 'react';
import _ from 'lodash';

import FormInput from './FormInput';
import FormSelect from './FormSelect';
import Modal from './Modal';

function parseXmlString(str) {
	let parser, xmlDoc;
	if (window.DOMParser){
		parser = new DOMParser();
		xmlDoc = parser.parseFromString(str, 'text/xml');
	} else {
		xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
		xmlDoc.async = false;
		xmlDoc.loadXml(txt);
	}
	return xmlDoc;
}

function getTextFromXml(responsesElement, tagName) {
	let element = responsesElement.getElementsByTagName(tagName)[0];
	if(element && element.childNodes[0]){
		return element.childNodes[0].nodeValue;
	}
	return "";
}

function getPickFromXml(responsesElement, tagName) {
	let element = responsesElement.getElementsByTagName(tagName);
	if(element && element.length > 0){
		return true;
	}
	return false;
}

export default class AdminPreRegForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			changes : false,
			formData : {},
			saveModalOpen : false
		};
		console.log(props);
		this.handleCloseRegistrant = this.handleCloseRegistrant.bind(this);
		this.generateForm = this.generateForm.bind(this);
		this.updateFormData = this.updateFormData.bind(this);
		this.closeSaveModal = this.closeSaveModal.bind(this);
	}

	testAlert() {
		console.log("HEYYY!!!!!!!!!*#(@*!");
		console.log(this.state.formData);
	}

	closeSaveModal(){
		this.setState({
			saveModalOpen : false
		});
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.registrant !== nextProps.registrant){
			this.setState({
				changes : false,
				formData : {},
				saveModalOpen : false
			});
		}
	}

	componentWillUnmount() {
		console.log("UNMOUNTING");
	}

	handleCloseRegistrant(){
		if(this.state.changes){
			this.setState({
				saveModalOpen : true
			});
		} else {
			this.props.onCloseRegistrant();
		}
	}

	updateFormData(value, tag) {
		let newDefinitionObj = Object.assign({}, this.state.formData);
		newDefinitionObj[tag] = value;
		this.setState({
			changes : true,
			formData : newDefinitionObj
		});
	}

	generateForm() {
		const COL_SIZE = (this.props.searchOpen ? "col-xs-12" : "col-xs-6");
		if(!this.props.registrant){
			return;
		}
		let surveyDataDoc = parseXmlString(this.props.registrant.SurveyData);
		let rootElement = surveyDataDoc.firstChild;
		let responsesElement = rootElement.firstChild;
		// TODO: Find way of generating them in order?
		let textQuestions = [];
		let pickoneQuestions = [];
		let pickmanyQuestions = [];
		const def = this.props.formConfig;
		const textContainers = Object.keys(def).filter((qc) => {
			return def[qc].type === 'T';
		});
		const pickoneContainers = Object.keys(def).filter((qc) => {
			return def[qc].type === 'O' && def[qc].pages.hasOwnProperty('admin');
		});
		const pickmanyContainers = Object.keys(def).filter((qc) => {
			return def[qc].type === 'M' && def[qc].pages.hasOwnProperty('admin');
		});
		textContainers.forEach((textContainer) => {
			const responses = def[textContainer].responses;
			textQuestions = textQuestions.concat(Object.keys(responses).filter((item) => {
				return responses[item].pages.hasOwnProperty('admin');
			}).map((item) => {
				let value = getTextFromXml(responsesElement, item);				
				return <FormInput key={item}
							isDisabled={responses[item].pages.admin.disabled}
							isRequired={responses[item].pages.admin.required}
							tagName={item}
							questionPrompt={responses[item].prompt}
							valueOf={value}
							colSize={COL_SIZE}
							onUpdateFormData={this.updateFormData}
							atGuid={this.props.registrant.AttendeeGuid}
						/>;
			}));
		});
		pickoneContainers.forEach((pickoneContainer) => {
			const questionObj = def[pickoneContainer];
			let value = "";
			const options = Object.keys(questionObj.responses).filter((response) => {
				return questionObj.responses[response].pages.hasOwnProperty('admin');
			}).map((tagVal) => {	
				if(getPickFromXml(responsesElement, tagVal))	{
					value = tagVal;
				}
				return {
					id : tagVal,
					prompt : questionObj.responses[tagVal].prompt,
					disabled : questionObj.responses[tagVal].pages.admin.disabled
				};
			});
			pickoneQuestions = pickoneQuestions.concat(
				<FormSelect key={pickoneContainer} 
					tagName={pickoneContainer}
					questionPrompt={questionObj.prompt}
					isRequired={questionObj.pages.admin.required}
					isDisabled={questionObj.pages.admin.disabled}
					options={options}
					isPickMany={false}
					valueOf={value}	
					colSize={COL_SIZE}
					onUpdateFormData={this.updateFormData}
					atGuid={this.props.registrant.AttendeeGuid}	
				/>
			);
		});
		pickmanyContainers.forEach((pickmanyContainer) => {
			const questionObj = def[pickmanyContainer];
			let values = [];
			const options = Object.keys(questionObj.responses).filter((response) => {
				return questionObj.responses[response].pages.hasOwnProperty('admin');
			}).map((tagVal) => {
				if(getPickFromXml(responsesElement, tagVal)) {
					values.push(tagVal);
				}
				return {
					id : tagVal,
					prompt : questionObj.responses[tagVal].prompt,
					disabled : questionObj.responses[tagVal].pages.admin.disabled
				};
			});
			pickmanyQuestions = pickmanyQuestions.concat(
				<FormSelect key={pickmanyContainer}
					tagName={pickmanyContainer}
					questionPrompt={questionObj.prompt}
					isRequired={questionObj.pages.admin.required}
					isDisabled={questionObj.pages.admin.disabled}
					options={options}
					valueOf={values}
					isPickMany={true}
					colSize={COL_SIZE}
					onUpdateFormData={this.updateFormData}
					atGuid={this.props.registrant.AttendeeGuid}
				/>
			);
		});
		return [].concat(textQuestions, pickoneQuestions, pickmanyQuestions);
	}

	render() {
		return (
			<div className={ "offset-xs-0-1 " + (this.props.searchOpen ? "col-xs-5" : "col-xs-10")}>
				<div className="preReg-form">
					<div className="card-head">
						<header>
							Existing Survey
							<span className="registrant-settings">
								<i className={'material-icons ' + (this.props.registrant.Attended ? 'onList' : '')}>check_circle</i>
								<i className={'material-icons ' + (this.props.registrant.PrePrint ? 'onList' : '')}>print</i>
							</span>
						</header>
						<div className="exit" onClick={this.props.onCloseRegistrant}><i className="material-icons">clear</i></div>
					</div>
					<div className="card-body">
						<div className="row">
							{this.generateForm()}
						</div>


						<div className="survey-controls">									
							<div className="row">
								<div className={ "text-center " + (this.props.searchOpen ? "col-xs-12" : "col-xs-6")}>
									<button className="btn btn-flat btn-full admin-save">
										Save <i className="material-icons">save</i>
									</button>
								</div>
								<div className={ "text-center " + (this.props.searchOpen ? "col-xs-12" : "col-xs-6")}>
									<button className="btn btn-full admin-print bg-validar col-white">
										Print <i className="material-icons">print</i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Modal isOpen={this.state.saveModalOpen} modalClassName={"modal-confirm-leaving"}>
					<div className="overlay">
						<div className="content">
							<div className="content-body">
								<div>
									<h3>You have unsaved changes. Are you sure you want to leave?</h3>
								</div>	
								<div className="row controls">
									<div className="col-xs-6">
										<button className="btn btn-flat btn-full btn-norm" onClick={this.closeSaveModal}>Cancel</button>
									</div>
									<div className="col-xs-6">
										<button className="col-xs-6 btn bg-validar col-white btn-full btn-norm">Continue</button>
									</div>
								</div>
							</div>
						</div>										
					</div>					
				</Modal>
			</div>
		);
	}
};
