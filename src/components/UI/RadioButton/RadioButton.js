import React from 'react';

import './RadioButton.scss';

function RadioButton(props) {
	return(
		<label className="popupFilter__buttonBlock">
			<input type="radio" value={props.value} name={props.radioName} checked={props.checked} onChange={props.onChange} className="popupFilter__filter" />
			<div className={`filterBlock__buttonBg _${props.value}`}></div>
		</label>
	);
}

export default RadioButton;