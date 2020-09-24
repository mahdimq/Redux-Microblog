import React from 'react';
import Routes from './Routes';
import NavigationHeader from './NavigationHeader';

function App() {
	return (
		<div className='container'>
			<NavigationHeader />
			<Routes />
		</div>
	);
}

export default App;
