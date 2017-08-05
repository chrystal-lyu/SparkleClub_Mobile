import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import PostList from 'PostList';
import UserPage from 'UserPage';

export default (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={PostList}/>
				{/* <Route path="posts/:postId" component={PostDetail}/>*/}
			<Route path="user" component={UserPage}/> 
		</Route>
	</Router>
);