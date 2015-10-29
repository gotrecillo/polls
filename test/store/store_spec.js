import {expect} from 'chai';

import { setPolls }  from '../../src/actions';
import configureStore from '../../src/store';
import { POLLS as polls } from '../../src/utils/examples';

describe('store', () => {

  it('is a Redux store configured with the correct reducer', () => {

    const store = configureStore();

    expect(store.getState()).to.eql({
      polls: []
    });

    store.dispatch(setPolls(polls));

    expect(store.getState()).to.eql({ polls });

  });

});
