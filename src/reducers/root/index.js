import { combineReducers } from 'redux';

import loading from 'reducers/loading';
import error from 'reducers/error';
import data from 'reducers/data';
import visibilityFilter from 'reducers/visibilityFilter';

const rootReducer = combineReducers({
  loading,
  error,
  data,
  visibilityFilter,
});

export default rootReducer;
