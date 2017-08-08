var axios = require('axios');
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';

import * as actions from 'actions';
import store, {defaultState} from './store/configStore';
import router from 'app/router/';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

store.subscribe(() => {
  var state = store.getState();
  console.log('New State => ', state);
});

// axios.get("http://127.0.0.1:3000/test").then(resp => {
//     console.log("in browser, response is => ", resp.data)
//     store.dispatch(actions.fetchData(resp.data));
//   })


ReactDOM.render(
  <Provider store={store}>
  {router}
  </Provider>,
  document.getElementById('app')
);
