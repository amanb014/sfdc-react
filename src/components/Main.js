import React, { Component } from 'react';
import Navigation from './Navigation';
import Contacts from './Contacts';
// import { Route, NavLink, HashRouter } from 'react-router-dom';

require('./Main.css')

class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		//This will change to a state
		//instead of being a const
		const navData = [
			{
				name: 'Home',
				link: '/'
			}, {
				name: 'Contacts',
				link: '/contacts'
			}
		]

		return (
	        <div>
	          <div className="header">
	          	Employee Vacation Tracker
	          </div>

	          <Navigation links={ navData } />

	          <Contacts />
	        </div>
	      );
	}
}

export default Main;