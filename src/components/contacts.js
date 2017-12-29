var React 			= require('react');
var Reflux 			= require('reflux');
var ContactsStore 	= require('../stores/contactsStore');

var Link 			= require('react-router').Link;

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
					<td>{contact.name}</td>
					<td>{contact.hours_remaining}</td>
					<td>{contact.total_hours}</td>
				</tr>
			)
		});

		return (
			<div>
				<table className="table table-striped">
					<thead>
						<th>Name</th>
						<th>Hours Remaining</th>
						<th>Total Hours</th>
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