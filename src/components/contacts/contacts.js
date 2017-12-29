var React 			= require('react');
var Reflux 			= require('reflux');
var ContactsStore 	= require('../../stores/contactsStore');

var Link 			= require('react-router').Link;

// require('./contacts.less');
require('./contacts.css');
function getContacts() {
	return { contacts: ContactsStore.getContacts() }
}

var Contacts = React.createClass({
	mixins: [Reflux.ListenerMixin],

	componentDidMount: function() {
		this.listenTo(ContactsStore, this.refreshTable);
	},

	refreshTable: function() {
		this.setState({
			contacts: ContactsStore.getContacts()
		});
	},

	getInitialState: function() {
		return getContacts();
	},

	render: function() {
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
						<th>Name</th>
						<th>Remaining</th>
						<th>Total</th>
					</thead>
					<tbody>
						{ rows }
					</tbody>

				</table>
			</div>
		)
	}
});

module.exports = Contacts;
