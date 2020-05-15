import React from 'react';

import './Card.scss';

class Card extends React.Component {
	render() {
		const product = this.props.product;

		var provPath = String(product.prov.match(/\d+/));

		var factionClass = product.faction;
		var borderClass = product.border;
		var videoPath = `img/video/${product.type}/${provPath}/${product.src}`;

		var prov = <p className="provisionBg__number">{parseInt(product.prov.match(/\d+/))}</p>;

		var cost;
		if (product.usual) {
			cost = 'usual';
		} else if (product.rare) {
			cost = 'rare';
		} else if (product.epic) {
			cost = 'epic';
		} else {
			cost = 'legendary';
		}

		var strengthType;
		var provBlock = <div className="provisionBg">{prov}</div>;

		if (product.type === 'special') {
			strengthType = <div className="strengthBg__special"></div>;
		} else if (product.type === 'artifact') {
			strengthType = <div className="strengthBg__artifact"></div>;
		} else if (product.type === 'strategy') {
			videoPath = `img/video/${product.type}/${product.src}`;
			strengthType = <div className="strengthBg__strategy"></div>;
			provBlock = null;
		} else {
			strengthType = <p className="strengthBg__number">{product.strength}</p>;
		}

		var nameTooltip = <h1 className="tooltip__title">{product.name}</h1>;

		return (
			<div className={`card _${factionClass} _${borderClass}`}>
				<video src={videoPath} poster="img/poster/cursedScroll.mp4" preload="true" autoPlay loop muted></video>
				
				<div className="borderBg"></div>
				<div className={`strengthBg _${cost}`}>{strengthType}</div>
				{provBlock}

				<div className="tooltip">
					<div className="tooltip__titleWrap">{nameTooltip}</div>
					<div className="tooltip__infoWrap">
						<div className="tooltip__info">{product.tooltip}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;