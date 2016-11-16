import React from 'react';

const RegistrantTile = ({registrant, onRegistrantClick}) => {

	return (
		<li className="tile" onClick={guid => onRegistrantClick(registrant)} >
			<div className="tile-content">
				<div>{registrant.FirstName + ' ' + registrant.LastName}</div>
				<div className="info-small">{registrant.Company}</div>
			</div>
			{registrant.PrePrint ? 
				<span className="icon-preprint">
					<i className="mi-38 material-icons">print</i>
				</span> 
			: ""}
			{registrant.Attended ?
				<span className="icon-attended">
					<i className="mi-38 material-icons">check_box</i>
				</span>
			: ""}
		</li>
	);
};

export default RegistrantTile;