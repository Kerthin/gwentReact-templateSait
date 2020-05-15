import React from 'react';

import '../RadioButton/RadioButton.scss';

function CheckboxButton(props) {
	return(
		<label className="popupFilter__buttonBlock">
			<input type="checkbox" checked={props.checked} onChange={props.onChange} className="popupFilter__filter" />
			<div className={`filterBlock__buttonBg _${props.value}`}></div>
		</label>
	);
}

export default CheckboxButton;