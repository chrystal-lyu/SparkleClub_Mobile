import * as redux from 'redux';
// import thunk from 'redux-thunk';

import rootReducer from 'reducers';

export const defaultState = {};

const store = redux.createStore(rootReducer, defaultState, redux.compose(
  // redux.applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;