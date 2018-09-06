import * as React from 'react';
import { shallow } from 'enzyme';

import Title from '../Title';
import { TileFixture } from './fixture';

describe('Title component', () => {
  it('should render in default state', () => {
    const wrapper = shallow(<Title name={TileFixture.name} />);
    expect(wrapper.find('h2').html()).toMatch(TileFixture.name);
  });
});
