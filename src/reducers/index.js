import { combineReducers } from 'redux';
import polls from './poll';
import entries from './entries';

const pollApp = combineReducers({
  polls,
  entries
});

export default pollApp;
