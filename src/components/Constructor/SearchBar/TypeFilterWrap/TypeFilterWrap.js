import React from 'react';
import RadioButton from '../../../UI/RadioButton/RadioButton';
import FrontBlock from '../../../UI/FrontBlock/FrontBlock';

import './TypeFilterWrap.scss';

function TypeFilterWrap(props) {
	return(
		<label className="sideFilterWrap">
			<input type="checkbox" className="openFilter" />
			<FrontBlock frontFilterIcon={'type'} frontFilterName={'Тип карты'} />
			<div className="popupFilter">
				<RadioButton value={""} radioName={"type"} checked={props.checked} onChange={props.onChange} />
				<RadioButton value={"unit"} radioName={"type"} checked={props.checked} onChange={props.onChange} />
				<RadioButton value={"special"} radioName={"type"} checked={props.checked} onChange={props.onChange} />
				<RadioButton value={"artifact"} radioName={"type"} checked={props.checked} onChange={props.onChange} />
				<RadioButton value={"strategy"} radioName={"type"} checked={props.checked} onChange={props.onChange} />
			</div>
		</label>
	);
}

export default TypeFilterWrap;