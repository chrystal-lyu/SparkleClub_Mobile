import React from 'react';
import moment from 'moment';
import uuid from 'uuid';

export class MainPosts extends React.Component {
  render () {
		const {data} = this.props;
		const {author, comments} = this.props.data;
		const _renderContent = () => {
			return data.content.map((content) => {
				if(content.type === 'image') {
					return (
						<div key={uuid()}>
							<div className="img-container">
									<img src={content.data}/>
							</div>
						</div>
					)
				} else if (content.type === 'text') {
					return (
						<div key={uuid()}>
							<p>{content.data}</p>
						</div>
					)
				}
			});
		};

		const _renderComment = () => {
			return comments.map((comment) => {
				return (
					<li className="comment" key={uuid()}>
						<div className="comment-avatar"><img className="avatar" src={comment.author.avatarUrl}/></div>
						<div className="comment-body">	
							<div className="comment-header">
								<a className="user-link">{comment.author.nickName}</a>
								<div className="comment-info"><span className="comment-date">{moment(new Date(comment.author.createdAt)).fromNow()}</span><span className="comment-likes"><span className="fa">&#xf004;</span> {comment.likesCount}</span></div>
							</div>
							<div className="comment-content">{comment.content}</div>
						</div>
					</li>
				)
			});
		};

		if (Object.keys(this.props.data).length !== 0) {
			return (
				<div className="full-post">
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
					<div className="user">
						<div className="user-icon"><a href="/#/user"><img className="avatar" src={author.avatarUrl}/></a></div>
						<div className="user-info">	
							<div className="user-name"><a href="/#/user">{author.nickName}</a></div>
							<div className="user-rep">{author.reputation} 声望</div>
						</div>
						<div className="post-info">
							<div className="post-date">{moment(new Date(data.createdAt)).fromNow()}</div>
							<div className="post-likes"><span className="fa">&#xf004;</span> {data.likesCount}</div>
						</div>
					</div> 

					<div className="post-body">
						<div className="post-title">{data.title}</div>
						<hr/>
						{_renderContent()} 
					</div>

					<div className="post-comments">
						<div className="section-header"><span className="fa">&#xf0e5;</span> {data.commentsCount} comments</div>
						<ul>
							{_renderComment()}
						</ul>
					</div>


					{/* <div className="featured-pages">
						<div className="section-header">&#9733; Popular Pages</div>

						<a className="featured-page">
							<div className="featured-page-content">
								<div className="page-image">
									<image className="gallery" src="http://www.todayonline.com/sites/default/files/styles/photo_gallery_image_lightbox/public/photos/43_images/photo-128.jpg?itok=gKroWfhI"/>
									<image className="avatar" src="http://imgcache.qq.com/music/photo/album_300/17/300_albumpic_8217_0.jpg"/>
								</div>
								<div className="featured-text">
									<h5>Switch you fav color with Smiley</h5>
									<p>Aenean ultricies turpis est, non elementum mauris porttitor vel. Cras pellentesque lobortis odio a ultrices. Vestibulum mattis lacus id mauris dictum, non faucibus libero iaculis. </p>
								</div>
								<div className="post-info">
									<span className="num-comments">&#128488; 43</span><span className="num-likes">&hearts; 1234</span>
								</div>
							</div>
						</a>

						<a className="featured-page">
							<div className="featured-page-content">
								<div className="page-image">
									<image className="gallery" src="http://www.straitstimes.com/sites/default/files/styles/x_large/public/articles/2015/11/07/jay.jpg?itok=RdYlAr65"/>
									<image className="avatar" src="https://media.tenor.com/images/b3570952aaae135cb2acafe68d03e276/tenor.gif"/>
								</div>
								<div className="featured-text">
									<h5>My Trip to Chinatown</h5>
									<p>Vestibulum mattis lacus id mauris dictum, non faucibus libero iaculis. </p>
								</div>
								<div className="post-info">
									<span className="num-comments">&#128488; 198</span><span className="num-likes">&hearts; 367</span>
								</div>
							</div>
						</a>

						<a className="featured-page">
							<div className="featured-page-content">
								<div className="page-image">
									<image className="gallery" src="http://68.media.tumblr.com/7325898993f698f79a0f09a2e6ce0bfa/tumblr_mhuuzkYFNO1s3pcluo1_400.gif"/>
									<image className="avatar" src="https://365cpop.files.wordpress.com/2013/03/jay-chou-opus-12-shou-yu.jpg"/>
								</div>
								<div className="featured-text">
									<h5>Secret</h5>
									<p>Cras pellentesque lobortis odio a ultrices. Vestibulum mattis lacus id mauris dictum, non faucibus libero iaculis.</p>
								</div>
								<div className="post-info">
									<span className="num-comments">&#128488; 345</span><span className="num-likes">&hearts; 200</span>
								</div>
							</div>
						</a>

						<a className="featured-page">
							<div className="featured-page-content">
								<div className="page-image">
									<image className="gallery" src="http://himg2.huanqiu.com/attachment2010/2015/0119/20150119022840676.jpeg"/>
									<image className="avatar" src="http://orig09.deviantart.net/9665/f/2013/182/c/f/jay_chou___big_ben_mv_by_fierlovesjay-d6bkb9c.gif"/>
								</div>
								<div className="featured-text">
									<h5>Fairytale-like wedding</h5>
									<p>Eon elementum mauris porttitor vel. Cras pellentesque lobortis odio a ultrices. Vestibulum mattis lacus id mauris dictum, non faucibus libero iaculis.</p>
								</div>
								<div className="post-info">
									<span className="num-comments">&#128488; 163</span><span className="num-likes">&hearts; 1034</span>
								</div>
							</div>
						</a>

					</div> */}
				</div>
			)
		} else {
			return null;
		}
	};
};

export default MainPosts;