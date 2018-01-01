import React, {Component} from 'react';
import Reflux from 'reflux';

var ContactsStore 	= require('../stores/contactsStore');

var Link 			= require('react-router').Link;

require('./contacts.css');

function getContacts() {
	return { contacts: ContactsStore.getContacts() }
}


class Contacts extends Component {
	mixins: [Reflux.ListenerMixin];

	constructor(props) {
		super(props);
		this.state = getContacts();
	}

	// componentDidMount() {
	// 	this.listenTo(ContactsStore, this.refreshTable);
	// }

	refreshTable() {
		this.setState({
			contacts: ContactsStore.getContacts()
		});
	}

	render() {
		var rows = this.state.contacts.map(function(contact, i) {
			return (
				<tr key={i}>
					<td><span className="contact-name">{contact.name}</span></td>
					<td>{contact.hours_left}</td>
					<td>{contact.total_hours}</td>
				</tr>
			)
		});

		return (
			<div className="contacts-holder">
				<table className="table">
					<thead>
						<tr>Name</tr>
						<tr>Remaining</tr>
						<tr>Total</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
		)
	}
}	

export default Contacts;