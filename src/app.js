// jsx React.DOM xx
var React 			= require('react');
var Reflux			= require('reflux');
//Routing
var Router 			= require('react-router');
var RouteHandler 	= Router.RouteHandler
var Route 			= Router.Route;
var DefaultRoute 	= Router.DefaultRoute;
//view components
var Contacts 	= require('./components/contacts');
//stores
var ContactsStore 	= require('./stores/contactsStore');

var routes = (
	<Route handler={ ContactsManager  }>
		<DefaultRoute name="home" handler={Contacts} />
	</Route>
	);

var ContactsManager = React.createClass({
	render: function() {
		return (
			<RouteHandler/>
			);
	}
});

Router.run(routes, function(Handler) {
	React.render(<Handler/>, document.getElementById('app'));
})