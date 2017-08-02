import React from 'react';

export class PopularPosts extends React.Component {
  render () {
		const popularA = {
			backgroundImage: "url('https://www.astro.com.my/Portals/0/Images/ArticleImages/1325/4432%20Astro%20Circle%20Jay%20Chou%20Concert%20Contest%20Banner%20FA2_FB%20Post_poster.jpg')"
		};

		const popularB = {
			backgroundImage: "url('https://2.bp.blogspot.com/-zCaTd-DDsw4/V1bHhqI3JrI/AAAAAAAAAwk/zU65qfQl_BEiLMULaA1imzNRBrqGSXlRwCKgB/s1600/jaychoubedtimestorylyric.jpg')"
		};

		const popularC = {
			backgroundImage: "url('https://chinkpopped.files.wordpress.com/2008/12/november.jpg')"
		};
		return (
			<div className="container">
				<h5 className="popular-title">&#9733; Popular Posts</h5>
				<div className="popular-post" style={popularA}>
					<div className="popular-post-title">Invincible World Tour 2017</div>
				</div>
				<div className="popular-post" style={popularB}>
					<div className="popular-post-title">Jay Chou Bedtime Stories</div>
				</div>
				<div className="popular-post" style={popularC}>
					<div className="popular-post-title">November's Chopin Alum Release</div>
				</div>
			</div>
		);
	};
};

export default PopularPosts;