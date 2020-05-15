import React from 'react';

import './TextFilter.scss';

function TextFilter(props) {
	return(
		<div className="filterBlock__textFilterWrap">
			<input
					type="text"
					placeholder="SEARCH"
					value={props.value}
					onChange={props.onChange}
					className="filterBlock__textFilter"
				/>
		</div>
	);
}

export default TextFilter;