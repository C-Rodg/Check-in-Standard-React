import React from 'react';

const DonutChart = (props) => {
	// Calculate chart dimensions
	const halfsize = (props.size * 0.5);
	const radius = halfsize - (props.strokeWidth * 0.5);
	const circumference = 2 * Math.PI * radius;
	const strokeval = ((props.value * circumference) / 100);
	const dashval = (strokeval + ' ' + circumference);
	const rotateval = 'rotate(-90 ' + halfsize + ',' + halfsize + ')';
	const trackStyle = {strokeWidth : props.strokeWidth};
	const indicatorStyle = {strokeWidth : props.strokeWidth, strokeDasharray : dashval, stroke : props.color };
	
	return (
		<svg width={props.size} height={props.size} className="donutChart">
			<circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackStyle} className="donutChart-track" />
			<circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorStyle} className="donutChart-indicator" />
			<text x={halfsize} y={halfsize} style={{textAnchor: 'middle', fill: props.color}} className="donutChart-text">
				<tspan className="donutChart-text-val">{props.value}</tspan>
				<tspan className="donutChart-text-percent">%</tspan>
				<tspan className="donutChart-text-label" x={halfsize} y={halfsize+10}>{props.donutlabel}</tspan>
			</text>
		</svg>
	);
}

DonutChart.defaultProps = { 
	donutlabel : "",
	value : 0,
	size : 90,
	strokeWidth : 15,
	color : '#009688'
};

export default DonutChart;