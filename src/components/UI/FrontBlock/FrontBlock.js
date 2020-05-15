import React from 'react';

import './FrontBlock.scss';

function FrontBlock(props) {
	return (
		<div className="frontBlock">
			<div className="frontBlock__infoWrap">
				<div className={`frontBlock__icon _${props.frontFilterIcon}`}></div>
				<div className="frontBlock__nameWrap">
					<div className="frontBlock__name">{props.frontFilterName}</div>
				</div>
				<div className="frontBlock__toogle"></div>
			</div>
		</div>
	);
}

export default FrontBlock;