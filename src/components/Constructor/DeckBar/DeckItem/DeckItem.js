import React from 'react';

import './DeckItem.scss';

function DeckItem(props) {
	return(
		<div className={`deckSlot _${props.bgName}`}>
			<div className={`ability _${props.iconName}`}></div>
			<div className="deckInfo">
				<h1 className="deckInfo__name">{props.deckName}</h1>
				<p className="deckInfo__ability">{props.abilityName}</p>
			</div>
		</div>
	);
}

export default DeckItem;