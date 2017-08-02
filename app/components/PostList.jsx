import React from 'react';

export class PostList extends React.Component {
  render () {
		return (
			<div className="container ">
				<div className="large-7 columns large-push-3 post-list-main">
					Main Feeds
				</div>
				<div className="large-3 columns large-pull-7 post-list-popular">
					Popular Feeds
				</div>
				<div className="large-2 columns post-list-sidebar">
					<img id="app-icon" src="http://cm1.narvii.com/6517/7613b38f6e4498e31a449dba18e788fdc278d71a_120.jpg" alt="app-icon"/>
					<div id="app-title">K-Pop Sparkle Club</div>
					<p id="app-description">A lovely place where you can share your love for Kpop with people from all over the world!</p>
					<img src="http://rynoss.com/wp-content/uploads/2011/07/kfm-appstore-button.png" alt="ios"/>
					<img src="http://blog.timeneye.com/wp-content/uploads/2014/11/Android-app-store.png" alt="android"/>
				</div>
			</div>
		);
	};
};

export default PostList;