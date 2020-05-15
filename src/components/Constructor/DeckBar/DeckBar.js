import React from 'react';
import DeckItem from './DeckItem/DeckItem';

import './DeckBar.scss';

function DeckBar(props) {
	return(
		<div className="deckListWrap">
			<div className="contentWrap">
				<DeckItem bgName={'hillock'} iconName={'deathShadow'} deckName={'Завещания'} abilityName={'Тень смерти'} />
				<DeckItem bgName={'roche'} iconName={'pincerManeuver'} deckName={'Роше'} abilityName={'Маневр'} />
				<DeckItem bgName={'odo'} iconName={'uprising'} deckName={'Забафы'} abilityName={'Ополчение'} />
				<DeckItem bgName={'ffion'} iconName={'imperialFormation'} deckName={'Солдаты'} abilityName={'Имперское построение'} />
				<DeckItem bgName={'fauve'} iconName={'mysticEcho'} deckName={'Гармония'} abilityName={'Таинственный зов'} />
				<DeckItem bgName={'feignDeath'} iconName={'deadeyeAmbush'} deckName={'Притворство'} abilityName={'Засада ловчих'} />
				<DeckItem bgName={'sweers'} iconName={'enslave'} deckName={'Контроль'} abilityName={'Порабощение'} />
				<DeckItem bgName={'viperWitcher'} iconName={'strategicWithdrawal'} deckName={'Милл'} abilityName={'Стратегическое отступление'} />
				<DeckItem bgName={'vildkaarl'} iconName={'ursineRitual'} deckName={'Темпо'} abilityName={'Медвежий ритуал'} />
				<DeckItem bgName={'greatsword'} iconName={'secondWind'} deckName={'Мечники'} abilityName={'Второе дыхание'} />
				<DeckItem bgName={'orianna'} iconName={'bloodScent'} deckName={'Вампиры'} abilityName={'Запах крови'} />
				<DeckItem bgName={'golyat'} iconName={'fruitsYsgith'} deckName={'Биг отряды'} abilityName={'Плоды Ийсгита'} />
				<DeckItem bgName={'halfelf'} iconName={'precisionStrike'} deckName={'Казнь'} abilityName={'Точный удар'} />
				<DeckItem bgName={'passiflora'} iconName={'hiddenCache'} deckName={'Накопление'} abilityName={'Тайник'} />
				<DeckItem bgName={'moreelse'} iconName={'wildCard'} deckName={'Синдикат'} abilityName={'Непредсказуемость'} />
			</div>
		</div>
	);
}

export default DeckBar;