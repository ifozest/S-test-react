import React from 'react';
import { shallow } from 'enzyme';

import Item from './';

describe('#components/Item', () => {
  it('should render without crashing', () => {
    const item = {
      id: 1,
      img: 'image',
      brand: 'brand',
    };
    const wrapper = shallow((
      <Item
        item={item}
      />
    ));
    expect(wrapper).toHaveLength(1);
  });
});

