import { setPolls, setEntries }  from '../actions';
import configureStore from '../store';
import { POLLS as polls, ENTRIES as entries} from './examples';


export default function init() {
  const store = configureStore();
  store.dispatch(setPolls(polls));
  store.dispatch(setEntries(entries));
  return store;
}
