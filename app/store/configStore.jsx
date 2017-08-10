import * as redux from 'redux';

import rootReducer from 'reducers';

export const defaultState = {};

const store = redux.createStore(rootReducer, defaultState, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;