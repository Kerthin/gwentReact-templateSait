import React from 'react';

import './RadioButtonProvStart.scss';

function RadioButtonProvStart(props) {
	return(
		<label className="filterBlock__provStart">
			<input type="radio" value='' name="provision" checked={props.checked} onChange={props.onChange} className="filterBlock__provFilter" />
			<div className="filterBlock__provIcon"></div>
		</label>
	);
}

export default RadioButtonProvStart;