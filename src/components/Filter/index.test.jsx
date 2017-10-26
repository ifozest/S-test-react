import React from 'react';
import { shallow } from 'enzyme';

import Filter from './';

describe('#components/Filter', () => {
  it('should render without crashing', () => {
    const func = jest.fn();
    const wrapper = shallow((
      <Filter
        label="test"
        options={[]}
        name="name"
        onChange={func}
      />
    ));
    expect(wrapper).toHaveLength(1);
  });

  it('should render disabled select by default', () => {
    const func = jest.fn();
    const wrapper = shallow((
      <Filter
        label="test"
        options={[]}
        name="name"
        onChange={func}
      />
    ));
    expect(wrapper.find('select').prop('disabled')).toBe(true);
  });

  it('should render not disabled select with passed parameter disabled=false', () => {
    const func = jest.fn();
    const wrapper = shallow((
      <Filter
        label="test"
        options={[]}
        disabled={false}
        name="name"
        onChange={func}
      />
    ));
    expect(wrapper.find('select').prop('disabled')).toBe(false);
  });

  it('should render options passed in with empty one', () => {
    const options = [{
      value: 'testValue',
      title: 'testValue',
    }, {
      value: 'testValue2',
      title: 'testValue2',
    }, {
      value: 'testValue3',
      title: 'testValue3',
    }];
    const func = jest.fn();
    const wrapper = shallow((
      <Filter
        label="test"
        options={options}
        name="name"
        onChange={func}
      />
    ));
    expect(wrapper.find('option')).toHaveLength(4);
  });

  it('should call passed in onChange function after change event', () => {
    const func = jest.fn();
    const wrapper = shallow((
      <Filter
        label="test"
        options={[]}
        name="name"
        onChange={func}
      />
    ));
    wrapper.find('select').simulate('change');
    expect(func).toHaveBeenCalled();
  });
});

