import React from 'react';
import Card from './Card/Card';

import './CardWrap.scss';

class CardWrap extends React.Component {
	render() {
		const filterText = this.props.filterText;
		
		const inUsualOnly = this.props.inUsualOnly;
		const inRareOnly = this.props.inRareOnly;
		const inEpicOnly = this.props.inEpicOnly;
		const inLegendaryOnly = this.props.inLegendaryOnly;
		
		const inProvOnly = this.props.inProvOnly;
		const inFactionOnly = this.props.inFactionOnly;
		const inBorderOnly = this.props.inBorderOnly;
		const inTypeOnly = this.props.inTypeOnly;

		const item = [];

		this.props.cardsInfo.forEach((product) => {
			if (product.name.toLowerCase().indexOf(filterText) === -1) {
				return;
			}
			
			if (inUsualOnly && !product.usual) {
				return;
			}
			if (inRareOnly && !product.rare) {
				return;
			}
			if (inEpicOnly && !product.epic) {
				return;
			}
			if (inLegendaryOnly && !product.legendary) {
				return;
			}
			
			if (product.prov.indexOf(inProvOnly) === -1) {
				return;
			}
			if (product.faction.indexOf(inFactionOnly) === -1) {
				return;
			}
			if (product.border.indexOf(inBorderOnly) === -1) {
				return;
			}
			if (product.type.indexOf(inTypeOnly) === -1) {
				return;
			}
			item.push(
				<Card
					product={product}
					key={product.name}
				/>
			);
		});

		return (
			<div className="cardWrap clearfix">{item}</div>
		);
	}
}

export default CardWrap;