import React from 'react';

export class Main extends React.Component {
  render () {
		return (
			<div id="everything">
				<div id="header" className="container">
					<nav className="row">
						<div className="header-left">
							<div id="title">Sparkle Club</div>
							<div className="hide-for-small-only" id="title-description">A lovely place where you can share your love for Jay Chou with people from all over the world!</div>
						</div>
						<div className="header-right">
							<a href="/">Get App</a>
						</div>
					</nav>
				</div>

				<div id="main" className="container">
					{React.cloneElement(this.props.children, this.props)}
				</div>

				<div id="footer" className="container">
					<strong>SparkleClub © 2017</strong>
				</div>
			</div>
		);
	};
};

export default Main;