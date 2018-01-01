// jsx React.DOM xx

import React from 'react';
import ReactDOM from 'react-dom';
//Routing
// var Router 			= require('react-router');
// var RouteHandler 	= Router.RouteHandler
// var Route 			= Router.Route;
// var DefaultRoute 	= Router.DefaultRoute;
//view components
import Main from './components/Main';
// var Contacts 	= require('./components/contacts/contacts');
// //stores
// var ContactsStore 	= require('./stores/contactsStore');
import 'normalize.css';


ReactDOM.render(
  <Main />,
  document.getElementById('container')
);