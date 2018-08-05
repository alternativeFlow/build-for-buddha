import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {

		return(
		  <div>
		    <Route location={this.props.location} path="/" exact component={HomePage} />
 		  </div>
		);
	}
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
