import {combineReducers} from 'redux';

export const dataReducer = (state={}, action) => {
    switch (action.type) {
    case 'FETCH_DATA':
      return state = action.data;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  data: dataReducer
});

export default rootReducer;