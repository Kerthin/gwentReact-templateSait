import React from 'react';
import TextFilter from './TextFilter/TextFilter';
import RadioButtonProvStart from './RadioButtonProvStart/RadioButtonProvStart';
import ProvisionFilter from './ProvisionFilter/ProvisionFilter';

import './TopFilter.scss';

class TopFilter extends React.Component {
	constructor(props) {
		super()
		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
		this.handleInProvChange = this.handleInProvChange.bind(this);
	}

	handleFilterTextChange(e) {
		this.props.onFilterTextChange(e.target.value);
	}

	handleInProvChange(e) {
		this.props.onInProvChange(e.target.value);
	}

	render() {
		return (
			<div className='cardListWrap__filterBlock'>
				<div onClick={this.props.onSelectMenu} className={`filterBlock__popup ${this.props.onSelectMenuClass}`}></div>
				<div className="filterBlock">
					<TextFilter value={this.props.filterText} onChange={this.handleFilterTextChange} />
					<RadioButtonProvStart checked={this.props.inProvOnly} onChange={this.handleInProvChange} />
					<ProvisionFilter checked={this.props.inProvOnly} onChange={this.handleInProvChange} />
				</div>
			</div>
		);
	}
}

export default TopFilter;