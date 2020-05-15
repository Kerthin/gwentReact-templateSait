import React from 'react';
import RadioButtonProv from '../../../UI/RadioButtonProv/RadioButtonProv';

import './ProvisionFilter.scss';

function ProvisionFilter(props) {
	return(
		<div className="filterBlock__provWrap clearfix">
			<RadioButtonProv value={'p4'} radioName={"provision"} checked={props.checked} onChange={props.onChange} number={'0-4'} />
			<RadioButtonProv value={"p5"} radioName={"provision"} checked={props.checked} onChange={props.onChange} number={'5'} />
			<RadioButtonProv value={"p6"} radioName={"provision"} checked={props.checked} onChange={props.onChange} number={'6'} />
			<RadioButtonProv value={"p7"} radioName={"provision"} checked={props.checked} onChange={props.onChange} number={'7'} />
			<RadioButtonProv value={"p8"} radioName={"provision"} checked={props.checked} onChange={props.onChange} number={'8'} />
			<RadioButtonProv value={"p9"} radioName={"provision"} checked={props.checked} onChange={props.onChange} number={'9'} />
			<RadioButtonProv value={"p10"} radioName={"provision"} checked={props.checked} onChange={props.onChange} number={'10'} />
			<RadioButtonProv value={'pp1'} radioName={"provision"} checked={props.checked} onChange={props.onChange} number={'11+'} />
		</div>
	);
}

export default ProvisionFilter;