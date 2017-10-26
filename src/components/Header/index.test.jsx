import React from 'react';
import { shallow } from 'enzyme';

import Header from './';

describe('#components/Header', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toHaveLength(1);
  });
});
