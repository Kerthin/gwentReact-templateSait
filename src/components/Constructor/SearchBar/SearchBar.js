import React from 'react';
import FactionFilterWrap from './FactionFilterWrap/FactionFilterWrap';
import TypeFilterWrap from './TypeFilterWrap/TypeFilterWrap';
import BorderFilterWrap from './BorderFilterWrap/BorderFilterWrap';
import CostFilterWrap from './CostFilterWrap/CostFilterWrap';

import './SearchBar.scss';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		
		this.handleInUsualChange = this.handleInUsualChange.bind(this);
		this.handleInRareChange = this.handleInRareChange.bind(this);
		this.handleInEpicChange = this.handleInEpicChange.bind(this);
		this.handleInLegendaryChange = this.handleInLegendaryChange.bind(this);
		
		this.handleInFractionChange = this.handleInFractionChange.bind(this);
		this.handleInBorderChange = this.handleInBorderChange.bind(this);
		this.handleInTypeChange = this.handleInTypeChange.bind(this);
	}
	
	handleInUsualChange(e) {
		this.props.onInUsualChange(e.target.checked);
	}
	handleInRareChange(e) {
		this.props.onInRareChange(e.target.checked);
	}
	handleInEpicChange(e) {
		this.props.onInEpicChange(e.target.checked);
	}
	handleInLegendaryChange(e) {
		this.props.onInLegendaryChange(e.target.checked);
	}
	

	handleInFractionChange(e) {
		this.props.onInFractionChange(e.target.value);
	}
	handleInBorderChange(e) {
		this.props.onInBorderChange(e.target.value);
	}
	handleInTypeChange(e) {
		this.props.onInTypeChange(e.target.value);
	}
	
	render() {
		return (
			<div className={`filterListWrap ${this.props.moc}`}>
				<div className='contentWrap'>
					<FactionFilterWrap checked={this.props.inFactionOnly} onChange={this.handleInFractionChange} />
					<CostFilterWrap 
						checkedUsual={this.props.inUsualOnly}
						onChangeUsual={this.handleInUsualChange}
						checkedRare={this.props.inRareOnly}
						onChangeRare={this.handleInRareChange}
						checkedEpic={this.props.inEpicOnly}
						onChangeEpic={this.handleInEpicChange}
						checkedLegendary={this.props.inLegendaryOnly}
						onChangeLegendary={this.handleInLegendaryChange}
					/>
					<TypeFilterWrap checked={this.props.inTypeOnly} onChange={this.handleInTypeChange} />
					<BorderFilterWrap checked={this.props.inBorderOnly} onChange={this.handleInBorderChange} />
				</div>
			</div>
		);
	}
}

export default SearchBar;