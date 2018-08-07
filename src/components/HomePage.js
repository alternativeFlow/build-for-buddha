import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {setScreen} from './actions/screen';

class HomePage extends React.Component {

	componentDidMount() {
		this.loadMap();
	}

	loadMap = () => {

		//Map is a 2d array with numbers representing tiles
		let map = ["my map"];

		let screen = {
			map: map
		};
		console.log(map)

		this.props.setScreen(screen);

	};



	render() {

		return(
			<div>
				<p> test</p>
			</div>

		);
	}
}

HomePage.propTypes = {
	setScreen: PropTypes.func.isRequired,
	map: PropTypes.array.isRequired
}

const mapStateToProps = state => {
	return {
		map: state.screen
	};
};

export default connect(mapStateToProps,{setScreen})(HomePage);