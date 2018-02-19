import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDSWnWlVHNltLJeUozAb-R7-seXpbGFBEQ';

//Create a new component. This component should produce
//some HTML

const app = document.getElementById('container')
const HolaMundi = () => {
	return (
		<div> 
		< SearchBar />
		</div>
		)
}

//Take this component's generate HTML and put it
// on the page (in DOM)
ReactDOM.render(<HolaMundi />, app)