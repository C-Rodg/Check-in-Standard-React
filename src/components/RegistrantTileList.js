import React from 'react';

import RegistrantTile from './RegistrantTile';

const RegistrantTileList = (props) => {

	const Registrants = props.registrantList.map((registrant) => {
		return (
			<RegistrantTile  key={registrant.AttendeeGuid} onRegistrantClick={props.onRegistrantClick} registrant={registrant} />
		);
	});

	return (
		<ul>
			{Registrants}
		</ul>
	);
};

export default RegistrantTileList;