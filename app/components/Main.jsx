import axios from 'axios';
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from 'actions';

export class Main extends React.Component {
	componentWillMount() {
		axios.get("http://127.0.0.1:3000/test").then(resp => {
			this.props.fetchData(resp.data);
		})
	}

  render() {
		return (
			<div id="everything">
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
				<div id="header" className="container">
					<nav className="row">
						<div className="header-left">
							<div id="title">全职高手</div>
							<div className="hide-for-small-only" id="title-description">火花社</div>
						</div>
						<div className="header-right">
							<a href="/"><span className="fa">&#xf10b;</span> 下载APP</a>
						</div>
					</nav>
				</div>

				<div id="main" className="container">
					{React.cloneElement(this.props.children, this.props)}
				</div>

				<div id="footer" className="container">
					<strong>火花社 © 2017</strong>
				</div>
			</div>
		);
	};
};

const mapStatetoProps = (state) => {
	return {
		data: state.data
	}
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch)
};

export default connect(mapStatetoProps, mapDispatchToProps)(Main);