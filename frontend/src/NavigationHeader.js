import React from 'react';
import { Link } from 'react-router-dom';

function NavigationHeader() {
	return (
		<div className='jumbotron'>
			<h1 className='display-4'>Microblog</h1>
			<p className='lead'>Get in the Rithm of blogging!</p>
			<Link to='/' className=' mx-2'>
				Blog
			</Link>
			<Link to='/new' className=' mx-2'>
				Add a New Post
			</Link>
		</div>
	);
}

export default NavigationHeader;
