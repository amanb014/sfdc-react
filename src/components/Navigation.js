import React, {Component} from 'react';

require('./Navigation.css');

export default class Navigation extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		var navs = this.props.links.map((link, i) => {
			return (
				<div key={i} className="nav-item">
					<a href="#">{link.name}</a>
				</div>
			)
		})

		return (
			<div className="nav">
				{ navs }
			</div>
		);
	}
}