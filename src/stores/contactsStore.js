var Reflux = require('reflux');

var arrayFilter  = function(array, predicate) {
	var index = -1,
	    length = array == null ? 0 : array.length,
	    resIndex = 0,
	    result = [];

	while (++index < length) {
	  var value = array[index];
	  if (predicate(value, index, array)) {
	    result[resIndex++] = value;
	  }
	}
	return result;
}

var contactsStore = Reflux.createStore({
	data: {
		contacts: []
	},

	getInitialState: function() {
		return this.data;
	},

	init: function() {
		// var salesforce = new RemoteObjectModel.Contact();

		// salesforce.retrieve({}, function(err, records, event) {
		// 	if(err) console.log('Error: ' + err);
		// 	if(!err) {
		// 		records.forEach(function(record) {
		// 			var contact = {
		// 				"id": record.get("Id"),
		// 				"name": record.get("Name"),
		// 				"hours_remaining": record.get("Hours_Remaining__c"),
		// 				"total_hours": record.get("Total_Hours__c")
		// 			}
		// 			this.data.contacts.push(contact);
		// 		}.bind(this));

		// 		this.trigger();
		// 	}
		// }.bind(this));

		this.data.contacts = [{"name":"Jordan Bauer","hours_left":23,"total_hours":43},{"name":"Adrian Mcfarland","hours_left":12,"total_hours":53},{"name":"Celia Hull","hours_left":23,"total_hours":63},{"name":"Margaret Osborn","hours_left":11,"total_hours":64},{"name":"Zayden Frey","hours_left":23,"total_hours":84},{"name":"Jadyn Choi","hours_left":31,"total_hours":74},{"name":"Justin Sexton","hours_left":12,"total_hours":33},{"name":"Macey Short","hours_left":21,"total_hours":23},{"name":"River Kennedy","hours_left":21,"total_hours":64},{"name":"Corbin Cortez","hours_left":22,"total_hours":64},{"name":"Dixie Kent","hours_left":21,"total_hours":43},{"name":"Simeon Galvan","hours_left":21,"total_hours":64}]


		//add listeners here for retreiving and updating data.

	},

	getContacts: function() {
		return this.data.contacts;
	},

	getContact: function(contactId) {
		return arrayFilter(this.data.contacts, {'id': contactId})[0];
	}

});

module.exports = contactsStore;