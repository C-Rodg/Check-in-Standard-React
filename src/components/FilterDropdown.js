import React, { Component } from 'react';
import _ from 'lodash';

const FilterItem = ({filter, onFilterSelect}) => {
	return (
		<li onClick={() => onFilterSelect(filter)}>{filter.name} {filter.selected && <span><i className="material-icons">done</i></span>}</li>
	);
};

export default class FilterDropdown extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dropdownOpen : false
		};

		this.show = this.show.bind(this);
		this.hide = this.hide.bind(this);
	}

	show() {
		this.setState({dropdownOpen: true});
		document.addEventListener('click', this.hide);
	}

	hide() {
		this.setState({dropdownOpen: false});
		document.removeEventListener('click', this.hide);
	}

	render() {

		const filterItems = _.map(this.props.filters, (val, key) => {
			return <FilterItem key={key} filter={val} onFilterSelect={this.props.onFilterSelect} />
		});

		return (
			<div className="filter-container">
				<span onClick={this.show} className="filter-arrow"><i className="material-icons">keyboard_arrow_down</i></span>
				<div className={"filter-dropdown " + (this.state.dropdownOpen ? 'filter-dropdown-open' : 'filter-dropdown-closed')} >
					<ul>
						{filterItems}
					</ul>
				</div>
			</div>
		);
	}
}