import React, { Component } from 'react';
import { connect } from 'react-redux';

import StatsBox from '../components/StatsBox';
import RegistrantTileList from '../components/RegistrantTileList';
import AdminPreRegForm from '../components/AdminPreRegForm';

import { resetSearchList, loadRegistrant, clearCurrentRegistrant } from '../actions/registrants';
import { getRegistrationStats } from '../actions/settings';

// TESTING
import CONFIG from '../testing/TEST_EVENT_SETTINGS.js';
console.log(CONFIG);
class AdminSearch extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	componentDidMount() {
		// Is this being called too much?
		this.props.checkAttendeeStats();
	}

	componentWillReceiveProps(nextProps) {
		
	}

	render() {
		let TotalAttended = 0,
			TotalRegistrants = 0,
			TotalWalkIn = 0,
			TotalWalkInAttended = 0;
		if(this.props.registrantStats){
			({ TotalAttended, TotalRegistrants, TotalWalkIn, TotalWalkInAttended } = this.props.registrantStats);
		}
		return (
			<div>	
				{ !this.props.searching && !this.props.currentRegistrant &&		
					<div className="stats-wrapper">
						<div className="row">
							<div className="col-xs-5 offset-xs-0-1">
								<StatsBox boxlabel="Total Attended" donutlabel="Attended" total={TotalAttended} percent={ Math.round(TotalAttended / TotalRegistrants * 100) || 0} color="#009686" />
							</div>
							<div className="col-xs-5 offset-xs-0-1">
								<StatsBox boxlabel="Total Missing" donutlabel="Missing" total={(TotalRegistrants-TotalAttended) || 0} percent={ Math.round((TotalRegistrants - TotalAttended) / TotalRegistrants * 100) || 0} color="#BA000E" />
							</div>
						</div>
						<div className="row">
							<div className="col-xs-5 offset-xs-0-1">
								<StatsBox boxlabel="Pre-Registered" donutlabel="Pre-Reg" total={(TotalAttended - TotalWalkInAttended) || 0} percent={ Math.round((TotalAttended - TotalWalkInAttended) / TotalAttended * 100 ) || 0} color="#1043A1" />
							</div>
							<div className="col-xs-5 offset-xs-0-1">
								<StatsBox boxlabel="Walk-ins" donutlabel="Walk-ins" total={(TotalWalkInAttended) || 0} percent={ Math.round( TotalWalkInAttended / TotalAttended * 100 ) || 0} color="#F19C00" />
							</div>
						</div>
					</div>
				}

				<div className="search-results-wrapper row">
					{	this.props.searching && 
						<div className="col-xs-5 offset-xs-0-1">
							<div className="search-results-list">
								<div className="card-head">
									<header>Search Results</header>
									<div className="exit" onClick={this.props.resetSearchList}><i className="material-icons">clear</i></div>
								</div>
								<div className="card-body">
									{(this.props.registrantList && this.props.registrantList.length > 0) ?
									<RegistrantTileList registrantList={this.props.registrantList} onRegistrantClick={this.props.loadRegistrant} />	: 
									<p className="empty-list">
										{this.props.searchError ? "Sorry, there was an issue with your search..." : "Sorry, no registrants found..."}
									</p>						
									}
								</div>								
							</div>
						</div>
					}

					{ (this.props.currentRegistrant && !this.props.walkInMode) &&
						<AdminPreRegForm searchOpen={this.props.searching} registrant={this.props.currentRegistrant} onCloseRegistrant={this.props.clearCurrentRegistrant} formConfig={CONFIG.fullDefinition}/>
					}

				</div>

			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		registrantStats : state.settings.registrationStats,
		registrantList : state.registrants.registrantList,
		currentRegistrant : state.registrants.currentRegistrant,
		searchError : state.registrants.searchError,
		searching : state.registrants.searching,
		walkInMode : state.registrants.walkInMode
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		checkAttendeeStats : data => dispatch(getRegistrationStats(data)),
		resetSearchList : data => dispatch(resetSearchList(data)),
		loadRegistrant : registrant => dispatch(loadRegistrant(registrant)),
		clearCurrentRegistrant : registrant => dispatch(clearCurrentRegistrant(registrant))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminSearch);