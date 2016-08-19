'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import routes from './routes'
import * as localStore from './localStore';
import * as reducers from './reducers';
reducers.routing = routerReducer;

import 'jquery';
// import '../vendor/semantic/dist/semantic.js'
// import '../vendor/semantic/dist/semantic.css'
//import '../vendor/semantic/dist/components/button.min.css';
//import '../vendor/semantic/dist/components/sidebar.min.css';
//import '../vendor/semantic/dist/components/menu.min.css';


const store = createStore(combineReducers(reducers), localStore.get());
const history = syncHistoryWithStore(browserHistory, store);


function run() {
  let state = store.getState();
  localStore.set(state, ['decks', 'cards', 'textArea']);

  ReactDOM.render(
      <Provider store={store}>
          <Router history={history} routes={routes} />
      </Provider>, document.getElementById('root')
  );
}

run();

store.subscribe(run);

//store.subscribe(() => {
//  console.log( store.getState() );
//});

