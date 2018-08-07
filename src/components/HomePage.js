import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Game from './Game';

import {setScreen} from './actions/screen';

class HomePage extends React.Component {

	render() {

		return(
			<div>
				<Game />
			</div>

		);
	}
}



export default HomePage;