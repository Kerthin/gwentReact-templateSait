import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import TopFilter from './TopFilter/TopFilter';
import DeckBar from './DeckBar/DeckBar';
import CardWrap from './CardWrap/CardWrap';

import './Constructor.scss';

class Constructor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: '',
			inUsualOnly: false,
			inRareOnly: false,
			inEpicOnly: false,
			inLegendaryOnly: false,
			inProvOnly: '',
			inFactionOnly: '',
			inBorderOnly: '',
			inTypeOnly: '',
		};
		
		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
		
		this.handleInUsualChange = this.handleInUsualChange.bind(this);
		this.handleInRareChange = this.handleInRareChange.bind(this);
		this.handleInEpicChange = this.handleInEpicChange.bind(this);
		this.handleInLegendaryChange = this.handleInLegendaryChange.bind(this);
		
		this.handleInProvChange = this.handleInProvChange.bind(this);
		this.handleInFractionChange = this.handleInFractionChange.bind(this);
		this.handleInBorderChange = this.handleInBorderChange.bind(this);
		this.handleInTypeChange = this.handleInTypeChange.bind(this);

		this.toggleDropdown = this.toggleDropdown.bind(this);
	}

	handleFilterTextChange(filterText) {
		this.setState({
			filterText: filterText
		});
	}
	
	handleInUsualChange(inUsualOnly) {
		this.setState({
			inUsualOnly: inUsualOnly
		})
	}
	handleInRareChange(inRareOnly) {
		this.setState({
			inRareOnly: inRareOnly
		})
	}
	handleInEpicChange(inEpicOnly) {
		this.setState({
			inEpicOnly: inEpicOnly
		})
	}
	handleInLegendaryChange(inLegendaryOnly) {
		this.setState({
			inLegendaryOnly: inLegendaryOnly
		})
	}
	
	handleInProvChange(inProvOnly) {
		this.setState({
			inProvOnly: inProvOnly
		})
	}
	handleInFractionChange(inFactionOnly) {
		this.setState({
			inFactionOnly: inFactionOnly
		})
	}
	handleInBorderChange(inBorderOnly) {
		this.setState({
			inBorderOnly: inBorderOnly
		})
	}
	handleInTypeChange(inTypeOnly) {
		this.setState({
			inTypeOnly: inTypeOnly
		})
	}

	toggleDropdown(event){
    	this.setState({menuOpen: !this.state.menuOpen});
	}

	render() {
		const mocVar = (this.state.menuOpen)? "open" : "close";
		const tdVar = this.toggleDropdown;

		return (
			<div className='constructor'>
				<SearchBar
					onInUsualChange={this.handleInUsualChange}
					onInRareChange={this.handleInRareChange}
					onInEpicChange={this.handleInEpicChange}
					onInLegendaryChange={this.handleInLegendaryChange}
					onInFractionChange={this.handleInFractionChange}
					onInBorderChange={this.handleInBorderChange}
					onInTypeChange={this.handleInTypeChange}
					moc={mocVar}
				/>

				<div className='cardListWrap'>
					<div className="cardListWrap__hinge"></div>
					<div className="cardListWrap__hinge"></div>
					<div className="cardListWrap__hinge"></div>
					<div className="cardListWrap__hinge"></div>

					<TopFilter
						filterText={this.state.filterText}
						onFilterTextChange={this.handleFilterTextChange}
						onInProvChange={this.handleInProvChange}
						onSelectMenu={tdVar}
						onSelectMenuClass={mocVar}
					/>
					<CardWrap
						cardsInfo={this.props.cardsInfo}
						filterText={this.state.filterText}
						inUsualOnly={this.state.inUsualOnly}
						inRareOnly={this.state.inRareOnly}
						inEpicOnly={this.state.inEpicOnly}
						inLegendaryOnly={this.state.inLegendaryOnly}
						inProvOnly={this.state.inProvOnly}
						inFactionOnly={this.state.inFactionOnly}
						inBorderOnly={this.state.inBorderOnly}
						inTypeOnly={this.state.inTypeOnly}
					/>
				</div>
				<DeckBar />
			</div>
		);
	}
}

export default Constructor;