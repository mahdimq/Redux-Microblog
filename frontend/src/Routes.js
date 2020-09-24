import React from 'react';
import NewPost from './NewPost';
import { Route, Switch } from 'react-router-dom';
import Post from './Post';
import Homepage from './Homepage';

function Routes() {
	return (
		<Switch>
			<Route exact path='/new'>
				<NewPost />
			</Route>
			<Route exact path='/'>
				<Homepage />
			</Route>
			<Route exact path='/:postId'>
				<Post />
			</Route>
		</Switch>
	);
}

export default Routes;
