import React from 'react';
import CARD_INFO_ARRAY from '../../variables/Array/CARD_INFO_ARRAY';

import Preloader from '../../components/Preloader/Preloader';
import Header from '../../components/Header/Header';
import Constructor from '../../components/Constructor/Constructor';

import './App.scss';

function App(props) {
	return(
		<div className='container'>
			<Preloader />
			<Header />
			<Constructor cardsInfo={CARD_INFO_ARRAY} />
		</div>
	);
}

export default App;