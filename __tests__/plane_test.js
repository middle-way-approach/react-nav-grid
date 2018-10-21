import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('Grid component should return correct output', () => {
  /*const wrapper = shallow(<Grid
    x={0}
    y={0}
    z={1}
    width={100}
    height={100}
  >);
  // expect(wrapper.html()).toEqual('<div></div>');
  // expect(wrapper.text()).toEqual('Test1');
  wrapper.find('Test1');
  */
});
