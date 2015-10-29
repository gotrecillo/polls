import { ADD_ENTRY, SET_ENTRIES } from '../actions';

const setEntries = (state, entries) => Object.assign({}, entries);

function addEntry(state, title, pollId) {
  let pollEntries = state[pollId];
  let poll = {};
  pollEntries = pollEntries ? pollEntries.concat(title) : [title];
  poll[pollId] = pollEntries;
  return Object.assign(state, poll);
}

export default function entryReducer(state = {}, action) {
  switch (action.type) {
    case SET_ENTRIES:
      return setEntries(state, action.entries);
    case ADD_ENTRY:
      return addEntry(state, action.title, action.pollId);
    default:
      return state;
  }
}
