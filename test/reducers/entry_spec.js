import {expect} from 'chai';

import { setEntries, addEntry }  from '../../src/actions';
import entryReducer from '../../src/reducers/entries';
import reducer from '../../src/reducers';
import { ENTRIES as entries } from '../../src/utils/examples';

describe('entry tests', () => {

  describe('setEntries', () => {

    it('sets entries to the state using poll reducer', () => {
      const nextState = entryReducer(undefined, setEntries(entries));
      expect(nextState).to.eql(entries);
    });

    it('sets entries to the state using app reducer', () => {
      const nextState = reducer(undefined, setEntries(entries));
      expect(nextState).to.eql({ entries, polls: [] });
    });

  });

  describe('addEntry', () => {

    it('should add a entry to an empty entry state', () => {
      const nextState = entryReducer(undefined, addEntry('IU', 0));
      expect(nextState['0'].length).to.equal(1);
      expect(nextState['0'][0]).to.equal('IU');
    });

    it('should add a entry to a non empty entry state', () => {
      const nextState = entryReducer(entries, addEntry('IU', 0));
      console.log(nextState === entries);
      console.log('>>>>>', nextState);
      console.log('*****', entries);
      expect(nextState['0'].length).to.equal(entries['0'].length + 1);
      expect(nextState['0'][nextState['0'].length]).to.equal('IU');
    });

  });

});
