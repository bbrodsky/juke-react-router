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
import Album from './containers/AlbumContainer';
import Artist from './containers/ArtistContainer';




ReactDOM.render(
  <Provider store={store}>
  	<Router history = {hashHistory}>
    	<Route path='/' component={AppContainer}>
	    	<Route path='/albums' component={Albums} />
	    	<Route path='/artists' component={Artists} />
        	<Route path='/albums/:albumId' component={Album} />
        	<Route path='/artists/:artistId' component={Artist} />
	    	<IndexRoute component={Albums} />
    	</Route>
	  </Router>
  </Provider>,
  document.getElementById('app')
);
