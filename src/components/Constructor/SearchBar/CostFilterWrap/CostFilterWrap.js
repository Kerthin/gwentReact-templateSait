import React from 'react';
import CheckboxButton from '../../../UI/CheckboxButton/CheckboxButton';
import FrontBlock from '../../../UI/FrontBlock/FrontBlock';

import './CostFilterWrap.scss';

function CostFilterWrap(props) {
	return(
		<label className="sideFilterWrap">
			<input type="checkbox" className="openFilter" />
			<FrontBlock frontFilterIcon={'cost'} frontFilterName={'Стоимость'} />
			<div className="popupFilter">
				<CheckboxButton value={"usual"} checked={props.checkedUsual} onChange={props.onChangeUsual} />
				<CheckboxButton value={"rare"} checked={props.checkedRare} onChange={props.onChangeRare} />
				<CheckboxButton value={"epic"} checked={props.checkedEpic} onChange={props.onChangeEpic} />
				<CheckboxButton value={"legendary"} checked={props.checkedLegendary} onChange={props.onChangeLegendary} />
			</div>
		</label>
	);
}

export default CostFilterWrap;