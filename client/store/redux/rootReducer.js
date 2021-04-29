import { combineReducers } from 'redux';
import authReducer from './auth';
import entriesReducer from './allEntries';
import singleEntryReducer from './singleEntry';

const rootReducer = combineReducers({
  auth: authReducer,
  entries: entriesReducer,
  entry: singleEntryReducer,
});

export default rootReducer;
