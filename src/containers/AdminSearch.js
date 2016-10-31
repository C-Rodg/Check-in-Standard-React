import React, { Component } from 'react';

import StatsBox from '../components/StatsBox';

export default class AdminSearch extends Component {
	getAttendanceNumbers() {
		// Make call to get attendance numbers and assign them for stats
	}

	render() {
		// TESTING UNTIL SERVICES CREATED
		const TotalAttended = 12000;
		const TotalRegistered = 17741;
		const TotalWalkIn = 35;
		const TotalWalkInAttended = 30;

		return (			
			<div className="stats-wrapper">
				<div className="row">
					<div className="col-xs-5 offset-xs-0-1">
						<StatsBox boxlabel="Total Attended" donutlabel="Attended" total={TotalAttended} percent={ Math.round(TotalAttended / TotalRegistered * 100) || 0} color="#009686" />
					</div>
					<div className="col-xs-5 offset-xs-0-1">
						<StatsBox boxlabel="Total Missing" donutlabel="Missing" total={(TotalRegistered-TotalAttended) || 0} percent={ Math.round((TotalRegistered - TotalAttended) / TotalRegistered * 100) || 0} color="#BA000E" />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-5 offset-xs-0-1">
						<StatsBox boxlabel="Pre-Registered" donutlabel="Pre-Reg" total={(TotalAttended - TotalWalkInAttended) || 0} percent={ Math.round((TotalAttended - TotalWalkInAttended) / TotalAttended * 100 ) || 100} color="#1043A1" />
					</div>
					<div className="col-xs-5 offset-xs-0-1">
						<StatsBox boxlabel="Walk-ins" donutlabel="Walk-ins" total={(TotalWalkInAttended) || 0} percent={ Math.round( TotalWalkInAttended / TotalAttended * 100 ) || 0} color="#F19C00" />
					</div>
				</div>
			</div>
		);
	}
}