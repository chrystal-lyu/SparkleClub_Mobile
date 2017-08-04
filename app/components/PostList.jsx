import React from 'react';

import PopularPosts from 'PopularPosts';
import MainPosts from 'MainPosts';

export class PostList extends React.Component {
  render () {
		return (
			<div className="row body">
				<div className="large-2 medium-12 small-12 columns post-list-sidebar">
					 <img id="app-icon" src="http://s.apptoko.com/a/uploads/thumbnails/112016/amino-communities-and-chats_icon.png" alt="app-icon"/>
					<div id="app-title">Jay Sparkle Club</div>
					<p id="app-description">A lovely place where you can share your love for Jay Chou with people from all over the world!</p>
					<img src="http://rynoss.com/wp-content/uploads/2011/07/kfm-appstore-button.png" alt="ios"/>
					<img src="http://blog.timeneye.com/wp-content/uploads/2014/11/Android-app-store.png" alt="android"/> 
				</div>
				<div className="large-7 medium-12 small-12 columns post-list-main">
					 <MainPosts/> 
				</div>
				<div className="large-3 medium-12 small-12 columns post-list-popular">
					 <PopularPosts/> 
				</div>

			</div>
		);
	};
};

export default PostList;