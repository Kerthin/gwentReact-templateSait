import React from 'react';
import RadioButton from '../../../UI/RadioButton/RadioButton';
import FrontBlock from '../../../UI/FrontBlock/FrontBlock';

import './FactionFilterWrap.scss';

function FactionFilterWrap(props) {
	return(
		<label className="sideFilterWrap">
			<input type="checkbox" className="openFilter" />
			<FrontBlock frontFilterIcon={'faction'} frontFilterName={'Fraction'} />
			<div className="popupFilter">
				<RadioButton value={""} radioName={"faction"} checked={props.checked} onChange={props.onChange} />
				<RadioButton value={"neutral"} radioName={"faction"} checked={props.checked} onChange={props.onChange} />
				<RadioButton value={"monsters"} radioName={"faction"} checked={props.checked} onChange={props.onChange} />
				<RadioButton value={"nilfgaard"} radioName={"faction"} checked={props.checked} onChange={props.onChange} />
				<RadioButton value={"northern"} radioName={"faction"} checked={props.checked} onChange={props.onChange} />
				<RadioButton value={"scoiatael"} radioName={"faction"} checked={props.checked} onChange={props.onChange} />
				<RadioButton value={"skellige"} radioName={"faction"} checked={props.checked} onChange={props.onChange} />
				<RadioButton value={"syndicate"} radioName={"faction"} checked={props.checked} onChange={props.onChange} />
			</div>
		</label>
	);
}

export default FactionFilterWrap;