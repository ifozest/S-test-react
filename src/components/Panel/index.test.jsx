import React from 'react';
import { shallow } from 'enzyme';

import Panel from './';

describe('#components/Panel', () => {
  it('should render without crashing', () => {
    const wrapper = shallow((
      <Panel>test</Panel>
    ));
    expect(wrapper).toHaveLength(1);
  });

  it('should render children', () => {
    const wrapper = shallow((
      <Panel>
        <div>children</div>
      </Panel>
    ));
    expect(wrapper.contains(<div>children</div>)).toBe(true);
  });

  it('should have css classNames passed in', () => {
    const className = 'className test';
    const wrapper = shallow((
      <Panel className={className}>
        <div>children</div>
      </Panel>
    ));
    expect(wrapper.hasClass('className')).toBe(true);
    expect(wrapper.hasClass('test')).toBe(true);
  });
});

