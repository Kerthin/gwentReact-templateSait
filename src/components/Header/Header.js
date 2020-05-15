import React from 'react';
import './Header.scss';

function Header(props) {
	return(
		<div className="header">
			<div className="playerDetails">
				<div className="avatarWrap">
					<div className="avatarWrap__avatar"></div>
					<div className="avatarWrap__border"></div>
				</div>
				<div className="playerInfoWrap">
					<div className="playerInfo">
						<h1 className="playerInfo__name">Kroeneen</h1>
						<p className="playerInfo__title">The king's messenger</p>
					</div>
				</div>
				<div className="prestigeWrap">
					<div className="prestige">
						<p className="prestige__number">55</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;