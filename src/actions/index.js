/*
 * action types
 */
export const SET_POLLS = 'SET_POLLS';
export const ADD_POLL = 'ADD_POLL';
export const SET_ENTRIES = 'SET_ENTRIES';
export const ADD_ENTRY = 'ADD_ENTRY';

/*
 * other constants
 */


/*
 * action creators
 */

export const setPolls = polls => ({ type: SET_POLLS, polls });

export const addPoll = title => ({ type: ADD_POLL, title });

export const setEntries = entries => ({ type: SET_ENTRIES, entries});

export const addEntry = (title, pollId )=> ({ type: ADD_ENTRY, title, pollId});
