import React from 'react';

import PopularPosts from 'PopularPosts';
import MainPosts from 'MainPosts';

export class PostList extends React.Component {	
  render () {
		return (
			<div className="row body">
				<div className="post-list-main">
					<MainPosts {...this.props}/> 
				</div>

				{/* <div className="large-3 medium-12 small-12 columns post-list-popular">
					 <PopularPosts {...this.props}/> 
				</div> */}

				<div className="post-list-sidebar">
					<img id="app-icon" src="http://s.apptoko.com/a/uploads/thumbnails/112016/amino-communities-and-chats_icon.png" alt="app-icon"/>
					<div className="side-info">
						<div id="app-title">全职高手 x 火花社</div>
						<p id="app-description">A lovely place where you can share your love for Jay Chou with people from all over the world!</p>
					</div>
					<a><img className="download-icon" src="http://www.ayoba.com/Content/images/theme/ayobadotcom_android.png" alt="android"/></a>
				</div> 
				
			</div>
		);
	};
};

export default PostList;