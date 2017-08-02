import React from 'react';

export class MainPosts extends React.Component {
  render () {
		return (
			<div className="full-post">
				<div className="user">
					<div className="user-icon"></div>
					<div className="user-info">	
						<div className="user-name"> <a>I_LOVE_JAY</a></div>
						<div className="user-rep"> Rep 289 </div>
					</div>
				</div> 

				<div className="post-body">
					<div className="post-title">Jay Chou's Fan Page</div>
					<div className="post-likes">&hearts; 298</div>
					<div className="img-container">
						<img src="http://dn-pangpangdog.qbox.me/201501/0131.jpg" alt="jaychou2"/>
					</div>
					<p>Proin rutrum porta leo vel facilisis. Nunc facilisis sit amet nisl hendrerit aliquam. Mauris pharetra interdum porta.</p>
					<p>Nullam nisl velit, iaculis eu libero id, semper posuere neque. Vivamus id quam non eros tempus ultrices. Ut placerat elit metus, eu sagittis justo euismod a. </p>
					<p>Aenean ultricies turpis est, non elementum mauris porttitor vel. Cras pellentesque lobortis odio a ultrices. Vestibulum mattis lacus id mauris dictum, non faucibus libero iaculis. </p>
					<p>Proin accumsan laoreet auctor. Phasellus elementum non mi semper congue. Donec at purus mattis arcu egestas hendrerit. Vivamus aliquet justo ac orci sollicitudin luctus. Etiam ornare dapibus ultrices.</p> 
					<p>Vestibulum sodales lobortis nisl vitae gravida. Mauris eu suscipit leo.</p>
					<div className="img-container">
						<img src="https://yt3.ggpht.com/-2KXvguf9c8E/AAAAAAAAAAI/AAAAAAAAAAA/GKYOlzIEpHc/s900-c-k-no-mo-rj-c0xffffff/photo.jpg" alt="jaychou1"/>
					</div>
					<p>Proin rutrum porta leo vel facilisis. Nunc facilisis sit amet nisl hendrerit aliquam. Mauris pharetra interdum porta.</p>
					<p>Nullam nisl velit, iaculis eu libero id, semper posuere neque. Vivamus id quam non eros tempus ultrices. Ut placerat elit metus, eu sagittis justo euismod a. </p>
					<p>Aenean ultricies turpis est, non elementum mauris porttitor vel. Cras pellentesque lobortis odio a ultrices. Vestibulum mattis lacus id mauris dictum, non faucibus libero iaculis. </p>
					<p>Proin accumsan laoreet auctor. Phasellus elementum non mi semper congue. Donec at purus mattis arcu egestas hendrerit. Vivamus aliquet justo ac orci sollicitudin luctus. Etiam ornare dapibus ultrices.</p> 
					<p>Vestibulum sodales lobortis nisl vitae gravida. Mauris eu suscipit leo.</p>				
				</div>

				<div className="post-comments">
					<div className="comments-header">&#9903; 35 comments</div>
					<div className="comments">
						<ul>
							<li className="comment">
								<div className="user-icon"></div>
									<div className="user-info">	
									<div className="user-name"><a>__bibiana_._</a></div>
									<div className="user-comment">Proin accumsan laoreet auctor.</div>
								</div>
							</li>
							<li className="comment">
								<div className="user-icon"></div>
									<div className="user-info">	
									<div className="user-name"><a>gdragoninfaith</a></div>
									<div className="user-comment">Vestibulum sodales lobortis nisl vitae gravida. Mauris eu suscipit leo.</div>
								</div>
							</li>
							<li className="comment">
								<div className="user-icon"></div>
									<div className="user-info">	
									<div className="user-name"><a>Riio</a></div>
									<div className="user-comment">Vivamus id quam non eros tempus ultrices. Ut placerat elit metus, eu sagittis justo euismod a.</div>
								</div>
							</li>
							<li className="comment">
								<div className="user-icon"></div>
									<div className="user-info">	
									<div className="user-name"><a>Amy</a></div>
									<div className="user-comment">Nullam nisl velit, iaculis eu libero id, semper posuere neque. </div>
								</div>
							</li>
							<li className="comment">
								<div className="user-icon"></div>
									<div className="user-info">	
									<div className="user-name"><a>Ed</a></div>
									<div className="user-comment">Like.</div>
								</div>
							</li>							
						</ul>
					</div>
				</div>
			</div>
		);
	};
};

export default MainPosts;