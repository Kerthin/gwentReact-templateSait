import React from 'react';
import RadioButton from '../../../UI/RadioButton/RadioButton';
import FrontBlock from '../../../UI/FrontBlock/FrontBlock';

import './BorderFilterWrap.scss';

function BorderFilterWrap(props) {
	return(
		<label className="sideFilterWrap">
			<input type="checkbox" className="openFilter" />
			<FrontBlock frontFilterIcon={'color'} frontFilterName={'Цвет'} />
			<div className="popupFilter">
				<RadioButton value={""} radioName={"border"} checked={props.checked} onChange={props.onChange} />
				<RadioButton value={"gold"} radioName={"border"} checked={props.checked} onChange={props.onChange} />
				<RadioButton value={"bronze"} radioName={"border"} checked={props.checked} onChange={props.onChange} />
			</div>
		</label>
	);
}

export default BorderFilterWrap;