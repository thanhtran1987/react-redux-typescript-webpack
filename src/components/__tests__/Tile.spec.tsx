import * as React from 'react';
import { shallow } from 'enzyme';

import Tile from '../Tile';
import { TileFixture } from './fixture';

describe('Tile component', () => {
  it('should render in default state', () => {
    const wrapper = shallow(<Tile show={TileFixture} />);
    expect(wrapper.find('img').prop('src')).toMatch(TileFixture.image);
  });
});
