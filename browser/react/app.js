'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import AppContainer from './containers/AppContainer';
//import Routes from './components/Routes';
import Albums from './containers/AlbumsContainer';
import Artists from './containers/ArtistsContainer';



ReactDOM.render(
  <Provider store={store}>
  	<Router history = {hashHistory}>
    	<Route path='/' component={AppContainer}>
	    	<Route path='/albums' component={Albums} />
	    	<Route path='/artists' component={Artists} />
	    	<IndexRoute component={Albums} />
    	</Route>

	</Router>
  </Provider>,
  document.getElementById('app')
);