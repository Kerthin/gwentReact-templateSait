import React from 'react';

import './RadioButtonProv.scss';

function RadioButtonProv(props) {
	return(
		<label className="filterBlock__provBlock">
			<input type="radio" value={props.value} name={props.radioName} checked={props.checked} onChange={props.onChange} className="filterBlock__provFilter" />
			<div className="filterBlock__provSquare">
				<p className="filterBlock__provNumber">{props.number}</p>
			</div>
		</label>
	);
}

export default RadioButtonProv;