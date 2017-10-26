import React from 'react';
import { shallow } from 'enzyme';

import ItemList from './';

describe('#components/ItemList', () => {
  it('should render without crashing', () => {
    const items = [{
      id: 1,
      img: 'img',
      brand: 'brand',
    }];
    const wrapper = shallow(<ItemList items={items} />);
    expect(wrapper).toHaveLength(1);
  });
});
