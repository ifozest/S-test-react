import React from 'react';
import { shallow } from 'enzyme';

import ErrorPanel from './';

describe('#components/ErrorPanel', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<ErrorPanel />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render error message passed in', () => {
    const errorMessage = 'error';
    const wrapper = shallow(<ErrorPanel error={errorMessage} />);
    expect(wrapper.find('Panel').dive().text()).toBe('Ooohps! error Please reload the page and try again.');
  });
});
