import React from 'react';

import PopularPosts from 'PopularPosts';

export class UserPage extends React.Component {
  render() {
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
          <div className="user-page">
            <div className="user-info">
             <div className="user-cover">
               <img className="user-cover-img" src="https://images.gr-assets.com/hostedimages/1471872902ra/20117824.gif"/>
             </div>
             <div className="user-profile">
               <div className="user-icon">
                 <img className="avatar" src="http://tu.dd321.com/dianyingpu/tuji/ZhiQingChun2JiaoYuanRePaiXueShengChuZuYa202609.jpg"/>
               </div>
               <div className="user-name">I_LOVE_JAY</div>
               <div className="membership">Community Member</div>
               <div className="since-date">Since Oct 2016 (290 Days)</div>
             </div>
             <div className="counter-info">
               <div className="counter-rep">
                 <div className="number">289</div>
                 <div className="counter-label">Reputation</div>
               </div>
               <div className="counter-followers">
                 <div className="number">3450</div>
                 <div className="counter-label">Followers</div>
               </div>
               <div className="counter-following">
                 <div className="number">1802</div>
                 <div className="counter-label">Following</div>
               </div>
             </div>
           </div>
           <div className="member-container">
             <div className="section-header">Recent Followers</div>
             <ul className="members">
               <li><a><img className="avatar" src="http://orig09.deviantart.net/9665/f/2013/182/c/f/jay_chou___big_ben_mv_by_fierlovesjay-d6bkb9c.gif"/></a></li>
               <li><a><img className="avatar" src="https://s-media-cache-ak0.pinimg.com/originals/2f/87/85/2f878550077af0f839dcca4b598bcd6f.gif"/></a></li>
               <li><a><img className="avatar" src="https://media.giphy.com/media/MQ8kAiQ2yZM1a/giphy.gif"/></a></li>
               <li><a><img className="avatar" src="https://media.giphy.com/media/TmYaN4mWVLIcg/giphy.gif"/></a></li>
               <li><a><img className="avatar" src="http://bestanimations.com/Animals/Mammals/Cats/cats/cute-kitty-animated-gif-45.gif"/></a></li>
               <li><a><img className="avatar" src="https://media.giphy.com/media/Zqy8kRlwfwFnq/giphy.gif"/></a></li>
               <li><a><img className="avatar" src="http://ignitestudentlife.com/wp-content/uploads/2016/11/dogswalking.gif"/></a></li>
               <li><a><img className="avatar" src="https://gifimage.net/wp-content/uploads/2017/07/anime-cute-gif-11.gif"/></a></li>
               <li><a><img className="avatar" src="https://media.giphy.com/media/16bJmyPvRbCDu/giphy.gif"/></a></li>
               <li><a><img className="avatar" src="https://media.giphy.com/media/EGauSkKQZuXxS/giphy.gif"/></a></li>
               <li><a><img className="avatar" src="https://media.giphy.com/media/6zI0KUEik37Jm/giphy.gif"/></a></li>
               <li><a><img className="avatar" src="https://media.giphy.com/media/ME0yWj7sRqgPC/giphy.gif"/></a></li>
               <li><a><img className="avatar" src="https://media.giphy.com/media/3o6gE5BJU53nMI0U4E/giphy.gif"/></a></li>
               <li><a><img className="avatar" src="https://media.giphy.com/media/X2QBmjCQAHtle/giphy.gif"/></a></li>
               <li><a><img className="avatar" src="https://s-media-cache-ak0.pinimg.com/originals/2f/87/85/2f878550077af0f839dcca4b598bcd6f.gif"/></a></li>
             </ul>
           </div>
           <div className="section-header">Short Bio</div>

          </div>
           
				</div>
				<div className="large-3 medium-12 small-12 columns post-list-popular">
					 <PopularPosts/> 
				</div>

      </div>    
    )
  }
}

export default UserPage;