import React from 'react';

export class Main extends React.Component {
  render () {
		return (
			<div>
				<div id="header" className="container">
					<div className="row">
						<div className="header-left">
							<div id="title">Sparkle Club</div>
							<p id="title-description">A lovely place where you can share your love for Kpop with people from all over the world!</p>
						</div>
					<div className="header-right">
						<a href="/">Get App</a>
					</div>
					</div>
					<div className="row" id="main">
						{React.cloneElement(this.props.children, this.props)}
					</div>
					<div id="footer" className="container">
						<strong>SparkleClub © 2017</strong>
					</div>
				</div>
			</div>
		);
	};
};

export default Main;