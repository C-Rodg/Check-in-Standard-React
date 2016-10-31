import React from 'react';

import DonutChart from './DonutChart';

const StatsBox = (props) => {
	return (
		<div className="stats-box clearfix" style={{borderRight: '5px solid ' + props.color}}>
			<DonutChart value={props.percent} color={props.color} donutlabel={props.donutlabel} />
			<div className="stats-content">
				<h1>{props.boxlabel}</h1>
				<p>{props.total}</p>
			</div>
		</div>
	);
};

StatsBox.defaultProps = {
	boxlabel : "",
	donutlabel : "",
	total : 0,
	percent : 0,
	color : "#333"
};

export default StatsBox;