import react from 'react';
import { shallow } from 'enzyme';
import PhotoGallery from './PhotoGallery';

it('should render multiple photos', () => {
  const wrapper = shallow(<PhotoGallery />);
  const h1 = wrapper.find('h1');
  const result = h1.text();

  expect(result).toBe('Xill0w');
})