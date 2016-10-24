import React, { Component } from 'react';

const App = ({ children }) => {
	return (
		<div className="root-router">
			{ children }
		</div>
	);	
};

export default App;

