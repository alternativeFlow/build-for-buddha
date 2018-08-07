import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {setScreen} from './actions/screen';


class Game extends React.Component {

	componentDidMount() {
		this.loadMap();
	}

	loadMap = () => {

		//Map is a 2d array with numbers representing tiles
		let map = this.props.map;
		var playerPosition = { x: 0, y: 0 };

		let viewHeight = window.innerHeight;
		let viewWidth = window.innerWidth;

		let visibleMapXLength = viewWidth / 64;
		let visibleMapYLength = viewHeight / 64;
		var visibleMapX, visibleMapY, visibleMap;

		function calculateVisibleMapCoord() {
			visibleMapX = 
				(visibleMapXLength%2==0) 
					? (playerPosition.x-visibleMapXLength/2)
					: (playerPosition.x-(visibleMapXLength+1)/2);
			if (visibleMapX<0) {
				visibleMapX = 0;
			}
			//check for right side visibleMap to total map limit
			if ((playerPosition.x+(visibleMapXLength/2))>=map[0].length) {
				visibleMapX = map[0].length - visibleMapXLength;
			}

			visibleMapY = 
				(visibleMapYLength%2==0) 
					? (playerPosition.y-visibleMapYLength/2)
					: (playerPosition.y-(visibleMapYLength+1)/2);
			if (visibleMapY<0) {
				visibleMapY = 0;
			}
			//check for bottom visibleMap to total map limit
			if ((playerPosition.y+(visibleMapYLength/2))>=map.length) {
				visibleMapY = map.length - visibleMapYLength;
			}
		};
		calculateVisibleMapCoord();

		function createVisibleMap() {
			var k=0;
			for (var y = visibleMapY; y<(visibleMapY+visibleMapYLength); y++) {
				var i=0;
				for (var x = visibleMapX; x<(visibleMapX+visibleMapXLength); x++) {
					visibleMap[k][i] = map[y][x];
					i++;
				}
				k++;
			};
		};
		createVisibleMap();

		let containerStyle = {
			marginLeft: (viewWidth%64)/2,
			marginRight: (viewWidth%64)/2,
			marginTop: (viewHeight%64)/2,
			marginBottom: (viewHeight%64)/2
		};

		/*
		MAP KEY:
		
		*/

		let defaultMap = [["my map"]];

		let screen = {
			map: defaultMap
		};

		this.props.setScreen(screen);
	};

	render() {

		return(
			<div>
			</div>

		);
	}
}

Game.propTypes = {
	setScreen: PropTypes.func.isRequired,
	map: PropTypes.array.isRequired
}

const mapStateToProps = state => {
	return {
		map: state.screen.map
	};
};

export default connect(mapStateToProps,{setScreen})(Game);