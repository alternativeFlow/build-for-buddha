import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {defaultMap} from '../Utils/Game';

import {setScreen} from './actions/screen';


class Game extends React.Component {

	componentDidMount() {
		this.loadMap();
	}

	/* NEEDS TO BE DONE
		-Decide starting position
			-based on total map coords, manually decide starting positions
		-Decide inventory
		-Decide player model in general, ie what data is associated with the player
	*/
	loadPlayer = () => {

	};

	/* NEEDS TO BE DONE
		-Load a (randomly generated?) environment overlay containing
			-ie. gold ore to mine, trees to chop, berries to pick for health, ect.
	*/
	loadEnvironmentOverlay = () => {

	};

	/* IN PROGRESS
		-Load the tiles of the map which do not contain interactable parts
			-except for water and trees
	*/
	loadMap = () => {
		//Map is a 2d array with numbers representing tiles
		let map = this.props.map;
		console.log(map);
		var playerPosition = { x: 0, y: 0 };

		let viewHeight = window.innerHeight;
		let viewWidth = window.innerWidth;

		let visibleMapXLength = ((viewWidth - (viewWidth%64)) / 64);
		let visibleMapYLength = ((viewHeight - (viewHeight%64)) / 64);

		function calculateVisibleMapCoord() {
			var visibleMapX, visibleMapY;
			visibleMapX = 
				(visibleMapXLength%2==0) 
					? (playerPosition.x-visibleMapXLength/2)
					: (playerPosition.x-(visibleMapXLength+1)/2);
			//check for left/right side visibleMap to total map limit
			if (map) {
				if ((playerPosition.x+(visibleMapXLength/2))>=map[0].length) {
					visibleMapX = map[0].length - visibleMapXLength;
				}
			}
			if (visibleMapX<0) {
				visibleMapX = 0;
			}

			visibleMapY = 
				(visibleMapYLength%2==0) 
					? (playerPosition.y-visibleMapYLength/2)
					: (playerPosition.y-(visibleMapYLength+1)/2);
			console.log(visibleMapY);
			//check for top/bottom visibleMap to total map limit
			if ((playerPosition.y+(visibleMapYLength/2))>=map.length) {
				visibleMapY = map.length - visibleMapYLength;
			}
			if (visibleMapY<0) {
				visibleMapY = 0;
			}
			return {x: visibleMapX, y: visibleMapY};
		};

		function createVisibleMap() {
			let visibleMapCoord = calculateVisibleMapCoord();
			var visibleMap = [[]];

			var k=0;
			for (var y = visibleMapCoord.y; y<(visibleMapCoord.y+visibleMapYLength); y++) {
				var i=0;
				for (var x = visibleMapCoord.x; x<(visibleMapCoord.x+visibleMapXLength); x++) {
					//check for undefined values, init if undefined
					if (!visibleMap[k]) {
						visibleMap[k] = [];
					}
					//mapping values onto return value
					visibleMap[k][i] = map[y][x];
					i++;
				}
				k++;
			};
			return visibleMap;
		};
		let visibleMap = createVisibleMap();

		let containerStyle = {
			marginLeft: (viewWidth%64)/2,
			marginRight: (viewWidth%64)/2,
			marginTop: (viewHeight%64)/2,
			marginBottom: (viewHeight%64)/2
		};

		/*
		MAP KEY:
			MAP NEEDS TO BE BUILT. MAP KEY NEEDS TO BE BUILT.
			SEE build-for-buddha/src/assets/2DGameAssets for tiles to map.
			SEE build-for-buddha/src/Utils/Game.js for Map. Size should be changed.
		*/

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